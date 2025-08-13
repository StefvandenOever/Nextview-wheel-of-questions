# Wheel of Questions

A lightweight, self-contained web app to randomly pair **team members** with **fun icebreaker questions**. Built for simple hosting on **GitHub Pages** — no server, no external dependencies.

## ✨ Features

- Clean two-slot layout with the **icon left** and **content perfectly centered** (horizontally & vertically).
- Click **Spin** to animate the wheel and auto-pick both a **name** and a **question**.
- **No-repeat logic** until you press **Reset**.
- Tactile **confetti** celebration on each new selection.
- Fully offline: no CDNs, everything ships in this repository.
- Data lives in plain JSON under `/data`.

## 📁 Repository structure

```
wheel-of-questions/
├─ index.html            # Single-page app (CSS + JS inline, ready for GitHub Pages)
├─ assets/
│  ├─ favicon.svg
│  ├─ person-outline.svg
│  └─ question-outline.svg
└─ data/
   ├─ colleagues.json    # List of names
   └─ questions.json     # List of questions
```

## 🚀 Run locally

Just open `index.html` in a modern browser. No build step.

> If you use the **file://** protocol, some browsers may block `fetch()` of JSON for security reasons. On GitHub Pages this works fine. If you need to test locally with fetch, use a tiny static server (e.g. `python -m http.server`).

## 🌐 Deploy to GitHub Pages

1. Create a new **public** repo on GitHub (e.g., `wheel-of-questions`).
2. Upload the files/folders from this repo.
3. In your GitHub repo, go to **Settings → Pages**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (or `master`), folder `/root`
4. Save — your site will publish to `https://<your-username>.github.io/<repo>`.

## ✍️ Customize the content

- Open `/data/colleagues.json` and replace with your team’s names. Example:
  ```json
  ["Stef","Maya","Jonas","Aisha"]
  ```
- Open `/data/questions.json` and paste your questions as a simple array of strings. Example:
  ```json
  [
    "What’s a small daily habit that makes your day better?",
    "If you could master one skill overnight, what would it be?"
  ]
  ```

Changes are picked up automatically on reload. If a question/name is **too long**, the wheel auto-wraps labels.

## 🕹 How it works

- The **wheel** is drawn on a `<canvas>` with evenly spaced slices for each name.
- On **Spin**, it eases to a **target angle**, ensuring the selected slice lands under the **pin**.
- The **slots** (name & question) use a no-repeat sampler. When all items are used, the app prompts you to **Reset**.
- **Confetti** is a lightweight canvas effect — no libraries needed.

## 🔧 Useful tweaks

- Want more granular control (e.g., fixed order, weighted picks, or custom colors)? Search in `index.html` for the `// --- Wheel drawing & spin ---` section and tweak the logic or colors.
- To remove confetti, search for `celebrate();` and comment out those calls.

## ♿ Accessibility

- Live regions on the slots (`aria-live="polite"`) announce updates to assistive tech.
- High-contrast text and large targets for buttons.

## 🙌 Credits

- Icons are custom SVGs included in `/assets`.
- Built to be **copy‑paste deployable** on GitHub Pages.
