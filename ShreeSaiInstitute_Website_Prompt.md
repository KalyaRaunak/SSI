# Shree Sai Institute — Complete Website Build Prompt
> AI Website Builder Prompt for Antigravity
> Version: 1.0 | Language: English (Hindi mix only in tagline)

---

## 🎯 PROJECT OVERVIEW

Build a **complete, multi-page, fully responsive professional website** for **Shree Sai Institute (SSI)** — a premier coaching institute based in Ahmedabad, Gujarat, India. The website must feel **premium, trustworthy, and energetic** — designed to convert student inquiries into admissions.

---

## 🎨 BRAND & DESIGN SYSTEM

### Color Palette (Strictly Follow)
```
Primary Blue:        #1E1EBF  (dominant — use for headers, navbar, hero bg)
Deep Navy:           #0A0A2E  (dark sections background)
Gold / Orange:       #F5A623  (accents, highlights, CTA buttons, underlines)
Light Gold:          #FFB84D  (hover states, secondary accents)
White:               #FFFFFF  (text on dark backgrounds)
Off White:           #F0F4FF  (light section backgrounds — use sparingly)
Dark Text:           #0D0D2B  (body text on light backgrounds)
Card Background:     #12124A  (dark cards)
Border/Subtle:       #2A2A7A  (subtle borders, dividers)
```

### Typography
```
Display / Headings:  'Montserrat' — Bold (700) and ExtraBold (800)
Body Text:           'Poppins' — Regular (400) and Medium (500)
Accent / Labels:     'Poppins' — SemiBold (600)
```
- Import both from Google Fonts
- Headings should be large, bold, and commanding
- Use uppercase labels for section tags (e.g., "• OUR COURSES")

### Design Style
- **Dark-dominant theme** — majority of sections on deep navy/dark blue
- **Bold typography** — large, punchy headlines
- **Gold accents everywhere** — buttons, underlines, highlights, icons
- **Minimal white** — only use white as text color or very subtle section breaks
- **Professional but energetic** — not corporate-boring, not childish
- **Cards** with subtle glow borders (blue or gold glow using box-shadow)
- **Glassmorphism cards** where appropriate (backdrop-filter blur)

### Logo
- Name: **Shree Sai Institute**
- Tagline under logo: **CENTRE OF EXCELLENCE**
- Sub-tagline: Foundation • Board • JEE • NEET • GUJCET
- Colors: Royal Blue + Gold/Orange
- Always show logo in navbar and footer
- Use text-based logo representation if image not available:
  - "SSI" in bold blue with gold underline

---

## ✨ ANIMATIONS & INTERACTIONS (ALL REQUIRED)

1. **Hero Section** — Animated text reveal (words slide up one by one)
2. **Stats Counter** — Numbers count up from 0 when scrolled into view
3. **Scroll Fade-in** — Every section fades in + slides up on scroll (use Intersection Observer)
4. **Floating particles** — Subtle star/dot particle background on hero (CSS or canvas)
5. **Navbar** — Transparent on top, solid dark blue on scroll, smooth transition
6. **Hover Effects** — All cards lift with gold glow on hover (transform: translateY + box-shadow)
7. **CTA Button** — Pulsing glow animation on primary CTA buttons
8. **Course Cards** — Flip or slide-reveal effect on hover showing more info
9. **Smooth Scroll** — All internal links scroll smoothly
10. **Page Load** — Subtle fade-in for entire page on load
11. **WhatsApp Button** — Floating, bouncing animation, always visible

---

## 🗂️ WEBSITE STRUCTURE (PAGES)

### Pages Required:
1. **Home** (index)
2. **Courses** (with 5 sub-sections or separate pages)
3. **About Us**
4. **Results**

### Navigation Menu:
```
Home | Courses ▼ | About Us | Results | Contact
```
Courses dropdown:
- Foundation (5th–10th)
- Science Stream (11th–12th)
- Commerce Stream (11th–12th)
- JEE Main & Advanced
- NEET UG
- GUJCET

---

## 📄 PAGE 1: HOME PAGE

