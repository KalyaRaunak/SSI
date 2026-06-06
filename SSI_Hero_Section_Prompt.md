# SSI Hero Section — Custom Design Prompt
> For: Shree Sai Institute | Replace the Mainframe hero with this completely new design
> Stack: React + TypeScript + Vite + Tailwind CSS

---

## FONTS

Load in `index.html` via Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
```

In `index.css`, define CSS variables:
```css
:root {
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Poppins', sans-serif;
  --color-navy: #0A0A2E;
  --color-blue: #1E1EBF;
  --color-gold: #F5A623;
  --color-gold-light: #FFB84D;
  --color-white: #FFFFFF;
  --color-card: #12124A;
  --color-border: #2A2A7A;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-navy);
  color: var(--color-white);
  margin: 0;
  padding: 0;
}
```

---

## BACKGROUND

- Full-screen background: deep navy `#0A0A2E`
- Add a **canvas particle animation** — small white/gold dots floating slowly upward and fading. Use `position: fixed; inset: 0; z-index: 0; pointer-events: none`.
- Canvas setup:
  - Create 120 particles, each with random x, y, size (1–3px), speed (0.3–1.2), opacity (0.2–0.8)
  - Color alternates: 70% white `rgba(255,255,255,alpha)`, 30% gold `rgba(245,166,35,alpha)`
  - Particles drift upward slowly, reset to bottom when they exit top
  - Use `requestAnimationFrame` loop
- Behind the headline text, add a **radial gradient glow**:
  ```css
  background: radial-gradient(ellipse 800px 500px at 40% 50%, rgba(30,30,191,0.35) 0%, transparent 70%);
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
  ```

---

## HERO SECTION LAYOUT

- Full `h-screen`, flex column, `justify-center`, horizontal padding `px-6 sm:px-10 md:px-16 lg:px-24`
- `position: relative`, `overflow: hidden`, `z-index: 1`
- Content max-width: `max-w-4xl`

---

## HERO CONTENT — TOP TO BOTTOM

### 1. Trust Badge (animate: fade in + slide down, delay 0ms)
```
[ ⭐  AHMEDABAD'S MOST TRUSTED COACHING INSTITUTE ]
```
- Pill-shaped badge
- Border: `1px solid #F5A623`
- Background: `rgba(245, 166, 35, 0.08)`
- Text: gold `#F5A623`, font size `12px sm:14px`, `font-family: Poppins`, `font-weight: 600`, uppercase, letter-spacing `0.1em`
- Star icon: gold ⭐ left side
- Padding: `px-4 py-2`, border-radius `9999px`
- Margin bottom: `24px`
- Animation: fade in from top (translateY -10px → 0, opacity 0 → 1), duration 0.5s, delay 0ms

---

### 2. Main Headline (animate: word-by-word slide up, staggered)

**Line 1:**
```
SUCCESS की शुरुआत,
```
- "SUCCESS" → `font-family: Montserrat`, `font-weight: 900`, `font-size: clamp(42px, 7vw, 88px)`, color: `#FFFFFF`
- "की शुरुआत," → same size, `font-weight: 800`, color: `#F5A623` (gold)

**Line 2:**
```
सिर्फ EXPERTS के साथ
```
- "सिर्फ" → `font-weight: 800`, color: `#F5A623` (gold)
- "EXPERTS" → `font-weight: 900`, color: `#FFFFFF`
- "के साथ" → `font-weight: 800`, color: `#F5A623` (gold)

**Headline animation:**
- Split entire headline into individual words
- Each word wraps in `overflow: hidden` span
- Inner span starts at `translateY(100%)`, animates to `translateY(0)` with `opacity: 0 → 1`
- Stagger delay: `index × 80ms`, start delay: `200ms`
- Duration: `0.6s`, easing: `cubic-bezier(0.22, 1, 0.36, 1)`
- Line-height: `1.1`
- Margin bottom: `16px`

---

### 3. Sub-headline (animate: fade in, delay 800ms)
```
Turning Potential Into Rankers Since 2010
```
- Font: Poppins, `font-weight: 400`, color: `rgba(255,255,255,0.75)`
- Font size: `clamp(15px, 2.5vw, 20px)`
- After text: blinking cursor `|` — `inline-block w-[2px] h-[1em] bg-gold align-middle ml-1`, CSS blink animation `1s step-end infinite`
- Margin bottom: `32px`
- Animation: fade in, opacity 0 → 1, duration 0.6s, delay 800ms

---

### 4. Course Tag Pills (animate: slide in from left, staggered, delay 1000ms)

5 pill buttons in a flex-wrap row:
```
[ JEE Main & Advanced ]
[ NEET UG ]
[ GUJCET ]
[ Boards 10th–12th ]
[ Foundation 5th–9th ]
```

Each pill:
- Border: `1px solid rgba(255,255,255,0.25)`
- Background: `transparent`
- Color: `rgba(255,255,255,0.85)`
- Font: Poppins, `13px sm:14px`, `font-weight: 500`
- Padding: `px-4 py-2`, border-radius: `9999px`
- Gap: `gap-2`, margin-bottom: `8px` (for wrap)
- **Hover:** background `rgba(245,166,35,0.15)`, border-color `#F5A623`, color `#F5A623`, transition `0.2s`
- Animation: slide in from left (`translateX(-20px) → 0`, `opacity 0 → 1`), each pill staggered by `100ms`, start delay `1000ms`
- Margin bottom: `36px`

---

### 5. CTA Buttons Row (animate: fade in + slide up, delay 1200ms)

Three buttons in a flex row (stack on mobile):

