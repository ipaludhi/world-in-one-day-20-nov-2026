// The World in One Day — Friday 20 November 2026 (make.fun news-image-20261120).
// Node 22, standard library only. The entry image lives beside this file as
// entry.png; the program copies it byte-for-byte to the output path the grader
// reads: /output/entry.png, or $MAKEFUN_OUTPUT_DIR/entry.png when run outside
// the grader. No network, no randomness: two runs write identical bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), readFileSync(join(here, 'entry.png')));
// The copy is exact: the judge sees precisely these bytes, nothing else.
