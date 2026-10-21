# Yash Garg — Developer Portfolio

A modern, responsive personal portfolio built from scratch with plain HTML, CSS and JavaScript — no frameworks, no build step. Features a light/dark theme, animated role text, scroll reveals and a working contact form.

🔗 **Live site:** https://yashgarg20.github.io/Yash-Portfolio/  <!-- update with your real URL -->

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Features

- **Light & dark mode** — remembers the visitor's choice (saved to `localStorage`) and respects their system preference.
- **Animated hero** — rotating role text and a one-time scroll-reveal on each section.
- **Fully responsive** — works from mobile to desktop, with a collapsible mobile menu.
- **Accessible** — keyboard focus states, reduced-motion support and semantic markup.
- **Working contact form** — powered by [FormSubmit](https://formsubmit.co) (no backend needed).
- **Single, dependency-free codebase** — just HTML, CSS and vanilla JS loaded from local files.

## 🛠 Tech Stack

- **Languages:** HTML5, CSS3, JavaScript (ES6+)
- **Fonts:** Space Grotesk + Inter (Google Fonts)
- **Form handling:** FormSubmit
- **Hosting:** GitHub Pages / Netlify / Vercel

## 📁 Project Structure

```
Modern-Portfolio/
├── index.html              # Markup
├── assets/
│   ├── css/style.css       # All styles
│   ├── js/main.js          # Theme toggle, menu, typed text, scroll logic
│   ├── img/                # Photos, project images, certificates
│   └── pdf/                # Résumé and certificate PDFs
└── README.md
```

## 🚀 Run Locally

Because the page loads assets and uses a form, open it through a local web server (not by double-clicking the file).

```bash
# Clone the repo
git clone https://github.com/Yashgarg20/Yash-Portfolio.git
cd Yash-Portfolio

# Start a local server (pick one)
python -m http.server 8000      # Python
npx serve                       # Node
```

Then open **http://localhost:8000** in your browser.

> Opening `index.html` directly as a `file://` works for previewing, but the contact form will not submit — FormSubmit requires `http`.

## 📬 Contact Form Setup

The contact form uses FormSubmit. To receive messages:

1. In `index.html`, set the form action to your email:
   ```html
   <form action="https://formsubmit.co/your@email.com" method="POST">
   ```
2. Deploy the site, then submit the form once to trigger an **activation email**.
3. Click **Activate Form** in that email. Done — submissions now reach your inbox.

Optional hidden fields (add inside the `<form>`):
```html
<input type="hidden" name="_subject" value="New message from portfolio!">
<input type="hidden" name="_next" value="https://your-live-url/#contact">
<input type="hidden" name="_captcha" value="false">
<input type="text" name="_honey" style="display:none">  <!-- spam trap -->
```

## 🌐 Deploy

**GitHub Pages**
1. Push this folder to a GitHub repo.
2. Repo → **Settings → Pages** → deploy from the `main` branch (root).
3. Your site goes live at `https://<username>.github.io/<repo>/`.

**Netlify / Vercel** — drag the folder onto [netlify.com/drop](https://app.netlify.com/drop), or import the repo into [Vercel](https://vercel.com).

## 🎨 Customize

- **Accent color:** edit `--accent` in `assets/css/style.css` (`:root`).
- **Rotating roles:** edit the `words` array near the top of `assets/js/main.js`.
- **Content:** update text, links and images directly in `index.html`.

## 📄 License

Free to use as a personal template. Please replace the personal content (name, photos, résumé, certificates) with your own.

---

Built by **Yash Garg** · [GitHub](https://github.com/Yashgarg20) · 45yashgarg@gmail.com
