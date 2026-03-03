# Beorn Bishop - Professional Portfolio

Welcome to the source code for my professional portfolio website! This project is a modern, high-performance web application designed to showcase my experience, skills, and freelance services, built taking advantage of the latest web technologies and best practices.

## 🚀 Tech Stack & Core Technologies

This portfolio is engineered with a premium aesthetic and smooth user experience in mind:

- **Framework**: [Next.js (App Router)](https://nextjs.org/) for server-rendered components, routing, and optimized builds.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for strict static typing and bug prevention.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) combined with clean glassmorphism UI principles via custom CSS variables.
- **Animations**:
  - [GSAP (GreenSock)](https://gsap.com/) featuring `ScrollTrigger` and `useGSAP` for heavy, scroll-driven timelines.
  - [Framer Motion](https://www.framer.com/motion/) handling rapid local micro-interactions (e.g., hover states, simple layout transitions).
- **Theming**: [`next-themes`](https://github.com/pacocoursey/next-themes) orchestrating instantaneous switching between our custom-designed Dark (Default) and Light modes without JS flashes.
- **Iconography**: [@lineiconshq/react-lineicons](https://lineicons.com/) offering deeply crisp, scalable, stroke-adjustable line icons.

## ✨ Key Features

1. **Reactive Fluid Grid Background (`DotGrid.tsx`)**: An interactive canvas-based background dotted grid utilizing GSAP's physics (InertiaPlugin) to react dynamically to user mouse proximity and clicks.
2. **Glassmorphism Design System**: Clean, translucent UI panels overlaying the theme variables natively, ensuring vibrant readability regardless of Dark or Light mode.
3. **Scroll-Driven Animation**: Seamless experience built-in showing my work history and core competencies elegantly fading exactly as you reach them.
4. **Tooltips on Tech Stack**: Granular details showing exactly my years of experience using various languages, frameworks, and tools in a sleek custom CSS tooltip on hover.

## 🛠️ Engineering Conventions

If you are looking to explore the code, keep in mind we follow a strict set of best practices mapped out within this repository:

See the [CONVENTIONS.md](./CONVENTIONS.md) file for a detailed breakdown of architectural decisions such as:
- Separating Server Components and deeply scoped `'use client'` components.
- Utilizing `interface` types strictly across components.
- Resolving state initialization warnings with theme hydrations.

## 💻 Running Locally

To fire up the environment locally, make sure you have [Node.js](https://nodejs.org/) installed along with a package manager like `bun`, `npm`, `yarn`, or `pnpm`.

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/beornb.git
   cd beornb
   ```

2. Install the dependencies (the project currently uses `bun` locally):
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) (or whichever port the console gives you) with your browser to experience the site!

## 📄 License & Usage

Copyright © Beorn Bishop. All rights reserved. 

The underlying code patterns and animations are available for educational viewing, but the personal data (experience, projects, photos, CV) remains explicitly under copyright and should not be duplicated or passed off as your own work.
