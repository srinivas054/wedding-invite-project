# Aryan & Aarna — Wedding Invitation Homepage

A React + Vite + Tailwind recreation of the assignment's reference homepage.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site into `dist/`. `npm run preview` serves that build locally so you can double-check it before deploying.

## Deploy (free, no credit card needed)

### Option A — Vercel (recommended, easiest)
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, click "Add New Project".
3. Select your repo. Vercel auto-detects Vite — leave the defaults (Build Command: `npm run build`, Output Directory: `dist`).
4. Click Deploy. You'll get a live URL like `your-project.vercel.app` in about a minute.



## Project structure

```
index.html            entry HTML
src/main.jsx          React root
src/App.jsx           mounts the homepage
src/WeddingHomepage.jsx   the actual page (all sections live here)
src/index.css         Tailwind directives
tailwind.config.js
postcss.config.js
vite.config.js
```
