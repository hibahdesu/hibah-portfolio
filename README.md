# Hibah Sindi Portfolio

A Next.js portfolio with a living sky. The page follows the visitor's real clock and season:

| | Effect |
|---|---|
| Fall (Sep – Nov) | Falling leaves; Lucy wears a scarf |
| Winter (Dec – Feb) | Snow; Lucy wears a beanie |
| Spring (Mar – May) | Cherry petals; Lucy wears a flower |
| Summer (Jun – Aug) | Floating seeds by day, fireflies at night; Lucy wears sunglasses |
| Dawn 5–8, Day 8–17, Dusk 17–19, Night 19–5 | Sky colors, sun or moon, clouds or stars |

Visitors can preview any scene with the switcher in the bottom-right corner. Particles move away from the cursor, Lucy's eyes follow it, clicking Lucy makes her talk, and clicking empty space leaves a paw print. Motion turns off for visitors who set "reduce motion" on their device.

## Run it

You need Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit your content

Everything you'll want to change is in `lib/data.js`: your intro, experience, projects, agent systems, skills, certifications, and education.

Your social icons (LinkedIn, GitHub, Kaggle, X, Instagram, YouTube, TikTok, Pinterest) are in `profile.social`. Remove a line to hide an icon, or add a new one with a matching icon in `components/SocialLinks.jsx`.

To update your CV, replace `public/Hibah_Sindi_CV.pdf` with the new file (keep the same name).

## Deploy for free on Vercel

1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, and click "Add New Project".
3. Pick the repository and click "Deploy". Vercel detects Next.js automatically.

## Where things live

- `components/Sky.jsx`: sky gradients, sun, moon, stars, clouds
- `components/SeasonCanvas.jsx`: leaves, snow, petals, seeds, fireflies
- `components/RoboCat.jsx`: Lucy, the robot cat, and her lines
- `components/Systems.jsx`: the animated agent pipelines
- `lib/scene.js`: which months and hours map to which scene
- `app/globals.css`: all colors and styles
