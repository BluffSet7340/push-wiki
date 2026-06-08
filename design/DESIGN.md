---
name: Editorial Immersive Reader
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#454557'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#767589'
  outline-variant: '#c6c4da'
  surface-tint: '#393bff'
  primary: '#1100e1'
  on-primary: '#ffffff'
  primary-container: '#3233ff'
  on-primary-container: '#cdceff'
  inverse-primary: '#bfc1ff'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#841a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ae2500'
  on-tertiary-container: '#ffc5b8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#bfc1ff'
  on-primary-fixed: '#03006d'
  on-primary-fixed-variant: '#1200ed'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a3'
  on-tertiary-fixed: '#3d0700'
  on-tertiary-fixed-variant: '#8a1b00'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max-width: 680px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
This design system centers on a cinematic, content-first editorial experience. It is designed to evoke the feeling of a high-end digital magazine where the article is the protagonist and the interface is a quiet, sophisticated supporting character. 

The aesthetic is a blend of **Minimalism** and **Modern Editorial**. It prioritizes extreme legibility, generous whitespace, and a focused hierarchy. The goal is to reduce cognitive load, allowing the user to transition into a state of "deep work" or "deep reading." The emotional response should be one of calm, intellectual prestige, and intentionality.

## Colors
The palette is intentionally restrained to keep the focus on photography and text. 

- **Primary:** A vibrant Deep Indigo used exclusively for interactive triggers, progress indicators, and active states. It should appear as a "jewel" within the layout.
- **Surface (Light):** A crisp, slightly warm off-white (#F9F9F7) to reduce eye strain compared to pure white, mimicking high-quality book paper.
- **Surface (Dark):** A deep, "ink" black (#0A0A0A) for a cinematic, immersive nighttime reading experience.
- **Typography:** High-contrast charcoal (#1A1A1A) for light mode and soft silver (#E4E4E4) for dark mode.

## Typography
Typography is the core of the design system. We use a high-contrast Serif, **Playfair Display**, for headlines to provide an authoritative, editorial voice. This is paired with **Inter**, a highly legible Sans-Serif, for body text and functional UI.

Body text uses a larger default size (20px) and a generous line height (1.6x) to ensure a comfortable reading rhythm. Display styles use tight letter spacing to feel "locked-in" and cinematic, while labels use wide tracking for a technical, precise feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for article content. To ensure optimal reading speed, the main text column never exceeds 680px, regardless of screen size. This creates "wide shoulders" (margins) on desktop, enhancing the feeling of a premium, uncluttered workspace.

- **Vertical Rhythm:** A strict 8px baseline grid.
- **Section Gaps:** Large 80px gaps between major content blocks to provide breathing room.
- **Mobile:** Content reflows to a single column with 20px side margins. Navigation is hidden or minimized into a single-action header to maintain focus.

## Elevation & Depth
This design system avoids traditional heavy shadows to maintain a flat, "printed" feel. Depth is achieved through:

- **Tonal Layers:** Using subtle shifts in background color (e.g., a slightly darker surface for a card or drawer) rather than shadows.
- **Low-Contrast Outlines:** 1px borders in a very faint neutral tone define secondary areas without adding visual weight.
- **Background Blurs:** When overlays (like time pickers or theme switchers) appear, a heavy backdrop blur is used to keep the focus on the content underneath while indicating the UI's temporary nature.

## Shapes
The shape language is defined by **Pill-shaped** containers (Level 3). This softness provides a modern contrast to the sharp, classic serif typography. 

Buttons, tags, and segmented controls all utilize maximum corner radius to feel tactile and friendly. This "rounded" approach helps interactive elements stand out from the strictly rectangular grid of the text and images.

## Components
- **Buttons:** Fully pill-shaped. Primary buttons use the accent color with white text. Ghost buttons use the low-contrast outline.
- **Segmented Controls:** Used for theme switching (Light / Dark / Sepia). These appear as a single pill-shaped track with a sliding indicator.
- **Reading Progress:** A thin, 2px Indigo line at the very top of the viewport that grows as the user scrolls.
- **Time Picker:** An elegant, vertical scroll-wheel or minimal list for setting the "Daily Push" time, centered on the screen with a heavy backdrop blur.
- **Dividers:** Extremely subtle (0.5pt) horizontal lines used only when a thematic break is required.
- **Cards:** Minimalist, with no borders or shadows; they rely on high-quality imagery and typography hierarchy to define their boundaries.
- **Navigation:** No tab bar. A single "back" or "menu" icon in the top-left, and a "Reading Settings" icon in the top-right.