# Design Brief: Warm Editorial Fintech Home Page

## Objective
Build a production-grade home page for a fintech web app targeting ambitious students and emerging-market professionals navigating high-stakes academic and funding opportunities. The design must embody the quiet confidence of an established publication combined with modern financial tool clarity.

## Target Audience
- Ambitious students
- Emerging-market professionals
- Users navigating academic and funding opportunities

## Aesthetic Direction
Editorial-tactile sensibility: warm, tactile surfaces, deliberate literary serif headings, structured objective UI layers. Avoid institutional distance or startup hyper-efficiency - interface should feel thoughtful, encouraging, and dignified.

## Design System Reference
Full design system is provided, with key specifications:

### Colors
- Background: `#FAF8F4` (warm parchment off-white)
- Primary ink: `#14213D` (deep midnight navy)
- Secondary ink: `#4B5563`
- Primary accent: `#F5A524` (warm saffron)
- Success green: `#1F9D6B`
- Warning amber: `#D98A00`
- Neutral slate: `#6B7280`
- Border color: `#E8E3DA`

### Typography
- Display/Section titles: `Newsreader` (serif, 600 weight)
- Body/UI/Numeric: `Inter` (sans-serif), enable tabular figures for dates/metrics
- Mobile typography scale defined in design specs

### Layout
- Mobile (<=640px): 4-column, 1rem margins, 1rem gutters
- Tablet (641-1024px): 8-column, 2rem margins, 1.25rem gutters
- Desktop (>1025px): 12-column, max 1200px container, centered, 3rem gutters

### Required Modern Tools
Must integrate:
- Lenis for smooth scrolling
- GSAP for scroll animations and transitions
- Lottie for subtle animated illustrations
- Three.js for a subtle background 3D element (ambient, not distracting)

## Content Structure
The home page should include:
1. **Navigation Header** - Logo, primary CTA button, navigation links
2. **Hero Section** - Large serif headline, descriptive subhead, primary/secondary CTAs
3. **Features Section** - 3 column grid of feature cards with verdict pill status indicators
4. **Opportunities Section** - Showcase of funding/academic opportunities with fit-score circular badges
5. **Stats Section** - Key metrics with animated counter effects (using GSAP)
6. **Testimonials Section** - User testimonials in card format
7. **CTA Section** - Final call-to-action before footer
8. **Footer** - Standard footer links and branding

## Technical Implementation
- Framework: Next.js 16+ with App Router
- Styling: Tailwind CSS v4
- Output path: Update `/home/giress/provost/app/page.tsx` with the new implementation
- Update `/home/giress/provost/app/globals.css` to include the design system's Tailwind configuration
- Create any necessary client components for animations that require useEffect

## Image Needs
- Generate subtle placeholder illustrations for hero section
- Create SVG icons for status indicators, fit-score rings, and verdict pills

## Interaction Requirements
- Smooth Lenis scrolling throughout
- GSAP scroll-triggered animations for elements entering viewport
- Hover effects on all interactive cards and buttons
- Subtle Three.js background particle animation in hero section
- Lottie animation for a loading or success state element
- Responsive design that works across all device sizes