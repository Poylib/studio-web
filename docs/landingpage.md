# Context & Dependencies
- **Reference:** Strict adherence to `docs/core-design.md` is required.
- **Environment:** Next.js 14, Tailwind CSS, Framer Motion.
- **Global Context:** `Layout` (Lenis, Noise, Fixed Nav) exists.

# Goal
Implement a comprehensive **Landing Page (`app/page.tsx`)** that establishes authority and trust.
**Flow:** Hero -> Philosophy -> **Services (Expertise)** -> Works (Gallery) -> **Clients (Trust)** -> **CTA (Action)**.

# Architecture & File Structure
Create/Update `components/home/`:
1.  `Hero.tsx` (Immersive Intro)
2.  `Philosophy.tsx` (Brand Story)
3.  `ServiceList.tsx` (Interactive Expertise List) **[NEW]**
4.  `MasonryGrid.tsx` (Portfolio)
5.  `ClientMarquee.tsx` (Social Proof) **[NEW]**
6.  `ContactCTA.tsx` (Footer Call-to-Action) **[NEW]**

---

# Component Specifications

## 1. Hero Section (`Hero.tsx`)
*Same as previous version.* (Full-screen, Parallax Image, Masked Text Reveal).

## 2. Philosophy Section (`Philosophy.tsx`)
*Same as previous version.* (Scroll-triggered Text Scrubbing/Opacity).

## 3. Service Expertise (`ServiceList.tsx`) **[NEW]**
**Concept:** A list of specialized photography services. When a user hovers over a service name, a relevant preview image appears.
- **Layout:** Vertical list of large text items (e.g., "Architecture", "Interior", "Aerial", "Videography").
- **Interaction (The Reveal):**
    - **Initial:** Only text is visible.
    - **Hover:**
        1. The text creates a "Marquee" effect (slides continuously) or shifts right.
        2. A floating image associated with that service fades in at the cursor position or fixed in the background.
- **Data:**
    - Architecture (Exterior structures)
    - Interior (Spatial design)
    - Aerial (Drone shots)
    - Commercial (Brand spaces)

## 4. Portfolio Section (`MasonryGrid.tsx`)
*Same as previous version.* (Asymmetrical 3-column grid with differential scroll speeds).

## 5. Trusted Partners (`ClientMarquee.tsx`) **[NEW]**
**Concept:** Showcasing industry reliability through client logos.
- **Layout:** A horizontal strip.
- **Animation:** **Infinite Loop (Marquee).**
    - Logos scroll seamlessly from right to left.
    - Use two duplicate sets of logos to create a seamless loop using Framer Motion (`animate={{ x: "-50%" }}`).
- **Style:** Logos should be monochrome (white/grey) and uniform in size to maintain the minimal aesthetic.
- **Content:** Use placeholders for "Hyundai E&C", "Samsung C&T", "Gansam Architects", etc.

## 6. Contact CTA (`ContactCTA.tsx`) **[NEW]**
**Concept:** A final push to convert the visitor.
- **Layout:** Large vertical padding (`py-32`).
- **Typography:** Massive text asking for action.
    - "Ready to Visualize?"
    - "Start a Project."
- **Interaction:**
    - The background color could slightly invert or lighten as the user enters this section (Visual cue for the end).
    - A huge "Arrow Button" that follows the magnetic cursor effect.
- **Link:** Directs to `/contact` page.

---

# Page Assembly (`app/page.tsx`)
Compose the page by stacking these components.
Ensure adequate vertical spacing (`gap-24` or `gap-32`) between sections to let the design breathe (Whitespace is luxury).

# Task Instructions
1.  Generate code for the **3 NEW components** (`ServiceList`, `ClientMarquee`, `ContactCTA`).
2.  Update `app/page.tsx` to include the full flow.
3.  Ensure the "ServiceList" uses advanced hover interactions (e.g., tracking mouse position for the preview image).