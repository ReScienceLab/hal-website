---
version: alpha
name: Hal
description: Autonomous precision for the coding loop. Dark void aesthetic with a single warm accent, engineered for developers who trust machines to ship.
colors:
  primary: "#0a0a0c"
  on-primary: "#f0f0f0"
  accent: "#dc2626"
  secondary: "#8a8f98"
  surface: "#111114"
  surface-elevated: "#1a1a1e"
  success: "#27a644"
  warning: "#f59e0b"
typography:
  display-hero:
    fontFamily: "Geist, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "-2.4px"
    fontFeature: "'liga' 1"
  display-section:
    fontFamily: "Geist, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-1.6px"
    fontFeature: "'liga' 1"
  heading-feature:
    fontFamily: "Geist, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.8px"
    fontFeature: "'liga' 1"
  body-large:
    fontFamily: "Geist, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0px"
  body-medium:
    fontFamily: "Geist, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0px"
  caption:
    fontFamily: "Geist, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0px"
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
    fontFeature: "'liga' 1"
  mono-body:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0px"
    fontFeature: "'liga' 1"
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    typography: "{typography.body-medium}"
  button-primary-hover:
    backgroundColor: "#ef4444"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.03)"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    typography: "{typography.body-medium}"
  button-ghost-hover:
    backgroundColor: "rgba(255,255,255,0.06)"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-elevated:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
  badge:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
    typography: "{typography.label}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    typography: "{typography.body}"
---

## Overview

Hal is an autonomous AI coding loop CLI. The visual identity reflects that: a dark void where a single warm accent — the HAL eye — marks the moment the machine takes the wheel. The design is terminal-native but refined, treating the interface like a precision instrument rather than a dashboard.

The system is built on a near-black canvas with subtle surface elevation, creating depth without visual noise. Typography uses Geist Sans for UI and Geist Mono for anything that looks like code, commands, or technical labels. OpenType ligatures are enabled globally as a structural detail, not decoration.

## Colors

- **Primary (#0a0a0c):** The void. Deep ink with a barely perceptible warm undertone. Used for the deepest backgrounds.
- **Surface (#111114):** One step up from the void. Cards, panels, and contained surfaces.
- **Surface Elevated (#1a1a1e):** Slightly lighter for hover states, dropdowns, and elevated components.
- **On Primary (#f0f0f0):** Near-white text. Slightly softened from pure white to reduce eye strain on dark backgrounds.
- **Secondary (#8a8f98):** Cool silver-gray for body text, descriptions, and secondary content.
- **Accent (#dc2626):** The HAL eye. Warm red used sparingly for primary CTAs, active states, and brand marks. It is the only chromatic color in the system.
- **Border (rgba(255,255,255,0.06)):** Ultra-subtle semi-transparent white. The default border treatment.
- **Border Strong (rgba(255,255,255,0.10)):** Slightly more visible for prominent separations.

## Typography

Geist Sans drives all marketing and UI text. Geist Mono handles code, commands, labels, and anything that needs to feel like terminal output. Both fonts enable OpenType ligatures globally.

Display sizes use aggressive negative letter-spacing — -2.4px at 72px, -1.6px at 48px — creating compressed, authoritative headlines. Below 32px, tracking relaxes toward normal. The weight system is narrow: 400 for reading, 500 for UI emphasis, 600 for headings. No bold above 600.

## Layout

The spacing system is built on an 8px base unit: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px. Sections are separated by generous vertical padding (64px–96px) with no visible dividers — the dark background provides natural isolation.

Max content width is approximately 1200px. The hero is a centered single-column with vast vertical padding. Feature sections use 2–3 column grids for cards. Code and terminal previews are full-width or contained with subtle borders.

## Elevation & Depth

On dark surfaces, elevation is communicated through background luminance rather than shadow darkness:

- **Flat (Level 0):** `#0a0a0c` — page background, no shadow.
- **Surface (Level 1):** `#111114` + `1px solid rgba(255,255,255,0.06)` — cards, panels.
- **Elevated (Level 2):** `#1a1a1e` + `1px solid rgba(255,255,255,0.10)` — hover states, dropdowns.
- **Focus:** `2px solid rgba(220,38,38,0.5)` — accent-colored focus ring on interactive elements.

## Shapes

- **4px:** Small badges, inline code, toolbar buttons.
- **8px:** Buttons, inputs, functional elements.
- **12px:** Cards, panels, feature containers.
- **16px:** Large panels, hero sections.
- **9999px:** Pills, badges, status tags.

## Components

`button-primary` is the high-emphasis action. Warm red background, white text, 8px radius, 12px 24px padding. Hover lightens to `#ff4d5a`. Used for the main CTA only.

`button-ghost` is the default action. Near-transparent white background (`rgba(255,255,255,0.03)`), near-white text, 8px radius. Hover increases background opacity to `0.06`. Used for secondary actions and navigation.

`card` is the standard container. `#111114` background, `1px solid rgba(255,255,255,0.06)` border, 12px radius, 24px padding. No drop shadow — depth comes from the surface color step.

`card-elevated` is the hover/selected variant. `#1a1a1e` background with the stronger border.

`badge` is a neutral pill. `rgba(255,255,255,0.05)` background, secondary gray text, 9999px radius, 4px 12px padding. Used for tags, version labels, and status.

`input` follows the card pattern. `#111114` background, 8px radius, 12px 16px padding. Focus state adds the accent-colored ring.

## Do's and Don'ts

- Do use `#0a0a0c` as the deepest background and `#111114` for surfaces.
- Do enable `"liga"` on all Geist text.
- Do use weight 600 for headings, 500 for UI emphasis, 400 for body.
- Do apply negative letter-spacing at display sizes: -2.4px at 72px, -1.6px at 48px.
- Do reserve the accent red (`#dc2626`) for primary CTAs and active states only.
- Do use semi-transparent white borders instead of solid dark borders on dark backgrounds.
- Do use Geist Mono for code, commands, and technical labels.
- Don't use pure white (`#ffffff`) as primary text — `#f0f0f0` is softer on the eyes.
- Don't apply the accent red decoratively. It is a signal, not a theme.
- Don't use traditional CSS drop shadows for elevation on dark surfaces.
- Don't use positive letter-spacing on display text.
- Don't introduce additional chromatic colors into the UI chrome.
