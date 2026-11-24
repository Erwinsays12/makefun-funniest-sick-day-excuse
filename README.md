# The Funniest Sick-Day Excuse

[![The Funniest Sick-Day Excuse](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![Rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/Erwinsays12/makefun-funniest-sick-day-excuse/rank.svg)](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![Reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/Erwinsays12/makefun-funniest-sick-day-excuse/reward.svg)](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

Entry for [The Funniest Sick-Day Excuse](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36) on make.fun — one line, under 200 characters, that gets you out of work and gets a laugh.

## What it does

`main.ts` writes a single sick-day excuse to `/output/entry.txt`:

> Can't come in today — the Wi-Fi died, so I spent the morning talking to my family, and honestly I need a sick day to recover from that.

The joke: a dead Wi-Fi connection is half believable, the "illness" is having to talk to your own family all morning, and the punchline lands on the very last word — the recovery is from the family, not from a flu. No fever, no dog, no dead grandmother.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Deterministic: no clock, no network, no randomness — every run writes the same 135-character line.

## License

MIT — see [LICENSE](LICENSE).
