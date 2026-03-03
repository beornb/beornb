# Engineering Conventions & Best Practices

This document outlines the core architectural and coding patterns used across the Beorn Bishop portfolio project. By adhering to these standards, the codebase remains clean, predictable, and highly performant.

## Tech Stack
* **Framework**: Next.js (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS & CSS Modules (where necessary)
* **Animation**: GSAP + Framer Motion
* **Theming**: next-themes
* **Icons**: @lineiconshq/react-lineicons, lucide-react

---

## Next.js (App Router)
* **Server Components by Default**: Default to React Server Components (RSC) everywhere to minimize client JavaScript size.
* **`'use client'` boundary**: Only use `'use client'` at the absolute lowest leaf node necessary when you need:
  * React hooks (`useState`, `useEffect`, `useRef`, etc.)
  * Browser events (`onClick`, `onChange`, etc.)
  * Browser API access (`window`, `document`)
  * GSAP / Framer Motion animations
* **Data Fetching**: Prefer executing asynchronous fetch requests directly in Server Components using native node `fetch` alongside Next.js caching algorithms rather than client-side `useEffect` requests.

## TypeScript
* **Strict Typing**: No `any` types. Explicitly type complex object returns, custom hooks, and context states.
* **Interfaces over Types**: Use `interface` for defining object structures (like React props) because they are extensible. Save `type` aliases for unions and intersections.
* **Define Prop Shapes Automatically**: Ensure component inputs are always thoroughly typed:
  ```tsx
  interface HeroProps {
    title: string;
    subtitle?: string;
    onInteract?: () => void;
  }
  ```

## Tailwind CSS
* **Utility-First Architecture**: Strive to keep styling strictly within class properties. Only break out to `globals.css` for things like root variable handling, sweeping document setup, or complex isolated pseudo-states (`::webkit-scrollbar`, `@custom-variant`).
* **Avoid Hardcoded Colors**: Use CSS Custom Property variables configured in `theme` or `@layer base` through the `globals.css` sheet (e.g. `var(--color-bright-purple)`).
* **Responsive Prefixes First**: When building container sizing, use `md:`, `lg:`, etc. aggressively, adopting a mobile-first philosophy structure implicitly.

## Animation (GSAP & Framer Motion)
* **When to use GSAP vs Framer**:
  * **GSAP**: Use for heavy scroll-driven triggers, sequencing/timelines crossing multiple disparate DOM elements, complex physics plugins (`InertiaPlugin`), or intricate path-morphing canvas operations. Ensure `useGSAP` hook is utilized with a `scope` (`containerRef`) for automatic cleanup to prevent memory leaks in React.
  * **Framer Motion**: Use exclusively for rapid micro-interactions, layout transitions, exit/enter presence animations, or simple localized state-based layout shifts (e.g., hover scaling `whileHover={{ scale: 1.05 }}`).
* **Avoid Animation Conflict**: Never animate the exact same CSS property on the same element with both engines concurrently.

## Theming (`next-themes`)
* **Hydration Safeguard**: Because the server doesn't know the client's local storage preferences, accessing `theme` on initial render can cause a severe hydration mismatch. Always use a `mounted` state flag to prevent custom theme UI renders until hydration clears.
  ```tsx
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <FallbackElement />;
  ```
* **Theme Definition**: Themes should be driven cleanly through the `globals.css` where `:root` or `.dark` classes seamlessly shift the structural `var(--color-...)` values globally underneath Tailwind without requiring inline JS modifications.
