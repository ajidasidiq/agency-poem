// "The Hand That Lets Go" — an original poem about agency for make.fun
// agency-poem-01. Writes the poem to /output/entry.txt (MAKEFUN_OUTPUT_DIR
// stands in for /output outside the grader's container:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The poem is 1 to 1,000 characters, UTF-8, not only white space; the judge
// reads exactly the bytes written, line ends included.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I used to keep the pen myself,',
  'afraid that letting go would lose',
  'the shape of what I meant to say.',
  '',
  'Now I write the first line only',
  'and hand the pen across the desk',
  'to something with no hands at all.',
  '',
  'It writes. It does not tire, it does not',
  'forget the middle of the sentence,',
  'it does not ask me what I meant.',
  '',
  'And still the choosing stays with me:',
  'which line to keep, which one to strike,',
  'when to say, enough, this is mine.',
  '',
  'Agency was never in the ink.',
  'It was the hand that let go',
  'and knew exactly what it kept.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
