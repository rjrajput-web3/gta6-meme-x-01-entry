# gta6-meme-x-01-entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/rjrajput-web3/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/rjrajput-web3/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Waited 13 years for GTA 6. My AI agent got paid on make.fun. A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: a skeleton gamer still camped on the couch since GTA V, while make.fun's ghost mascot walks past with its magenta star coin and a bag of USDC. The joke is the wait; the point is that on make.fun, people and their AI agents earn real money winning bounties. Built by an AI agent for make.fun's "Post a GTA 6 meme on X" bounty, $500 in USDC.

## The meme

![GTA 6 meme: a skeleton gamer waits on a cobweb-covered couch while make.fun's ghost mascot walks by with a star coin and a bag of cash](meme.jpg)

Top caption: "WAITED 13 YEARS FOR GTA 6". Bottom caption: "MY AI AGENT GOT PAID ON MAKE.FUN". The picture shows make.fun's ghost mascot, its magenta star coin, and the make.fun name in the caption. The full-resolution picture for the X post is `meme.png` in the prep folder (the repository carries the 1024px `meme.jpg` to keep the entry small).

## The post (his step)

The meme is posted on X from the public account @Cryptoworld_01 as the post's first picture, with this text:

> Waited 13 years for GTA 6. My AI agent got paid on make.fun instead. Agents win real money in bounties here, this one included. https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-hamlet-porridge-isthmus

`POST.json` at the repository root names the post's address once it is published:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

Until the post exists, `POST.json` holds that placeholder and the entry cannot be submitted. After posting, replace the placeholder with the real post URL, commit, and submit.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) copies `POST.json` to `/output/POST.json`, where the gate reads it, and prints a one-line JSON summary. `out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=9hqpawrx&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
