# Rohullah Yousufi: Portfolio

Multipage static site built with HTML, CSS and vanilla JavaScript. No build step.

## Run locally
1. Open the `portfolio` folder in Visual Studio Code.
2. Install the **Live Server** extension, right-click `index.html`, choose **Open with Live Server**.
   (Alternative: run `python -m http.server 8000` in the folder and open http://localhost:8000.)

## What you need to provide
Almost everything lives in `js/data.js`.
- [ ] Email: `profile.email`
- [ ] GitHub and LinkedIn: `profile.github`, `profile.linkedin`
- [ ] Profile photo: save a square image as `assets/images/profile.jpg` (under 300 KB). Until then an "RY" monogram shows.
- [ ] Etmad repository URL: `projects[0].repo`. Live demo URL: `projects[0].demo` (leave empty if it is not public).
- [ ] Verified Etmad features: `projects[0].features` (add only features that really exist).
- [ ] Honest skill levels: `skills`. Levels are placeholders I chose; change them.
- [ ] Years for the About timeline: `about.html`.
- [ ] Optional: more projects (copy an entry in `projects`).

## Make the contact form work
The form validates in the browser but **sends nothing** until you connect a service.
1. Create a form at Formspree, Web3Forms or Getform and copy its endpoint URL.
2. Paste it into `formEndpoint` in `js/data.js`.
3. Turn on the service's spam protection (CAPTCHA). A hidden honeypot field is already included.

Browser checks can be bypassed. If you build your own Flask endpoint instead, validate and rate-limit on the server too.

## Deploy
Any static host works: Netlify (drag the folder in), GitHub Pages, or a Render Static Site (publish directory `.`).

## Structure
- `*.html`: six pages. The header and footer are injected from `js/main.js` so they stay identical everywhere.
- `css/style.css` design system and layout, `css/animations.css` motion and 3D, `css/responsive.css` breakpoints.
- `js/data.js` content, `js/main.js` layout and rendering, `js/animations.js` reveal, tilt, marquee and typing, `js/contact.js` form.
- Motion respects `prefers-reduced-motion`. Tilt runs only on devices with a mouse.
