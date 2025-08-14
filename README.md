# Nextview Wheel of Questions

React/Tailwind single‑file app for team‑building. Now with **built‑in confetti** (no external libs) so it renders reliably on Safari and Chrome.

[▶️ **Open the app**](https://stefvandenoever.github.io/Nextview-wheel-of-questions)

> **Built by ChatGPT.**

## 🚀 What’s inside
- One `index.html` containing the full app (React via CDN) + a custom Canvas **ConfettiEngine** (no CDN dependency).
- Slot‑machine style **Pick person** and **Spin question**.
- **Party Mode** toggle and **Test Party** button.
- Optional **Team** and **Questions** side panels (toggle from the header).
- **Sound effects** (enable/disable in header).
- **SFX Test** button in the header to preview sound effects.

## 📦 Deploy / Run
- Locally: just open `index.html` in a browser.  
  (If your browser blocks `localStorage` or module loads under `file://`, use a tiny server: `python -m http.server` and browse to `http://localhost:8000/`).
- GitHub Pages: place `index.html` at repo root, then enable **Settings → Pages → Deploy from a branch**.

## 💾 Import / Export (Best Practice)
Use the **Export** button in the header to download your current **team & questions** as JSON. Keep this file as a backup.  
Later, click **Import** and select that JSON to restore your setup.

**Format**
```json
{
  "team": [ { "name": "Alice", "present": true }, { "name": "Bob", "present": false } ],
  "questions": [ "😀 Question 1...", "🎵 Question 2..." ]
}
```

> **Best practice:** export after any large edits, and keep the file in version control or cloud storage.

## 🧠 Persistence (Browser Cache)
- The app stores your data in **LocalStorage** under keys:
  - `woq_team_v4` (team list)
  - `woq_questions_v1` (questions)
  - `woq_settings_v7` (UI toggles & SFX/party preferences)
- Data persists **per browser & device**. Clearing site data, using private browsing, or switching devices will reset it.
- To migrate setups between browsers/devices, **use Import/Export**.

## 🔊 Audio
Some browsers suspend audio until the first user interaction. Press **Test** (or click anywhere) once to unlock SFX.

## 🧪 Troubleshooting
- If confetti isn’t visible, ensure the page isn’t running in a restricted iframe and that no extensions block canvases.  
- This build renders confetti on its **own full‑screen canvas** at a very high `z-index` to avoid stacking issues.

## 🪪 Credits
- UI built with Tailwind.  
- App logic & no‑dependency confetti engine crafted by **ChatGPT**.