**Button 1 — Primary (Apply Now)**
```
[ Apply Now → ]
```
- Background: `#F5A623` (gold)
- Text: `#0A0A2E` (dark navy), Montserrat, `font-weight: 700`, `15px sm:16px`
- Padding: `px-7 py-3.5`, border-radius: `9999px`
- Box-shadow: `0 0 20px rgba(245,166,35,0.4)`
- **Hover:** background `#FFB84D`, box-shadow `0 0 35px rgba(245,166,35,0.65)`, translateY `-2px`
- **Pulse animation:** keyframes — box-shadow pulses from `0 0 20px rgba(245,166,35,0.4)` to `0 0 40px rgba(245,166,35,0.0)` every `2s infinite`
- Transition: `all 0.25s ease`

**Button 2 — Secondary (View Results)**
```
[ 🏆 View Results ]
```
- Background: `transparent`
- Border: `1.5px solid rgba(255,255,255,0.35)`
- Text: `#FFFFFF`, Poppins, `font-weight: 500`, `15px sm:16px`
- Padding: `px-7 py-3.5`, border-radius: `9999px`
- **Hover:** border-color `#FFFFFF`, background `rgba(255,255,255,0.08)`, translateY `-2px`
- Transition: `all 0.25s ease`

**Button 3 — WhatsApp**
```
[ 💬 WhatsApp Inquiry ]
```
- Background: `#25D366`
- Text: `#FFFFFF`, Poppins, `font-weight: 600`, `15px sm:16px`
- Padding: `px-7 py-3.5`, border-radius: `9999px`
- **Hover:** background `#20B858`, translateY `-2px`, box-shadow `0 0 20px rgba(37,211,102,0.4)`
- On click: open `https://wa.me/919033655556`
- Transition: `all 0.25s ease`

**Button group animation:**
- Container: `flex flex-wrap gap-3 sm:gap-4`
- Fade in + translateY(12px → 0), opacity 0 → 1, duration 0.6s, delay 1200ms

---

### 6. Scroll Indicator (animate: infinite bounce, delay 1600ms)

Position: absolute, bottom `32px`, left `50%`, transform `translateX(-50%)`

```
↓
SCROLL TO EXPLORE
```
- Arrow: `↓` in gold `#F5A623`, font-size `20px`
- Text: "SCROLL TO EXPLORE", Poppins, `10px`, letter-spacing `0.15em`, color `rgba(255,255,255,0.45)`, uppercase
- Flex column, align-items center, gap `6px`
- CSS animation: `translateY(0px) → translateY(8px) → translateY(0px)`, duration `2s`, `ease-in-out`, `infinite`
- Fade in, delay `1600ms`

---

## FLOATING WHATSAPP BUTTON (Always Visible)

- Position: `fixed`, bottom `28px`, right `24px`, z-index `999`
- Circle button: `width: 58px, height: 58px`, background `#25D366`, border-radius `50%`
- WhatsApp SVG icon: white, `28px`
- Box-shadow: `0 4px 20px rgba(37,211,102,0.45)`
- **Bounce animation:**
  ```css
  @keyframes waBounce {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  animation: waBounce 2.5s ease-in-out infinite;
  ```
- On hover: scale `1.1`, box-shadow increases
- On click: open `https://wa.me/919033655556`

**Tooltip on hover:**
- `"Chat with Us"` appears to the left of button
- White pill, dark text, font-size `13px`, padding `px-3 py-1.5`
- Fade in on hover, fade out on leave

---

## MOBILE RESPONSIVE RULES

- **375px (mobile):**
  - Headline: `clamp(38px, 10vw, 52px)`
  - Trust badge: font-size `11px`
  - CTA buttons: stack vertically (`flex-direction: column`), full width
  - Course pills: 2 per row
  - Scroll indicator: hide on very small screens

- **768px (tablet):**
  - Headline: `clamp(52px, 7vw, 72px)`
  - CTA buttons: horizontal row
  - Course pills: all in one row

- **1280px+ (desktop):**
  - Full sizing as specified above
  - Content max-width `900px`

---

## COMPLETE ANIMATION TIMELINE

| Element            | Type              | Delay  | Duration |
|--------------------|-------------------|--------|----------|
| Trust Badge        | Fade + slide down | 0ms    | 500ms    |
| Headline words     | Staggered slide up| 200ms  | 600ms    |
| Sub-headline       | Fade in           | 800ms  | 600ms    |
| Course pills       | Staggered slide left | 1000ms | 500ms |
| CTA buttons        | Fade + slide up   | 1200ms | 600ms    |
| Scroll indicator   | Bounce (infinite) | 1600ms | —        |
| Canvas particles   | Drift (infinite)  | 0ms    | —        |
| WhatsApp button    | Bounce (infinite) | 0ms    | —        |

---

## DO NOT USE

- ❌ No mouse-scrub video background
- ❌ No `HelveticaNow` fonts
- ❌ No white/light background
- ❌ No Mainframe branding, colors, or copy
- ❌ No purple gradients
- ❌ No generic "AI" aesthetics

---

## SUMMARY

This is the hero section for **Shree Sai Institute** — a premium coaching institute.
- Dark navy background `#0A0A2E` with floating particles
- Gold `#F5A623` + Royal Blue `#1E1EBF` accent system
- Montserrat for headings (800–900 weight), Poppins for body
- Hindi-English mix headline with word-by-word animation
- 3 CTA buttons + 5 course pill tags
- Floating WhatsApp button always visible
- Fully mobile responsive
- Professional, bold, energetic — built to convert

*Institute: Shree Sai Institute | Ahmedabad, Gujarat | Since 2010*
