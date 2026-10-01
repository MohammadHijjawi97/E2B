---
'@e2b/cli': patch
---

Keep `=` characters in metadata values passed to `e2b sandbox list --metadata` and `e2b sandbox kill --all --metadata`. A filter such as `url=https://example.com/?a=1` was truncated to `url=https://example.com/?a`, so `list` missed matching sandboxes and `kill --all` could target sandboxes whose metadata only matched the truncated value.
