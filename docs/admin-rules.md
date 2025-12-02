# Admin Panel Rules & Guidelines

## 1. Separation of Concerns
The application is divided into two distinct domains using Next.js Route Groups:
- **Site (`(site)`):** The public-facing portfolio. Follows `core-design.md` (Brutalist, Dark Mode, Noise).
- **Admin (`(admin)`):** The private management interface. Follows the rules below.

## 2. Design Philosophy: "Clean & Functional"
Unlike the main site, the Admin Panel prioritizes clarity, readability, and standard UI patterns.
- **Theme:** Light Mode (Clean White) or Neutral Dark (if requested later). **NO** Noise texture. **NO** Custom Cursor.
- **Font:** `Inter` (Standard Sans-serif). No Monospace for body text unless displaying code/data.
- **Layout:** Standard Dashboard Layout (Sidebar + Main Content Area).

## 3. Technology Stack (Admin Specific)
- **UI Library:** Shadcn UI (Radix Primitives + Tailwind).
- **Editor:** Tiptap (Headless, extensible rich text editor).
- **Icons:** Lucide React (Standard with Shadcn).

## 4. Implementation Rules
- **Route Groups:** All admin pages must reside in `app/(admin)/`.
- **Layouts:**
    - `app/(site)/layout.tsx`: Contains `NoiseOverlay`, `Lenis`, `CustomCursor`.
    - `app/(admin)/layout.tsx`: Contains `SidebarProvider`, `Toaster`.
- **Components:**
    - Admin-specific components should be placed in `components/admin/` or `components/ui/` (Shadcn).
    - Do **NOT** mix Site components (e.g., `Hero`, `Philosophy`) into the Admin panel.
- **Tailwind Config:**
    - Ensure Shadcn colors (`--background`, `--foreground`, etc.) do not overwrite the Site's custom colors (`#050505`, etc.).
    - Use CSS variables for Shadcn colors to allow for potential theming without breaking the Site.

## 5. Definition of Done (Admin)
- Admin pages must load without the "Heavy" scroll effect (Lenis) of the main site.
- Admin pages must have a distinct visual identity (Clean vs. Brutalist).
- Navigation between Admin and Site should be intentional (e.g., a "View Site" button).
