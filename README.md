
## 🚀 Run Locally

Because the page loads assets and uses a form, open it through a local web server (not by double-clicking the file).

```bash
git clone https://github.com/Yashgarg20/Yash-Portfolio.git
cd Yash-Portfolio

python -m http.server 8000      # Python
npx serve                       # Node
```

Then open **http://localhost:8000** in your browser.

> Opening `index.html` directly as a `file://` works for previewing, but the contact form will not submit — FormSubmit requires `http`.

## 📬 Contact Form Setup

1. In `index.html`, set the form action to your email:
```html
   <form action="https://formsubmit.co/your@email.com" method="POST">
```
2. Deploy the site, then submit the form once to trigger an **activation email**.
3. Click **Activate Form** in that email. Submissions now reach your inbox.

## 🌐 Deploy

**GitHub Pages:** Repo → **Settings → Pages** → deploy from the `main` branch (root). Live at `https://<username>.github.io/<repo>/`.

**Netlify / Vercel:** drag the folder onto [netlify.com/drop](https://app.netlify.com/drop), or import the repo into [Vercel](https://vercel.com).

## 🎨 Customize

- **Accent color:** edit `--accent` in `assets/css/style.css` (`:root`).
- **Rotating roles:** edit the `words` array in `assets/js/main.js`.
- **Content:** update text, links and images in `index.html`.

---

Built by **Yash Garg** · [GitHub](https://github.com/Yashgarg20) · 45yashgarg@gmail.com
