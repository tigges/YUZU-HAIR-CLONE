# AGENTS.md

## Cursor Cloud specific instructions

This is a plain HTML+CSS static website (no build tools, no package manager, no backend). There are only two source files: `index.html` and `styles.css`.

### Running the dev server

Serve the site with any static HTTP server from the workspace root:

```sh
python3 -m http.server 8080 --directory /workspace
```

Then open `http://localhost:8080` in a browser.

### Linting / Testing / Building

- **No package manager or build step exists.** There is no `package.json`, no bundler, and no test framework.
- **No automated tests.** Validation is manual — open the site in a browser and verify sections render and the contact form submits (client-side only; shows "Thanks for submitting!").
- **No linter is configured.** Standard HTML/CSS validation can be done externally if needed.

### Notes

- All images and fonts are loaded from external CDNs (`static.wixstatic.com`, `fonts.googleapis.com`). Internet access is needed for full visual fidelity, but the site is functional without it.
- The contact form is client-side only (`event.preventDefault()`) — no backend submission occurs.
