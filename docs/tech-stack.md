# Context
This document defines the **Technical Stack & Strict Engineering Standards** for the 'SOCON' project.
**CRITICAL GOAL:** Achieve a **100/100 Lighthouse Score** and maximize **Search Engine Visibility** through cutting-edge Technical SEO.

# 1. Core Framework: "Bleeding Edge"
- **Package Manager:** pnpm (Recommended for speed & disk efficiency)
- **Framework:** Next.js 16 (Canary/Latest)
    - **Rendering Strategy:** **Partial Prerendering (PPR)** is MANDATORY.
        - Static Parts (Shell, Footer, About): Prerender at build time (SSG).
        - Dynamic Parts (User interactions, Search): Stream dynamically.
    - **Routing:** App Router exclusively.
- **Library:** React 19 (RC/Canary)
    - **Compiler:** Enable **React Compiler** (`experimental.reactCompiler`). Do NOT use `useMemo` or `useCallback` manually unless strictly required for referential equality constraints.
    - **Server Actions:** Use Server Actions for all data mutations and form submissions.
    - **Hooks:** Use the new `use` hook for Promise unwrapping and Context.

# 2. Technical SEO & Semantics (HIGHEST PRIORITY)
Every component and page must be built with SEO as the primary constraint.

## A. Rendering & Crawlability
- **Server Components:** By default, ALL content must be rendered on the server (RSC).
- **Client Components:** Use `"use client"` *only* for leaf nodes requiring interactivity (buttons, animations). **Never** wrap the entire page or large text blocks in client components (this hurts SEO).
- **Dynamic Metadata:** Implement `generateMetadata()` for every dynamic route.
    - Customize `title`, `description`, `openGraph`, `twitter`, and `alternates` (canonical).

## B. Structured Data (JSON-LD)
- **Schema:** Implement standard JSON-LD for a "Photography Business".
    - `organization`: Logo, Name, Address, Contact.
    - `imageObject`: For every portfolio item (License, Author, Location).
    - `breadcrumbList`: For navigation paths.
- **Implementation:** Inject JSON-LD via a generic helper component in the `<head>` or body, rendered on the server.

## C. Semantic HTML5
- **Hierarchy:** Strictly enforce `<h1>` > `<h2>` > `<h3>` hierarchy. No skipping levels.
- **Tags:**
    - Use `<main>` for primary content.
    - Use `<article>` for portfolio items.
    - Use `<figure>` and `<figcaption>` for images and captions.
    - Use `<nav>` for menus.
    - **Prohibited:** Do not use `<div>` for clickable elements; use `<button>` or `<a>`.

# 3. Performance & Core Web Vitals (CWV)
- **LCP (Largest Contentful Paint):**
    - The Hero image must use `<Image priority />`.
    - Preload critical fonts.
- **CLS (Cumulative Layout Shift):**
    - All images must have explicit `width` and `height` (or aspect ratio) to reserve space.
    - Use `next/font` to prevent layout shifts (FOUT/FOIT).
- **INP (Interaction to Next Paint):**
    - Heavy JavaScript must be deferred.
    - Interaction logic (listeners) must be optimized via React 19's non-blocking transitions (`useTransition`).

# 4. Styling & Animation
- **Styling:** Tailwind CSS (v3.4+ or v4 Alpha).
- **Animation:** Framer Motion.
    - **SEO Caveat:** When animating entry (e.g., `opacity: 0` -> `1`), ensure the initial HTML is **visible** to bots or use CSS variables to handle visibility so content is indexable even if JS fails.

# 5. Data Fetching & State
- **Pattern:** Fetch data in Server Components -> Pass as props to Client Components.
- **Caching:** Utilize `unstable_cache` or standard `fetch` caching strategies for static data (SSG).
- **Streaming:** Use `<Suspense>` boundaries with meaningful fallbacks for dynamic sections to improve TTFB (Time To First Byte).

# 6. Coding Rules for AI
1.  **React 19 Strict:** If you see `useEffect` used for data fetching, DELETE IT. Use Server Components.
2.  **Alt Text Strategy:** Every `next/image` requires a descriptive, SEO-rich `alt` prop.
3.  **Link Strategy:** Use `next/link` for internal navigation. Ensure all `<a>` tags have `href`, `aria-label`, and readable anchor text (no "Click Here").