### Section 1 — NAVBAR (Sticky)
- Logo left (SSI logo text or image)
- Menu links center: Home | Courses | About Us | Results | Contact
- Right side: WhatsApp button (green, icon + "WhatsApp Us") + "Apply Now →" button (gold)
- Mobile: Hamburger menu with full-screen overlay or slide-in drawer
- On scroll: background becomes solid deep navy with slight shadow

---

### Section 2 — HERO SECTION
**Background:** Deep navy (#0A0A2E) with floating particle dots (CSS animation)
Add a subtle radial gradient glow (blue/gold) behind main text

**Top badge:**
```
⭐ AHMEDABAD'S MOST TRUSTED COACHING INSTITUTE
```
(Pill-shaped badge with gold border)

**Main Headline (Large, Bold, Animated word-by-word reveal):**
```
SUCCESS की शुरुआत,
सिर्फ EXPERTS के साथ
```
(Hindi-English mix — keep exactly as written)
- "SUCCESS" and "EXPERTS" in white bold
- "की शुरुआत" and "के साथ" in Gold (#F5A623)

**Sub-headline:**
```
Turning Potential Into Rankers Since 2010
```
(White, medium weight, with animated cursor blinking at end)

**Course Tags Row (animated slide-in from left):**
```
[ JEE Main & Advanced ]  [ NEET UG ]  [ GUJCET ]  [ Boards 10th–12th ]  [ Foundation 5th–9th ]
```
(Outlined pill buttons, white border, hover fills with gold)

**CTA Buttons Row:**
```
[ Apply Now → ]   [ 🏆 View Results ]   [ WhatsApp Inquiry ]
```
- Apply Now: Gold background, dark text, pulsing glow
- View Results: Blue outlined
- WhatsApp Inquiry: Green with WhatsApp icon

**Scroll indicator:** Animated bouncing arrow at bottom

---

### Section 3 — STATS SECTION
**Background:** Slightly lighter navy or card row on dark bg

4 stat cards in a row (2x2 on mobile):
```
🎓 16+          👥 11,000+        🏆 1,000+           📊 98%
Years of        Students          Selections in        Result
Excellence      Trained           Engineering          Ratio
                                  & Medical
```
- Large bold gold numbers (counter animation)
- White label text below
- Each card: dark glassmorphism card with gold top border
- Cards animate in from bottom on scroll

---

### Section 4 — COURSES SECTION
**Section Label:** `• ACADEMIC PROGRAMS`
**Heading:** `Courses Designed to **Win**`  
("Win" in Gold color)
**Subtext:** From foundation to advanced competitive preparation — every course is structured for peak performance and exam success.

**6 Course Cards in 3-column grid (2 col on tablet, 1 col mobile):**

**Card 1 — Foundation**
```
Icon: 📚
Label: FOUNDATION
Title: 5th – 10th Foundation
Desc: Build unbreakable academic foundations with concept-first teaching. Prepare early for competitive exams with structured learning paths.
Tags: [ Concept Building ] [ Olympiad Prep ] [ Board Excellence ]
Link: Learn More →
```

**Card 2 — Science Stream**
```
Icon: 🔬
Label: SCIENCE STREAM
Title: 11th – 12th Science
Desc: Comprehensive Physics, Chemistry & Biology/Mathematics coaching aligned with CBSE/GSEB boards and competitive exam syllabi.
Tags: [ PCM / PCB ] [ Board + Competitive ] [ Weekly Tests ]
Link: Learn More →
```

**Card 3 — Commerce Stream**
```
Icon: 📊
Label: COMMERCE STREAM
Title: 11th – 12th Commerce
Desc: Accounts, Economics, Business Studies and Statistics — expert coaching for board excellence and competitive commerce exams.
Tags: [ Accounts ] [ Economics ] [ BST ]
Link: Learn More →
```

**Card 4 — JEE**
```
Icon: ⚙️
Label: IIT PREP
Title: JEE Main & Advanced
Desc: Rigorous IIT-JEE preparation with daily problem solving, mock tests, and mentorship from experienced IITians.
Tags: [ 2-Year / 1-Year ] [ Mock Tests ] [ Rank Predictor ]
Link: Learn More →
```

**Card 5 — NEET**
```
Icon: 🧬
Label: MEDICAL
Title: NEET UG Coaching
Desc: Biology-first, concept-deep NEET preparation with AIIMS-level practice questions, anatomy diagrams and revision strategies.
Tags: [ Biology Focus ] [ AIIMS Questions ] [ Crash Course ]
Link: Learn More →
```

**Card 6 — GUJCET**
```
Icon: 🏛️
Label: GUJCET
Title: GUJCET Coaching
Desc: Targeted GUJCET preparation with Gujarat-pattern MCQs practice, previous year papers and high-scoring strategy sessions.
Tags: [ Gujarat Pattern ] [ PYQ Practice ] [ Score Strategy ]
Link: Learn More →
```

**Card Style:**
- Dark navy card (#12124A)
- Gold top border (3px)
- Icon in gold circle
- Label in small caps gold text
- Title bold white
- Tags as small outlined pills
- "Learn More →" in gold, hover underline
- Hover: card lifts up + subtle gold glow box-shadow

---

### Section 5 — RESULTS / TOPPERS SECTION
**Section Label:** `• OUR TOPPERS`
**Heading:** `Our Toppers — **12th SCIENCE 2026**`
**Subtext:** Every year our students crack India's toughest exams. Here are the rankers who made us proud.

**Scrolling topper ticker (horizontal auto-scroll):**
```
⭐ Yug Patel — PR 91.91 | ⭐ Dhruv Modi — PR 99.41 | ⭐ Yuvraj Shekhawat — PR 99.21 | ⭐ Jiya Panchal — PR 97.18 | ⭐ Pratham Panchal — PR 96.29 | ⭐ Minakshi Sisodiya — PR 95+
```
(Infinite left-scroll ticker animation)

**4 Topper Cards (horizontal scroll on mobile):**
```
Card 1:
Badge: 🥇 1st Madhav
Photo: [Placeholder avatar]
Name: Dhruv Modi
Exam: 12th Science 2026
Score: 99.41 Percentile
Batch: 2024-26

Card 2:
Badge: 🥇 1st Shardaba
Photo: [Placeholder avatar]
Name: Yuvraj Shekhawat
Score: 99.21 Percentile
Batch: 2024-26

Card 3:
Photo: [Placeholder avatar]
Name: Jiya Panchal
Score: 97.18 Percentile
Batch: 2024-26

Card 4:
Photo: [Placeholder avatar]
Name: Pratham Panchal
Score: 96.29 Percentile
Batch: 2024-26
```

**Card Style:**
- Score displayed in gold pill badge
- Rank badge (gold crown) top-right
- Circular avatar placeholder

---

### Section 6 — FACILITIES / WHY CHOOSE US
**Section Label:** `• WHY SSI`
**Heading:** `The **SSI Advantage**`
**Subtext:** We don't just teach — we build champions. Every feature of our institute is designed to maximize your potential and exam score.

**6 Feature Cards in 2x3 grid:**
```
🎓 Expert Faculty
Well experienced team of Engineers & Highly Qualified Professionals.

👁️ Personal Attention
Small batch sizes ensure every student gets individual mentoring.

💡 Smart Classrooms
Digital boards, concept videos and interactive problem sessions.

📝 Weekly Tests
Exam-pattern tests every week with detailed performance analysis.

📞 Doubt Sessions
Daily doubt-solving sessions after 8 PM — never stay stuck.

🏆 Proven Results
16+ years of consistent top rankers in JEE, NEET, GUJCET & Boards.
```

**Layout:** Each card has icon (in gold circle), bold title, short description
**Style:** Glassmorphism cards, subtle blue border, hover gold glow

---

### Section 7 — TESTIMONIALS
**Section Label:** `• STUDENT STORIES`
**Heading:** `Hear it from our **Students**`
**Subtext:** Real Students, Real Results — Straight from the students who made it.

**3 Testimonial Cards (carousel/slider with dots):**

**Testimonial 1:**
```
⭐⭐⭐⭐⭐
"The Physics, Chemistry & Maths classes at SSI are extraordinary. They made complex concepts feel simple. The doubt-solving sessions after 8 PM every day were a lifesaver during my JEE Preparation and I scored 98 Percentile. Forever grateful to SSI!"
— Ayush Patel
JEE Advanced 2026 — AIR 337 (Gen. EWS)
JEE Main 2026 — 98 Percentile
```

**Testimonial 2:**
```
⭐⭐⭐⭐⭐
"SSI's structured approach to NEET preparation is unmatched. The faculty is highly experienced and always available for doubt solving. I am so glad I chose SSI for my NEET journey."
— [Student Name - Placeholder]
NEET UG 2026 — [Score Placeholder]
```

**Testimonial 3:**
```
⭐⭐⭐⭐⭐
"The weekly tests and performance analysis at SSI kept me on track throughout the year. The faculty's dedication is extraordinary. Highly recommended for GUJCET aspirants!"
— [Student Name - Placeholder]
GUJCET 2026 — [Score Placeholder]
```

**Style:**
- Large quote marks in gold (decorative)
- Card on dark navy, white text
- Stars in gold
- Student name in gold
- Achievement in smaller blue-ish text
- Auto-plays with 4 second interval, manual dots control

---

### Section 8 — GALLERY
**Section Label:** `• CAMPUS LIFE`
**Heading:** `Inside **SSI**`
**Subtext:** A glimpse of our smart classrooms, award ceremonies, and the vibrant student community.

**Masonry/Bento grid of 6 placeholder cards:**
```
[Large] Main Campus — Vastral, Ahmedabad
[Small] Smart Classrooms
[Small] Study Library
[Small] Annual Results Celebration
[Small] Science Laboratory
[Large] Students Community
```

Each placeholder has:
- Dark blue card with icon + label
- Subtle gradient overlay
- On hover: slight zoom + gold border

---

### Section 9 — ADMISSION CTA SECTION
**Background:** Gold gradient (#F5A623 to #E8941A) — this is the ONE light/bright section

**Admission Open Badge:** `🌟 ADMISSION OPEN`

**Heading (Dark Blue text):**
```
New Admissions Closing on 30th June 2026
```

**Course tags:** 5th to 10th | 11th – 12th (Sci. & Comm.)
With: Foundation | Board | JEE | NEET | GUJCET

**Countdown Timer:**
```
[ DD ] [ HH ] [ MM ] [ SS ]
DAYS   HOURS  MINS   SECS
```
(Live JavaScript countdown to June 30, 2026)

**New Batch Schedule Table:**
```
JEE 2027 — New Batch          21st May 2026
NEET 2027 — New Batch         21st May 2026
10th & 12th — New Batches     23rd April 2026
STD 5th to 9th & 11th         21st May 2026
```

**CTA Button:** `[ Apply Now → ]` — dark blue, large, bold

---

### Section 10 — ENQUIRY FORM
**Section Label:** `• GET IN TOUCH`
**Heading:** `Start Your **Success Journey**`
**Subtext:** Fill in your details and our team will contact you within 24 hours.

**Form Fields:**
```
Full Name *
Phone Number *
Email Address
Course Interested In * (Dropdown):
  - Foundation (5th-10th)
  - 11th-12th Science
  - 11th-12th Commerce
  - JEE Main & Advanced
  - NEET UG
  - GUJCET
Message / Query (Optional)
[ Submit Enquiry → ] button (gold, full width)
```

**Form Style:**
- Dark card with gold border
- Input fields: dark bg, white text, gold focus border
- Submit button: gold bg, dark text, hover glow

**Right side of this section — Contact Info:**
```
📍 SSI Karnavati
2nd Floor, Karnavati Mega Mall – 2, Vastral, Ahmedabad
📞 90 33 655556 | 70 699 699 70

📍 SSI Shashwat
4th Floor, Shashwat Mahadev Complex, New RTC Road, Vastral, Ahmedabad
📞 90 99 655556 | 990 990 96 90

📧 info@shreesaiinstitute.in
⏰ Mon–Sat: 9:00 AM – 8:30 PM
```

---

### Section 11 — FOOTER
**Background:** Deep navy / near-black (#060620)

**Layout: 4 columns**
```
Column 1 — Brand:
[SSI Logo]
Ahmedabad's most trusted coaching institute for JEE, NEET, GUJCET, and Board exams. Building tomorrow's rankers since 2010. Turning potential into achievement — one student at a time.
[Social Icons: Facebook | YouTube | Instagram | Telegram]

Column 2 — Courses:
JEE Main & Advanced
NEET UG
GUJCET
11th – 12th Science
11th – 12th Commerce
Foundation 5th – 10th

Column 3 — Quick Links:
Home
Our Results
Faculty
Gallery
Why Us
Contact

Column 4 — Contact Us:
📍 2nd Floor, Karnavati Mega Mall – 2, Vastral, Ahmedabad – 382418
📞 +91 9033655556
📍 4th Floor, Shashwat Mahadev Complex, RTO road, Vastral, Ahmedabad – 382418
📞 +91 9099655556
📧 info@shreesaiinstitute.in
⏰ Mon – Sat: 9:00 AM – 8:30 PM
```

**Bottom Bar:**
```
© 2026 SHREE SAI INSTITUTE | All rights reserved.
```

---

## 📄 PAGE 2: COURSES PAGE

Each course has its own dedicated section or page with this structure:

### Course Page Template:

**Hero Banner:**
- Course name large (e.g., "JEE Main & Advanced")
- Label badge (e.g., "IIT PREP")
- 1-line tagline
- CTA: Apply Now + WhatsApp Inquiry

**Course Overview Section:**
- What is this course?
- Who is it for?
- Duration options

**Syllabus/Topics Covered:**
- Grid of subject cards

**Key Features:**
- 4–6 feature pills/cards

**Fee & Batch Info:**
- Placeholder table: Batch Type | Duration | Timing | Fee
- Note: "Contact us for current fee structure"

**Faculty for this Course:**
- 2–3 teacher cards (placeholder)

**Topper from this Course:**
- 1–2 result cards

**CTA Section:**
- Enquiry form (same as homepage)

---

### Course 1: Foundation (5th–10th)
```
Tagline: Build the base that wins the race.
Subjects: Mathematics, Science, English, Social Studies
Features: Concept Building, Olympiad Prep, Board Excellence, Regular Tests
Target: Students of Grade 5 to Grade 10
```

### Course 2: 11th–12th Science
```
Tagline: Master the sciences. Ace the boards.
Subjects: Physics, Chemistry, Biology / Mathematics
Features: CBSE + GSEB aligned, Board + Competitive, Weekly Tests, Doubt Sessions
Target: Students entering or in Grades 11–12 (Science)
```

### Course 3: 11th–12th Commerce
```
Tagline: Commerce made clear. Results made certain.
Subjects: Accounts, Economics, Business Studies, Statistics
Features: Board Excellence, Competitive Prep, Regular Assessments
Target: Students entering or in Grades 11–12 (Commerce)
```

### Course 4: JEE Main & Advanced
```
Tagline: From classroom to IIT — your journey starts here.
Subjects: Physics, Chemistry, Mathematics
Features: 2-Year / 1-Year Programs, Daily Problem Solving, Mock Tests, Rank Predictor, IITian Mentors
Target: Students after 10th aiming for IIT/NIT
```

### Course 5: NEET UG
```
Tagline: Biology-first. AIIMS-ready. Results-proven.
Subjects: Physics, Chemistry, Biology
Features: Biology Focus, AIIMS-Level Questions, Crash Course, Anatomy Diagrams
Target: Students after 10th aiming for Medical colleges
```

### Course 6: GUJCET
```
Tagline: Gujarat's toughest exam. SSI's simplest path.
Subjects: Physics, Chemistry, Mathematics/Biology
Features: Gujarat Pattern MCQs, PYQ Practice, Score Strategy Sessions
Target: Students appearing for GUJCET (Gujarat Common Entrance Test)
```

---

## 📄 PAGE 3: ABOUT US

### Section 1 — About SSI
**Heading:** `About **Shree Sai Institute**`

**Content (Placeholder — replace with real content):**
Shree Sai Institute (SSI) was established in 2010 with a single mission — to provide world-class coaching to students of Ahmedabad at affordable fees. Over the past 16+ years, we have transformed thousands of students into confident, capable rankers in JEE, NEET, GUJCET, and Board examinations.

Our approach is simple: concept-first learning, rigorous practice, and personal mentoring. We believe every student has the potential to excel — they just need the right guidance.

**Stats Row (same as homepage — animated):**
16+ Years | 11,000+ Students | 1,000+ Selections | 98% Result Ratio

---

### Section 2 — Our Mission & Vision
**Two Cards Side by Side:**

```
🎯 Our Mission
To empower every student with the knowledge, skills, and confidence to crack India's most competitive examinations — through expert teaching, personal attention, and a results-driven approach.

👁️ Our Vision
To be Gujarat's most trusted and result-oriented coaching institute — where every student who walks in, walks out as a ranker.
```

---

### Section 3 — About the Founder
**Layout:** Photo left (circular placeholder), content right

```
[Founder Photo Placeholder]

Founder & Director
[Founder Name — Placeholder]
M.Tech | 20+ Years Experience

[Founder Bio Placeholder]
"A visionary educator with over two decades of experience in competitive exam coaching. [Founder Name] started SSI with the belief that quality education should be accessible to all students. Under their leadership, SSI has grown from a small classroom to Ahmedabad's most trusted coaching institute with 11,000+ students trained."

[Quote in gold italic:]
"We don't just teach subjects — we build champions."
```

---

### Section 4 — Team of Experts
**Heading:** `Expert Faculty **Profiles**`
**Subtext:** Well experienced team of Engineers & Highly Qualified Professionals.

**Faculty Grid (4 cards per row, 2 on tablet, 1 on mobile):**

```
Faculty Card 1:
[Photo Placeholder]
S.J. Maurya
Physics
15+ Years Experience (M.Tech.)
[ PHYSICS ]

Faculty Card 2:
[Photo Placeholder]
Manish Sir
Chemistry
16+ Years Experience (M.Tech.)
[ Chemistry ]

Faculty Card 3:
[Photo Placeholder]
Krunal Somani
Mathematics
22+ Years Experience (M.Sc., B.Ed.)
[ Mathematics ]

Faculty Card 4:
[Photo Placeholder]
Vikas Shukla
Mathematics
9+ Years Experience (B.Tech.)
[ Mathematics ]

Faculty Card 5:
[Photo Placeholder]
[Faculty Name — Placeholder]
Biology
[X]+ Years Experience
[ Biology ]

Faculty Card 6:
[Photo Placeholder]
[Faculty Name — Placeholder]
[Subject]
[X]+ Years Experience
[ Subject ]
```

**Card Style:**
- Circular photo
- Name bold white
- Subject in gold
- Experience in subtle white
- Subject tag pill at bottom

---

## 📄 PAGE 4: RESULTS PAGE

### Section 1 — Results Hero
**Heading:** `Our **Results Speak**`
**Subtext:** Year after year, SSI students crack India's most competitive exams. Here is proof.

**Filter Tabs:**
```
[ All ] [ JEE ] [ NEET ] [ GUJCET ] [ Boards 12th Sci ] [ Boards 12th Comm ]
```

---

### Section 2 — 12th Science 2026 Toppers
**Heading:** `12th Science — **2026**`

**Topper Cards Grid (same style as homepage):**
```
Dhruv Modi — 99.41 Percentile — 1st Madhav
Yuvraj Shekhawat — 99.21 Percentile — 1st Shardaba
Jiya Panchal — 97.18 Percentile
Pratham Panchal — 96.29 Percentile
Yug Patel — 91.91 Percentile
Minakshi Sisodiya — [Score]
[+ More Placeholder Cards]
```

---

### Section 3 — JEE Results
**Heading:** `JEE — **2026**`
```
Ayush Patel — AIR 337 (Gen. EWS) | 98 Percentile JEE Main
[More Placeholder Cards]
```

---

### Section 4 — NEET Results
**Heading:** `NEET UG — **2026**`
```
[Placeholder Cards — replace with real data]
```

---

### Section 5 — GUJCET Results
**Heading:** `GUJCET — **2026**`
```
[Placeholder Cards — replace with real data]
```

---

### Section 6 — Year-wise Summary Table
```
Year | JEE Selections | NEET Selections | GUJCET Top Scorers | Board Toppers
2026 | [X]            | [X]             | [X]                | [X]
2025 | [X]            | [X]             | [X]                | [X]
2024 | [X]            | [X]             | [X]                | [X]
```
(Placeholder data — replace with real)

---

## 📱 FLOATING ELEMENTS (ALWAYS VISIBLE)

### WhatsApp Floating Button
```
Position: Fixed, bottom-right corner
Style: Green circle (#25D366), WhatsApp icon
Animation: Subtle bounce/pulse every 3 seconds
On hover: Expand to show "Chat with Us"
Link: https://wa.me/919033655556
```

### Scroll to Top Button
```
Position: Fixed, bottom-right (above WhatsApp)
Appears: After scrolling 400px down
Style: Blue circle with up arrow
```

---

## 📱 MOBILE RESPONSIVENESS REQUIREMENTS

- **Navbar:** Hamburger menu → full slide-in drawer with all links
- **Hero:** Text scales down, buttons stack vertically
- **Stats:** 2x2 grid
- **Courses:** Single column cards
- **Toppers:** Horizontal scroll
- **Testimonials:** Single card with swipe gesture
- **Gallery:** 2-column grid
- **Enquiry:** Form stacks above contact info
- **Footer:** Single column stack
- **All touch targets:** Minimum 44px height
- **Font sizes:** Scale appropriately (use clamp() or responsive units)
- **Test breakpoints:** 375px (mobile), 768px (tablet), 1280px (desktop)

---

## ⚙️ TECHNICAL REQUIREMENTS

- **Framework:** HTML5 + CSS3 + Vanilla JavaScript (or React if supported)
- **Fonts:** Google Fonts — Montserrat + Poppins
- **Icons:** Use Unicode emojis OR Lucide/Heroicons (SVG)
- **Animations:** CSS animations + Intersection Observer API for scroll triggers
- **Countdown Timer:** JavaScript — counts down to June 30, 2026
- **Stats Counter:** JavaScript — counts up on scroll into view
- **Form:** Frontend only (no backend needed — show success message on submit)
- **Performance:** Lazy load images, optimize animations for 60fps
- **SEO:** Proper meta tags, title tags per page, alt attributes
- **Accessibility:** ARIA labels, keyboard navigation, sufficient color contrast

---

## 📝 CONTENT PLACEHOLDERS NOTE

The following are placeholder content — **replace with real data later:**
- Founder name and bio
- Some faculty names and photos
- NEET and GUJCET result data
- Gallery photos (use dark placeholder cards)
- Some student testimonials

**Real content already provided (use as-is):**
- All course names and descriptions
- Faculty: S.J. Maurya, Manish Sir, Krunal Somani, Vikas Shukla
- Toppers: Dhruv Modi, Yuvraj Shekhawat, Jiya Panchal, Pratham Panchal, Yug Patel
- Both branch addresses and phone numbers
- Testimonial from Ayush Patel (JEE Advanced 2026 — AIR 337)
- Stats: 16+ years, 11,000+ students, 1,000+ selections, 98% result ratio

---

## 🚀 FINAL CHECKLIST FOR ANTIGRAVITY

Please ensure the final output includes:
- [ ] All 4 pages built and linked
- [ ] Fully mobile responsive
- [ ] All animations working
- [ ] WhatsApp floating button
- [ ] Countdown timer to June 30, 2026
- [ ] Stats counter animation
- [ ] Smooth scroll navigation
- [ ] Enquiry form with validation
- [ ] Sticky navbar with scroll effect
- [ ] Course dropdown in navbar
- [ ] Footer with all links and info
- [ ] Professional typography (Montserrat + Poppins)
- [ ] Consistent color palette throughout
- [ ] Hover effects on all interactive elements

---

*Built for: Shree Sai Institute — Centre of Excellence, Ahmedabad*
*Website: shreesaiinstitute.in*
*© 2026 Shree Sai Institute. All rights reserved.*
