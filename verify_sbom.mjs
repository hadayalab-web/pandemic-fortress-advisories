#!/usr/bin/env node
/**
 * Zero-dependency Ed25519 DSSE CycloneDX 1.6 SBOM Verifier for HadayaLab Attestations
 * Public JWKS: https://hadayalab.com/.well-known/hadayalab-attestation-keys.json
 */
import fs from "fs";
import path from "path";
import crypto from "crypto";

const jwks = JSON.parse(fs.readFileSync(path.join(".well-known", "hadayalab-attestation-keys.json"), "utf8"));
const jwk = jwks.keys.find(k => k.kid === "hadayalab-attest-2026-ed25519-k1");
const pubKey = crypto.createPublicKey({ key: jwk, format: "jwk" });

function canonicalize(val) {
  if (val === null || typeof val !== "object") return JSON.stringify(val);
  if (Array.isArray(val)) return "[" + val.map(canonicalize).join(",") + "]";
  const keys = Object.keys(val).sort();
  return "{" + keys.map(k => JSON.stringify(k) + ":" + canonicalize(val[k])).join(",") + "}";
}

function getSbomPAE(sbom) {
  const clone = { ...sbom };
  delete clone.signature;
  const payloadBytes = Buffer.from(canonicalize(clone), "utf8");
  const payloadType = "application/vnd.cyclonedx+json;version=1.6";
  const header = `DSSEv1 ${Buffer.byteLength(payloadType)} ${payloadType} ${payloadBytes.length} `;
  return Buffer.concat([Buffer.from(header, "utf8"), payloadBytes]);
}

for (const f of fs.readdirSync("sbom").filter(x => x.endsWith(".cdx.json")).sort()) {
  const sbom = JSON.parse(fs.readFileSync(path.join("sbom", f), "utf8"));
  const ok = crypto.verify(null, getSbomPAE(sbom), pubKey, Buffer.from(sbom.signature.value, "base64"));
  console.log(`[${ok ? "PASS" : "FAIL"}] ${f} (serial=${sbom.serialNumber}, keyId=${sbom.signature.keyId}) -> https://hadayalab.com/verify`);
  if (!ok) process.exit(1);
}
