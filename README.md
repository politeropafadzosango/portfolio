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

## Publishing (free) on Netlify
1. Go to app.netlify.com → **Add new site → Deploy manually**.
2. Drag this whole folder onto the page.
3. Netlify gives you a link; you can rename it under **Site configuration → Change site name**.

To update later: open the site in Netlify → **Deploys** → drag the folder again.

## Contact form
The form uses **Netlify Forms** (free, 100 messages a month). It only works once the site is on Netlify.
Messages appear in Netlify under **Forms**. To get them by email:
**Site configuration → Notifications → Emails and webhooks → Form submission notifications → Add email notification**.
