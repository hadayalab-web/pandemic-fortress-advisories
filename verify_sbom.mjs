#!/usr/bin/env node
/**
 * Zero-dependency Ed25519 DSSE CycloneDX 1.6 SBOM Verifier for HadayaLab Attestations
 * Public JWKS: https://hadayalab.com/.well-known/hadayalab-attestation-keys.json
 */
import fs from "fs";
import path from "path";
import crypto from "crypto";

const jwks = JSON.parse(fs.readFileSync(path.join(".well-known", "hadayalab-attestation-keys.json"), "utf8"));
const jwk = jwks.keys.find((k) => k.kid === "hadayalab-attest-2026-ed25519-k1");
if (!jwk) {
  console.error("[FAIL] Public key hadayalab-attest-2026-ed25519-k1 not found in JWKS");
  process.exit(1);
}
const pubKey = crypto.createPublicKey({ key: jwk, format: "jwk" });

function computeDssePAE(payloadType, payload) {
  const pTypeBuf = Buffer.from(payloadType, "utf8");
  const pBuf = Buffer.isBuffer(payload)
    ? payload
    : Buffer.from(typeof payload === "string" ? payload : JSON.stringify(payload), "utf8");
  return Buffer.concat([
    Buffer.from(`DSSEv1 ${pTypeBuf.length} `, "utf8"),
    pTypeBuf,
    Buffer.from(` ${pBuf.length} `, "utf8"),
    pBuf,
  ]);
}

function getSbomPAE(sbom) {
  const { signature, ...unsignedSbom } = sbom;
  return computeDssePAE("application/vnd.cyclonedx+json", JSON.stringify(unsignedSbom));
}

const files = fs.readdirSync("sbom").filter((x) => x.endsWith(".cdx.json")).sort();
if (files.length === 0) {
  console.error("[FAIL] No .cdx.json SBOM files found in ./sbom");
  process.exit(1);
}

for (const f of files) {
  const sbom = JSON.parse(fs.readFileSync(path.join("sbom", f), "utf8"));
  const ok = crypto.verify(null, getSbomPAE(sbom), pubKey, Buffer.from(sbom.signature.value, "base64"));
  console.log(
    `[${ok ? "PASS" : "FAIL"}] ${f} (serial=${sbom.serialNumber}, keyId=${sbom.signature.keyId}) -> https://hadayalab.com/verify`
  );
  if (!ok) process.exit(1);
}
