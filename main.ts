import { writeFileSync, mkdirSync } from "node:fs";

// The vacuum's excuse is a bureaucratic euphemism: "relocated", never "eaten".
const line = "I did not eat your sock. I relocated it to a warmer, darker place where it will never be found.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
