# Aryaman Singh Dev - Portfolio Website Implementation

## ✅ Complete Portavia Clone

This is a pixel-faithful structural clone of https://portavia.framer.website/ with Aryaman's content.

---

## 🎨 Design Implementation

### Color Palette (Exact as Specified)
- **Background**: `#0D0C0B` (warm near-black) & `#1A1814` (deep warm charcoal)
- **Text**: `#F0EDE8` (bone white)
- **Accent**: `#C9A96E` (amber gold) & `#A67C52` (muted copper)
- **NO** neon blue, violet, purple, or cold tones
- **Grain texture** overlay at `opacity: 0.035`

### Typography
- **Font**: Inter
- **Hero headings**: `clamp(72px, 10vw, 140px)` - Massive editorial style
- **Section titles**: `clamp(32px, 4vw, 52px)`
- **Body text**: 16-18px
- **All text left-aligned** (editorial layout, not centered)

---

## 📐 Site Architecture

### 4 Pages + Contact Anchor

1. **`/`** - Home (long scrolling page with 8 sections)
2. **`/about`** - About / Story / Journey
3. **`/projects`** - All Projects Grid with filtering
4. **`/writing`** - Writing / Essays with filtering
5. **`/#contact`** - Contact form (anchor at bottom of Home)

---

## 🏠 HOME PAGE - Section by Section

### 1. Navigation (Fixed, Frosted Glass on Scroll)
- **Left**: Avatar circle + "Aryaman Singh Dev"
- **Center**: Home · About · Projects · Writing · Contact
- **Right**: "● Available for work" pill (green dot)
- Transparent on load → `blur(20px)` frosted glass after 80px scroll

### 2. Hero (Parallax with Layered Images)
- **Layout**: 55% left column (text), 45% right column (images)
- **Images**: 
  - Back image: Atmospheric dark AI visual (scrolls at `0.3x` speed)
  - Front image: Professional headshot (scrolls at `0.7x` speed, overlaps back)
  - Floating "Hi 👋" pill on front image (spring animation)
- **Text**: 
  - Small label: "ARYAMAN SINGH DEV"
  - Giant stacked heading: "AI" / "Engineer" (massive, left-aligned)
  - Subtitle: "I'm a Penn State MS AI student..."
- **Animation**: Staggered fade-in on load

### 3. What I Can Do (Horizontal Scrolling Skills Cards)
- **Heading**: "what I can do"
- **4 horizontally scrolling cards**:
  1. AI Engineering
  2. Computer Vision
  3. Automation & MLOps
  4. ML & Data Science
- **Hover**: 3D perspective tilt (`rotateX`/`rotateY` based on mouse position)
- Dark charcoal background `#1A1814`, amber border-top

### 4. About Snapshot
- **Layout**: 60% left (bio), 40% right (stats)
- **Stats**: Count-up animation from 0 on scroll-enter
  - 3+ Years of Building
  - 6+ Projects Shipped
  - 3 Continents
- **Contact info**: Phone, LinkedIn
- **CTA**: "My Story →" link to `/about`

### 5. Featured Projects (Asymmetric Grid)
- **Pattern**: Large card → 2 side-by-side → Large card → 2 side-by-side
- **Projects**:
  1. String Tune (Creative Tech)
  2. AI Job Application Automation
  3. Autonomous Legal Document Analyzer
  4. Adversarial Attacks on Deep Vision Models
  5. AI Financial Automation Platform
  6. Predictive Maintenance @ SymphonyAI
- **Hover**: Image scales `1.05`, description slides up, dark overlay
- **CTA**: "Browse All Projects →" to `/projects`

### 6. Where I Show Up (Platform Cards)
- **6 scrolling platform cards**:
  - Substack (@aryamandev)
  - Medium (@aryamandev.college)
  - LinkedIn (/in/aryamandev)
  - 𝕏 (@artamandev)
  - Instagram (@aryamandev)
  - GitHub (dev4-gpt, dev-aryaman)
- **Stats row**: 6+ Platforms · 3 Countries · 6+ Projects Shipped

### 7. FAQ (Accordion)
- **6 expandable items** (numbered 1-6):
  1. What kind of AI projects do you take on?
  2. What's your current focus?
  3. What tools and stack do you use?
  4. Are you open to collaborations?
  5. Where can I read your writing?
  6. How do I get in touch?
- **Animation**: Smooth `max-height` transition, `[+]` rotates to `[×]`

### 8. Writing & Ideas Preview
- **2 writing cards** (grid):
  - The Future of AI Safety (Substack)
  - Building AI Automation Pipelines (Medium)
- **CTA**: "Browse All Writing →" to `/writing`

### 9. Contact Section
- **Layout**: 40% left (portrait with "Hi" pill), 60% right (form)
- **Form fields**:
  - Name
  - Email
  - What are you building?
  - Message
- **Submit button**: Amber "Send it →"
- **Social icons footer**: LinkedIn, 𝕏, Instagram, Threads, Substack, Medium, GitHub (2x)

### 10. Footer
- **Left**: "© 2025 Aryaman Singh Dev"
- **Right**: "Built with intention"

---

## 📄 ABOUT PAGE

### Sections:
1. **Page Hero**: Giant "About me" heading + 2-paragraph bio
2. **What I Do**: Same horizontal scrolling skill cards from homepage
3. **My Journey**: Vertical timeline with 4 work experiences:
   - SymphonyAI (Jan-Jul 2024)
   - Biocube Matrics (Jul-Aug 2023)
   - National University of Singapore (Jun-Jul 2023)
   - AI Safety Research (Present)
