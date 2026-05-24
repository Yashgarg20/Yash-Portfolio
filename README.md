# 🚀 Personal Portfolio Website – Complete Project Documentation

🔗 Live Portfolio: [https://yash-portfolio-pied.vercel.app/](https://yash-portfolio-pied.vercel.app/)

---

# 📌 Project Overview

This is a fully responsive and interactive Personal Portfolio Website developed using **HTML5, CSS3, and JavaScript**. The portfolio showcases technical skills, projects, certifications, achievements, and contact details in a professional and visually engaging way.

The project demonstrates:

* Frontend Development Skills
* Responsive Web Design
* JavaScript DOM Manipulation
* Third-party Library Integration
* UI/UX Design Principles

---

# 🛠️ Technologies Used

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| HTML5      | Structure of website            |
| CSS3       | Styling and responsiveness      |
| JavaScript | Interactivity and functionality |
| Typed.js   | Typing animation                |
| AOS.js     | Scroll animations               |
| Swiper.js  | Certificate slider              |
| FormSubmit | Contact form handling           |
| Unicons    | Icons                           |

---

# 📂 Project Structure

```bash
assets/
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── img/
│   └── images
│
├── pdf/
│   └── certificates & resume
│
└── index.html
```

---

# 🧱 HTML Code Explanation

## 1. Header & Navigation

```html
<header class="header" id="header">
    <nav class="nav container">
        <a href="#" class="nav__logo">Yash</a>
    </nav>
</header>
```

### Explanation

* `header` contains the navigation bar.
* `nav` defines navigation links.
* `nav__logo` displays website logo/name.

---

## 2. Home Section

```html
<section class="home section" id="home">
```

### Features

* Introduction
* Social Media Links
* Typing Animation
* SVG Blob Image
* Scroll Down Button

---

## 3. Skills Section

```html
<div class="skills__content skills__open">
```

### Explanation

* Skills are displayed using accordion functionality.
* `skills__open` → section visible.
* `skills__close` → section hidden.

---

## 4. Certificates Section

```html
<div class="portfolio__container swiper-container">
```

### Explanation

* Swiper.js is used for certificate slider.
* Certificates contain:

  * Image Preview
  * PDF Link

---

## 5. Contact Form

```html
<form action="https://formsubmit.co/your-email@gmail.com" method="POST">
```

### Explanation

* FormSubmit handles email sending.
* No backend required.
* User messages are directly sent to email.

---

# 🎨 CSS Code Explanation

# 1. CSS Variables

```css
:root {
  --first-color: hsl(225, 69%, 61%);
  --body-color: hsl(225, 60%, 99%);
}
```

## Purpose

* Reusable colors and themes.
* Easier maintenance.

---

# 2. Dark Theme

```css
body.dark-theme {
  --body-color: hsl(225, 28%, 12%);
}
```

## Purpose

* Enables dark mode.
* JavaScript toggles `dark-theme` class.

---

# 3. Responsive Design

```css
@media screen and (max-width: 768px) {
  .nav__menu {
    position: fixed;
  }
}
```

## Purpose

* Makes website responsive.
* Optimizes layout for mobile devices.

---

# 4. Skills Animation

```css
.skills__close .skills__list {
  height: 0;
  overflow: hidden;
}
```

## Purpose

* Hides skill content.
* Accordion effect.

---

# ⚙️ JavaScript Code Explanation

# 1. Mobile Menu Toggle

```javascript
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
```

## How It Works

* Detects menu button click.
* Adds `show-menu` class.
* CSS displays menu.

---

# 2. Close Mobile Menu

```javascript
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
```

## Purpose

* Hides menu on clicking close button.

---

# 3. Skills Accordion

```javascript
function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}
```

## How It Works

* Closes all skills.
* Opens clicked skill section.

---

# 4. Swiper Slider

```javascript
let swiperPortfolio = new Swiper('.portfolio__container', {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
```

## Purpose

* Creates responsive certificate slider.

---

# 5. Scroll Active Navigation

```javascript
function scrollActive(){
    const scrollY = window.pageYOffset
}
```

## Purpose

* Highlights active navigation link while scrolling.

---

# 6. Dark Theme Toggle

```javascript
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
})
```

## Purpose

* Switches between dark and light mode.

---

# 📚 Libraries Used

# 1. Typed.js

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
```

## Initialization

```javascript
new Typed(".auto-input", {
    strings: ["a Developer", "a Student"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});
```

## Purpose

* Creates typing animation.
* Makes introduction dynamic.

---

# 2. AOS.js

## CDN

```html
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
```

## Initialization

```javascript
AOS.init({
    offset: 300,
    duration: 2000
});
```

## HTML Usage

```html
<div data-aos="fade-left">
```

## Purpose

* Adds scroll-based animations.

---

# 3. Swiper.js

## Purpose

* Creates responsive sliders.
* Displays certificates professionally.

---

# 4. FormSubmit

## HTML Code

```html
<form action="https://formsubmit.co/your-email@gmail.com" method="POST">
```

## Purpose

* Sends form data directly to email.
* No backend required.

---

# 🔄 Complete Working Flow

## Step 1: Website Loads

* HTML creates structure.
* CSS applies styling.
* JavaScript initializes features.

## Step 2: Libraries Initialize

* Typed.js starts typing animation.
* AOS waits for scrolling.
* Swiper creates slider.

## Step 3: User Interaction

* Menu opens/closes.
* Skills accordion toggles.
* Certificates slide.
* Theme changes.
* Contact form sends email.

---

# 🚧 Challenges Faced

| Challenge                        | Solution                   |
| -------------------------------- | -------------------------- |
| Responsive layout issues         | Used media queries         |
| Library integration errors       | Fixed script loading order |
| Theme inconsistency              | Used CSS variables         |
| Scroll animations not triggering | Configured AOS properly    |
| Mobile navigation issues         | Used class toggling        |

---

# 📖 What I Learned

* Responsive Web Design
* DOM Manipulation
* Event Handling
* Theme Management
* Third-party Library Integration
* Debugging and Optimization
* UI/UX Design

---

# 🎤 Interview Explanation

"I built a responsive personal portfolio website using HTML, CSS, and JavaScript. HTML provides the structure, CSS handles styling and responsiveness, and JavaScript adds interactivity like menu toggling, accordions, theme switching, and scroll effects. I also integrated libraries such as Typed.js for typing animation, AOS.js for scroll animations, Swiper.js for sliders, and FormSubmit for contact form handling. This project improved my understanding of responsive design, DOM manipulation, and third-party library integration."

---

# 📬 Contact

* Portfolio: [https://yash-portfolio-pied.vercel.app/](https://yash-portfolio-pied.vercel.app/)
* GitHub: [https://github.com/Yashgarg20](https://github.com/Yashgarg20)
* Email: [45yashgarg@gmail.com](mailto:45yashgarg@gmail.com)
