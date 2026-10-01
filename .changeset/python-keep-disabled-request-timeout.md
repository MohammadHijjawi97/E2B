---
"@e2b/python-sdk": patch
---

Keep the request timeout disabled for sandbox instance methods (`kill`, `pause`, `set_timeout`, `get_info`, `connect`, ...) when the sandbox was created or connected with `request_timeout=0`, or when `request_timeout=0` is passed to the method. They previously fell back to the default 60-second timeout.
