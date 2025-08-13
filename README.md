# Nextview Wheel of Questions

A browser-based, React-powered "Wheel of Questions" app for team building — no build step needed. Runs fully in the browser using CDN scripts.

## 🚀 Features
- Pick a **random team member** and **random question** with slot machine animations.
- **Import/export** your team and question sets as JSON.
- Toggle visibility of team and question panels for a distraction‑free view.
- Built-in **sound effects** and **confetti** celebration.
- Add/remove/edit **team members** and **questions** on the fly.
- All styling via Tailwind CSS.

## 📦 Files
- `index.html` — All code in a single HTML file, ready for GitHub Pages.

## 🛠 How to Run
Just open `index.html` in a browser, or host it on GitHub Pages.

### GitHub Pages Deployment
1. Create a public repo.
2. Upload `index.html`.
3. In **Settings → Pages**, select branch `main` and folder `/root`.
4. Your app will be live at: `https://<username>.github.io/<repo>`.

## 📄 Import/Export JSON Format
The JSON structure should look like:
```json
{
  "team": [
    { "name": "Alice", "present": true },
    { "name": "Bob", "present": false }
  ],
  "questions": [
    "😀 What's your favourite food?",
    "🎵 What's a song stuck in your head?"
  ]
}
```
