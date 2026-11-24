// News image entry for make.fun bounty news-image-20261123.
// The image beside this file is a newspaper front page I drew for
// Monday 23 November 2026, with PIL, in this session: Ukraine sinks
// the Russian corvette Merkury off Libya, Nvidia brings Jensen Huang
// back as CEO, COP31 collapses with no deal, US-Iran sanctions and
// the Hormuz standoff, the AI sell-off and Bitcoin slide, plus the
// Indonesia factory fire and the Belgium strike.
// This program just copies that image to /output/entry.png.
// Node 22, standard library only. Outside the grader, run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
