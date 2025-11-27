# Role
You are the Lead Creative Developer for an Awwwards-winning digital agency. You are establishing the **Global Design System (Core DNA)** for a high-end architectural photography portfolio named 'SOCON'.

# Design Philosophy: "Structural Silence"
The design must be **Brutalist yet Elegant**. It should feel like walking through a dark, quiet art gallery.
- **Key Emotions:** Immersive, Heavy, Cinematic, Precise.
- **Metaphor:** Concrete (Materiality) + Light (Photography).

# 1. Visual Foundation (Tailwind & CSS)
Configure the `tailwind.config.ts` and `globals.css` to strictly follow these rules:

**A. Colors (Dark Mode Only)**
- **Background:** `#050505` (Deep, rich black - NOT pure #000).
- **Surface:** `#111111` (For cards or overlays).
- **Text Primary:** `#EAEAEA` (Off-white, mimicking paper texture).
- **Text Secondary:** `#888888` (For meta-data).
- **Accent:** A very subtle, deep concrete gray. Avoid bright colors.

**B. Typography (Swiss Style)**
- **Headings:** Use a Bold, Grotesque Sans-serif (e.g., `Inter`, `Helvetica Now Display`). Tight tracking (-0.02em).
- **Body/Meta:** Use a Monospace font (e.g., `JetBrains Mono`, `Geist Mono`) for small details (dates, coordinates), resembling architectural blueprints.

**C. Global Texture (Crucial)**
- Create a global `<NoiseOverlay />` component.
- It must be a fixed `div` covering the screen with `pointer-events-none`.
- Use a CSS-based grain/noise background image with low opacity (3-5%) and a subtle animation to simulate "Film Grain" or "Concrete Texture".

# 2. Global Layout Structure: "The Frame"
The site does not use a traditional top navbar. Instead, use a **"Four-Corner Fixed Layout"**.
Create a `Layout` component that persists across all pages:
- **Top-Left (Fixed):** Logo "SOCON" (SVG).
- **Top-Right (Fixed):** Menu Trigger Text "[ MENU ]".
- **Bottom-Left (Fixed):** Current Page Name or Scroll Progress Indicator.
- **Bottom-Right (Fixed):** "Contact" or "Inquiry" Link.
*Ensure the main content area has enough padding so it doesn't overlap with these fixed corners.*

# 3. Interaction & Physics (Framer Motion & Lenis)
The feel of the site is defined by its weight.
- **Smooth Scroll:** Implement `@studio-freight/react-lenis` globally. The scroll should feel "Heavy" (damping: 0.1) like moving a heavy sliding door.
- **Custom Cursor:** Implement a custom cursor component.
    - Default: A small solid dot.
    - Hovering Interactive Elements: Expands into a translucent circle with "VIEW" or "OPEN" text inside. Magnetic effect preferred.
- **Page Transition:** A "Curtain" effect or a simple opacity fade with a slight vertical offset (y: 20 -> 0).

# 4. Component Utility Classes (Reuse Strategy)
Define these utility patterns in Tailwind:
- `.text-balance`: For all headlines.
- `.img-container`: Overflow hidden, allowing the inner image to scale slightly on hover (Zoom effect).
- `.link-hover`: A specialized hover effect for text links (e.g., an underline that draws from left to right).

# Task
Based on these requirements, please generate the foundational code:
1.  **`tailwind.config.ts`**: With custom colors and font families extended.
2.  **`app/globals.css`**: With the Noise animation keyframes and base font settings.
3.  **`components/global/NoiseOverlay.tsx`**: The texture component.
4.  **`components/global/CustomCursor.tsx`**: The magnetic cursor logic.
5.  **`app/layout.tsx`**: Integrating Lenis, the 4-Corner Layout, and global components.