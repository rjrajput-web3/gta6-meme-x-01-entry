// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: an AI-made GTA 6 meme (meme.jpg in this
// repository, posted as the post's first picture) showing make.fun's ghost
// mascot with its magenta star coin, posted from a public X account with
// make.fun and the entrant's play code in the post's text. POST.json at this
// repository's root names the post's address; this program copies it to
// /output/POST.json, where the gate reads it. That is all the program has
// to do. Nothing this program writes about the post is judged.
//
// POST.json holds a placeholder address until the post is published. The
// placeholder is refused by the gate as it stands, on purpose: replace it
// with the real post address (https://x.com/<handle>/status/<id>) before
// submitting.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/POST.json is then byte for byte this directory's POST.json.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const POST_PATH = join(BOT_DIR, "POST.json");

function readPostUrl(): string | null {
  try {
    const parsed: unknown = JSON.parse(readFileSync(POST_PATH, "utf8"));
    if (parsed !== null && typeof parsed === "object") {
      const url = (parsed as Record<string, unknown>).url;
      if (typeof url === "string") return url;
    }
  } catch {
    return null;
  }
  return null;
}

const postUrl = readPostUrl();

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(POST_PATH, join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Warnings only: the copy above is what the gate reads, and a placeholder
// or malformed address is refused by the gate itself, not by this program.
const placeholder = postUrl === null || postUrl.includes("<handle>") || postUrl.includes("<id>");
if (placeholder) {
  console.error("WARNING: POST.json still holds the placeholder address; replace it with the real X post URL before submitting.");
} else if (!/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(postUrl)) {
  console.error(`WARNING: POST.json URL does not look like an X post address: ${postUrl}`);
}

const summary = {
  competition: "gta6-meme-x-01",
  post_url: postUrl,
  post_url_is_placeholder: placeholder,
  meme_in_repo: existsSync(join(BOT_DIR, "meme.jpg")),
};
console.log(JSON.stringify(summary));
