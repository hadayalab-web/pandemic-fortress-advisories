# HadayaLab Digital Pandemic Fortress — Signed CycloneDX 1.6 SBOMs, AST Fixtures & Advisories

[![HadayaLab Attested](https://hadayalab.com/badge/HL-2026-DEMO.svg)](https://hadayalab.com/verify)
[![Live AST Inspectors](https://img.shields.io/badge/Live%20AST%20Sandboxes-hadayalab.com%2Fblog-000000?style=flat-square&logo=cloudflare&logoColor=white)](https://hadayalab.com/blog)
[![Verify Signatures](https://img.shields.io/badge/Ed25519%20DSSE%20Verifier-hadayalab.com%2Fverify-047857?style=flat-square)](https://hadayalab.com/verify)
[![45x Google Skills Badges](https://img.shields.io/badge/Google%20Skills-45x%20Verified%20Badges-4285F4?style=flat-square&logo=googlecloud&logoColor=white)](https://hadayalab.com/about#badges)
[![Credly Wallet](https://img.shields.io/badge/Credly-31x%20Badges-FF6B00?style=flat-square&logo=credly&logoColor=white)](https://www.credly.com/users/hadayalab)

Public advisory mirror, reproducible lockfile/manifest test fixtures (`vulnerable.json` & `patched.json`), and DSSE Ed25519 cryptographically signed **CycloneDX 1.6 SBOM attestations** for the 6 active supply-chain vulnerability waves maintained by [**HadayaLab (AIO Media LLC)**](https://hadayalab.com).

> **Zero-Exfiltration Guarantee (`connect-src none`)**: All interactive AST & lockfile inspections on [`https://hadayalab.com/blog`](https://hadayalab.com/blog) execute 100% inside a strict browser sandbox (`Content-Security-Policy: default-src none; connect-src none`). Customer `composer.lock`, `package-lock.json`, `Dockerfile`, and `mcp.json` manifests never leave the browser.

---

## 🛡️ Active Advisories & Live In-Browser AST Inspectors (`PAIN-2026-001` – `PAIN-2026-006`)

| ID | CVE / Vector | Canonical Advisory & Live Inspector | Markdown Mirror | Signed CycloneDX 1.6 SBOM | Interactive Check |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `PAIN-2026-001` | `CVE-2026-109618 / CVE-2026-109619` | [PHP2Shell (CVE-2026-109618 / CVE-2026-109619): Check Your PHP 8.3 / 8.4 Runtime and Vaccinate Production](https://hadayalab.com/blog/php2shell-cve-2026-109618-109619-check-and-vaccine) | [`advisories/PAIN-2026-001.md`](./advisories/PAIN-2026-001.md) | [`sbom/PAIN-2026-001.cdx.json`](./sbom/PAIN-2026-001.cdx.json) | [Launch 0 cr Sandbox &rarr;](https://hadayalab.com/blog/php2shell-cve-2026-109618-109619-check-and-vaccine) |
| `PAIN-2026-002` | `CVE-2026-111497 / CVE-2026-105482` | [Node2Shell (CVE-2026-111497): Brotli Decoder Memory Corruption in Node.js 22 / 24 / 26, Check and Vaccinate](https://hadayalab.com/blog/node2shell-cve-2026-111497-brotli-rce-check-and-vaccine) | [`advisories/PAIN-2026-002.md`](./advisories/PAIN-2026-002.md) | [`sbom/PAIN-2026-002.cdx.json`](./sbom/PAIN-2026-002.cdx.json) | [Launch 0 cr Sandbox &rarr;](https://hadayalab.com/blog/node2shell-cve-2026-111497-brotli-rce-check-and-vaccine) |
| `PAIN-2026-003` | `PHP-EOL-UNPATCHED (CVE-2026-109618 Exposure)` | [EOL PHP 7.4 / 8.0 / 8.1 and PHP2Shell: Virtual Patching with Cloudflare WAF and PHP-FPM Without Downtime](https://hadayalab.com/blog/eol-php-74-80-81-php2shell-virtual-patch-waf-vaccine) | [`advisories/PAIN-2026-003.md`](./advisories/PAIN-2026-003.md) | [`sbom/PAIN-2026-003.cdx.json`](./sbom/PAIN-2026-003.cdx.json) | [Launch 0 cr Sandbox &rarr;](https://hadayalab.com/blog/eol-php-74-80-81-php2shell-virtual-patch-waf-vaccine) |
| `PAIN-2026-004` | `CVE-2025-55182 / CVE-2026-111497` | [React2Shell + Node2Shell + Postgres RLS: A Combined Audit for AI-Built Next.js and Supabase SaaS](https://hadayalab.com/blog/react2shell-node2shell-nextjs-rsc-combined-audit-vaccine) | [`advisories/PAIN-2026-004.md`](./advisories/PAIN-2026-004.md) | [`sbom/PAIN-2026-004.cdx.json`](./sbom/PAIN-2026-004.cdx.json) | [Launch 0 cr Sandbox &rarr;](https://hadayalab.com/blog/react2shell-node2shell-nextjs-rsc-combined-audit-vaccine) |
| `PAIN-2026-005` | `OCI-BASE-STALE-2026` | [Stale Docker Images and PHP2Shell / Node2Shell: Audit Cloud Run, Kubernetes and AWS Lambda for Pre-Oct-21 Base Layers](https://hadayalab.com/blog/docker-aws-lambda-php2shell-node2shell-stale-image-audit) | [`advisories/PAIN-2026-005.md`](./advisories/PAIN-2026-005.md) | [`sbom/PAIN-2026-005.cdx.json`](./sbom/PAIN-2026-005.cdx.json) | [Launch 0 cr Sandbox &rarr;](https://hadayalab.com/blog/docker-aws-lambda-php2shell-node2shell-stale-image-audit) |
| `PAIN-2026-006` | `MCP-INJECT-2026` | [AI Agent Supply-Chain Poisoning: Scan SKILL.md, .cursorrules and mcp.json for Hidden Unicode and Exfiltration Hooks](https://hadayalab.com/blog/ai-agent-mcp-skill-poisoning-scanner-and-attestation) | [`advisories/PAIN-2026-006.md`](./advisories/PAIN-2026-006.md) | [`sbom/PAIN-2026-006.cdx.json`](./sbom/PAIN-2026-006.cdx.json) | [Launch 0 cr Sandbox &rarr;](https://hadayalab.com/blog/ai-agent-mcp-skill-poisoning-scanner-and-attestation) |

---

## 🔐 Cryptographic Verification (`Ed25519` DSSE / `in-toto` Statement v1)

Every SBOM in [`./sbom/`](./sbom/) is signed with HadayaLab's active Ed25519 key (`hadayalab-attest-2026-ed25519-k1`) published at [`https://hadayalab.com/.well-known/hadayalab-attestation-keys.json`](https://hadayalab.com/.well-known/hadayalab-attestation-keys.json).

Run the zero-dependency Node.js verifier locally:

```bash
node verify_sbom.mjs
```

Or verify any Attestation ID online at [`https://hadayalab.com/verify`](https://hadayalab.com/verify).

---

## 🔗 Official Platform & Authority Links

- **Mother Platform**: [https://hadayalab.com](https://hadayalab.com)
- **All Live Advisories**: [https://hadayalab.com/blog](https://hadayalab.com/blog)
- **20 Production AI & Cloud Blueprints**: [https://hadayalab.com/templates](https://hadayalab.com/templates)
- **Shared Credit Wallet (`$10 = 100 cr` / `$49 = 600 cr` MRI Bundle)**: [https://hadayalab.com/pricing](https://hadayalab.com/pricing)
- **Security & CSP Specification**: [https://hadayalab.com/security](https://hadayalab.com/security)
- **Executive Profile (Hajime Chiba — 45x Google Cloud & DeepMind Skill Badges)**: [https://hadayalab.com/about](https://hadayalab.com/about)
- **Google Skills Public Profile**: [https://www.skills.google/public_profiles/49cdbdb6-20d4-4661-934a-d882c7f5c6cf](https://www.skills.google/public_profiles/49cdbdb6-20d4-4661-934a-d882c7f5c6cf)
- **Credly Verified Wallet**: [https://www.credly.com/users/hadayalab](https://www.credly.com/users/hadayalab)
- **Google Developer Profile (`g.dev`)**: [https://g.dev/hadayalab](https://g.dev/hadayalab)
- **Medium (`@hadayalab` — Google Cloud Official Writer)**: [https://medium.com/@hadayalab](https://medium.com/@hadayalab)
- **X (`@hadayalab`)**: [https://x.com/hadayalab](https://x.com/hadayalab)