4. **My Stack**: Tech icon grid (20+ technologies):
   - Python, PyTorch, TensorFlow, LangChain, FAISS, Docker, FastAPI, n8n, OpenCV, etc.
   - Machine Learning, Statistics, Probability, NumPy, Pandas, Matplotlib
5. **How I Work**: 5-step process cards:
   - 01. Research & Framing
   - 02. Build & Prototype
   - 03. Refine & Evaluate
   - 04. Ship & Deploy
   - 05. Write & Document

---

## 🎯 PROJECTS PAGE

- **Filter tabs**: All · AI Engineering · Computer Vision · Automation · Research · Creative
- **Masonry grid** of all 6 projects
- **Hover**: Image zoom + "View Project →" overlay

---

## ✍️ WRITING PAGE

- **Filter tabs**: All · AI · Culture · Research · Product
- **2-column grid** of writing cards
- **Metadata**: Platform badge (Substack/Medium), date, title, excerpt
- **External links** to actual articles

---

## 🎬 Animations & Interactions (GLOBAL)

### Custom Cursor
- **8px dot** (center, fast-following)
- **40px ring** (outer, slower-following)
- **On hover**: Ring scales to `1.8x`, opacity increases
- **Blend mode**: `mix-blend-mode: difference`

### Scroll-Triggered Animations
- **IntersectionObserver** on EVERY section
- **Entry animation**: `translateY(30px) opacity(0)` → `translateY(0) opacity(1)`
- **Duration**: `0.6s ease-out`

### Page Load Stagger
- **Nav**: 0s delay
- **Hero text**: 0.2s delay
- **Hero images**: 0.4s delay

### Parallax Hero
- **Back image**: `scrollY * 0.3`
- **Front image**: `scrollY * 0.7`
- Creates cinematic depth effect

### Count-Up Stats
- **Trigger**: IntersectionObserver
- **Animation**: Numbers count from 0 to target over 2 seconds

### 3D Card Tilt
- **On mousemove**: Compute `rotateX` and `rotateY` from cursor offset
- **Style**: `transform: perspective(1000px) rotateX() rotateY()`
- **Applies to**: Skill cards, project cards, platform cards

### Frosted Glass Nav
- **Default**: `background: transparent`
- **After 80px scroll**: `background: rgba(13,12,11,0.85); backdrop-filter: blur(20px)`

### Grain Texture
- **Position**: `body::before` pseudo-element
- **Image**: SVG noise pattern
- **Opacity**: `0.035`
- **Blend mode**: `overlay`

---

## 🔗 Social Links

- LinkedIn: https://www.linkedin.com/in/aryamandev/
- Instagram: https://www.instagram.com/aryamandev/
- Threads: https://www.threads.com/@aryamandev
- Substack: https://substack.com/@aryamandev
- Medium: https://medium.com/@aryamandev.college
- 𝕏 (Twitter): https://x.com/artamandev
- GitHub: https://github.com/dev4-gpt
- GitHub: https://github.com/dev-aryaman
- Phone: (484) 735-7279

---

## 📱 Responsive Design

- **Desktop**: Full parallax, 3D effects, horizontal scrolling
- **Tablet**: Single column layouts, simplified nav
- **Mobile**: Stacked sections, touch-optimized interactions

---

## 🚀 Tech Stack

- **Framework**: React 19
- **Router**: React Router DOM 7
- **Animations**: Framer Motion 12
- **Scroll Observer**: react-intersection-observer
- **Icons**: Lucide React, Radix UI Icons
- **Styling**: Custom CSS (no Tailwind, no CSS-in-JS)
- **Fonts**: Inter (Google Fonts)

---

## ✨ Key Features

✅ Multi-page architecture with client-side routing
✅ Custom cursor with blend mode
✅ Parallax hero with layered images
✅ 3D perspective card hover effects
✅ Horizontal scrolling skill cards
✅ Scroll-triggered entrance animations
✅ Count-up stat animations
✅ Frosted glass navigation
✅ FAQ accordion
✅ Contact form
✅ Filterable projects and writing
✅ Grain texture overlay
✅ Massive editorial typography
✅ Warm color palette (NO cold tech colors)
✅ Left-aligned editorial layout
✅ All content provided by user integrated

---

## 📦 File Structure

```
/app/frontend/src/
├── App.js (Router setup)
├── App.css (Complete styling)
├── components/
│   ├── CustomCursor.jsx
│   ├── Navigation.jsx
│   ├── ParallaxHero.jsx
│   ├── HorizontalSkills.jsx
│   ├── AboutSnapshot.jsx
│   ├── FeaturedProjects.jsx
│   ├── PlatformCards.jsx
│   ├── FAQ.jsx
│   ├── WritingPreview.jsx
│   └── ContactSection.jsx
└── pages/
    ├── HomePage.jsx
    ├── AboutPage.jsx
    ├── ProjectsPage.jsx
    └── WritingPage.jsx
```

---

## 🎯 Portavia Compliance Checklist

✅ Multi-page site (not single-page)
✅ Parallax hero with 2 layered images
✅ Custom cursor (dot + ring)
✅ 3D card tilt on hover
✅ Scroll-triggered animations on ALL sections
✅ Horizontal scrolling skills cards
✅ Count-up stats
✅ Frosted glass nav on scroll
✅ Staggered page load animation
✅ Massive editorial typography (10vw+ headings)
✅ Warm color palette (#0D0C0B, #C9A96E)
✅ Left-aligned layout (not centered)
✅ Asymmetric project grid
✅ FAQ accordion
✅ Grain texture overlay
✅ All animations match portavia timing

---

## 🌐 Live Preview

https://interactive-aryaman.preview.emergentagent.com

---

**Built with intention. No shortcuts. Pixel-perfect portavia clone with Aryaman's content.**
