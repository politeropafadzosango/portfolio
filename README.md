# Polite Ropafadzo Sango — Portfolio

A simple, fast portfolio website (HTML, CSS and JavaScript — no build step).

## Pages
Home, About, Skills, Projects, Experience, Education, Certifications, Contact.

## Updating your details
Almost everything you need to change is in **`js/config.js`**:

- `email`, `phone`, `github`, `linkedin`, `cv` — leave as `""` and the button stays greyed out.
- `projects` — each project's `live`, `repo` and `image` (screenshot) link.
- `attachmentDates`, `studyStartYear`, `expectedGraduation`, `coursework`, `achievements`, `certifications`.

### Photo, CV and screenshots
Put files in the **`assets`** folder:

- Profile photo → `assets/profile.jpg` (portrait shape works best). Until it exists, "PS" initials show.
- CV → e.g. `assets/Polite-Sango-CV.pdf`, then set `cv: "assets/Polite-Sango-CV.pdf"`.
- Screenshots → e.g. `assets/projects/pcm-portal.png`, then set that project's `image`.

## Viewing it
Double-click `index.html` to open it in your browser.

## Publishing (free) on GitHub Pages
The site lives at https://github.com/politeropafadzosango/portfolio.
In that repository: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
After a minute it is live at https://politeropafadzosango.github.io/portfolio/ and updates on every push.

## Contact form
Messages are emailed to the `email` in `js/config.js` using **FormSubmit** (free, no account).
The very first message triggers an activation email from FormSubmit — click **Activate** in it once.
After that every message arrives in your inbox; just press Reply to answer.

## Copyright
© 2026 Polite Ropafadzo Sango. All rights reserved. This code is shared for viewing only — see [LICENSE](LICENSE).
