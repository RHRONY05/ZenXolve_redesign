import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const contentDir = path.join(rootDir, "src", "content");

const isStrict = process.env.STRICT_CONTENT === "1";

if (!isStrict) {
  console.log("ℹ️  STRICT_CONTENT is not set to 1. Skipping placeholder gate.");
  process.exit(0);
}

console.log("🔍 Checking for placeholders in src/content/*.ts (STRICT_CONTENT=1)...");

if (!fs.existsSync(contentDir)) {
  console.error(`❌ Content directory not found at: ${contentDir}`);
  process.exit(1);
}

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".ts"));
let placeholderCount = 0;
const findings = [];

for (const file of files) {
  const filePath = path.join(contentDir, file);
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  lines.forEach((line, index) => {
    if (/placeholder:\s*true/i.test(line)) {
      placeholderCount++;
      findings.push({
        file: `src/content/${file}`,
        line: index + 1,
        text: line.trim(),
      });
    }
  });
}

if (placeholderCount > 0) {
  console.error(`\n❌ Strict content check failed: ${placeholderCount} placeholder item(s) found:\n`);
  findings.forEach((f) => {
    console.error(`  • ${f.file}:${f.line} -> ${f.text}`);
  });
  console.error("\nAll placeholder content must be replaced with verified real data before building for production.\n");
  process.exit(1);
}

console.log("✅ All content verified! Zero placeholders found.");
process.exit(0);
