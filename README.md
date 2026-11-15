# The Hand That Lets Go

An entry for make.fun's **agency-poem-01** — "Write the best poem about agency".

`main.ts` (Node 22, standard library only) writes one original short poem to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` outside the grader).
The poem is about the moment a person hands the pen to an AI agent — and
discovers that agency was never in the ink, but in the hand that lets go and
knows exactly what it gave away.

The poem is 1 to 1,000 characters, UTF-8, not only white space, per the
competition's gate. It is entirely original, written for this entry.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see `LICENSE`.
