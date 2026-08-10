# MR. Blackpen Portfolio

A modern portfolio website built with React and Vite, featuring a monochrome black-and-white theme, animated interactions, and responsive page layouts.

## Features

- Responsive portfolio website with navigation and section routing
- Custom cursor and hover animations
- Contact form that sends details to WhatsApp
- Device-aware WhatsApp and Gmail redirects
- Clean black-and-white visual style with subtle color highlights
- Projects, skills, career, about, and contact sections

## Tech Stack

- React 19
- Vite 8
- React Router DOM
- Framer Motion
- GSAP
- Lenis
- ESLint

## Project Structure

- `src/main.jsx` — app entry point and router setup
- `src/App.jsx` — page routing and layout
- `src/components/Navbar.jsx` — top navigation bar
- `src/components/Home.jsx` — landing/home section
- `src/components/About.jsx` — about page
- `src/components/Career.jsx` — career and experience details
- `src/components/Projects.jsx` — projects showcase
- `src/components/Skills.jsx` — skills grid and icon cards
- `src/components/Contact.jsx` — contact form and direct links
- `src/components/TargetCursor/TargetCursor.jsx` — custom cursor behavior
- `src/styles/` — component-specific CSS files

## Installation

```bash
cd \mr.blackpen\protfolio
npm install
```

## Development

```bash
npm run dev
```

Open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Notes

- The app uses `BrowserRouter` for routing, so refreshes must be handled by the host environment.
- The WhatsApp contact button opens the WhatsApp app on mobile and WhatsApp Web on desktop.
- The email contact button opens `mailto:` on mobile and Gmail compose on desktop.
- Place `resume.pdf` in the `public/` folder for the resume button to work.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint across the project

## Deployment

This project can be deployed to any static host that supports Vite output, including Vercel, Netlify, GitHub Pages, or Firebase Hosting.

For GitHub Pages, you can build the app and serve the `dist` folder.
