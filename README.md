# 📄 ATS-Optimized HTML Resume

A pixel-perfect, highly accessible, and ATS-friendly resume built with strict semantic HTML5 and modern CSS.

This project is a single-file resume designed to perfectly balance human readability (beautiful, scannable UI) with machine parsing (Applicant Tracking Systems, Screen Readers, and Search Engines).

---

## ✨ Key Features & Technical Highlights

### 🤖 100% ATS-Friendly (Applicant Tracking Systems)

- **Linear DOM Order:**  
  The HTML structure perfectly matches the visual reading order. No CSS Grid or floats are used to break the content flow, ensuring parsers extract the text in perfect chronological order without mixing columns.

- **Semantic HTML5:**  
  Strict use of `<header>`, `<main>`, `<section>`, `<article>`, and logical heading hierarchy (`<h1>` to `<h4>`).

---

### ♿ Accessibility (WCAG & a11y)

- **High Contrast:**  
  Color palette designed to meet WCAG AA/AAA contrast ratios.

- **Screen Reader Optimized:**  
  Includes `aria-labelledby`, descriptive `aria-label` tags for external links, and structured lists.

- **Keyboard Navigation:**  
  Clear `:focus-visible` states for all interactive elements.

---

### 🔍 SEO & Microdata

- **Schema.org Integration:**  
  Uses `itemscope`, `itemtype="https://schema.org/Person"`, and various `itemprop` attributes to provide structured data to search engines.

- **Meta & Open Graph:**  
  Fully equipped with descriptions, keywords, and OG tags for rich link previews on social media platforms like LinkedIn or Telegram.

---

### 💅 Modern CSS Architecture

- **Fluid Typography:**  
  Uses CSS `clamp()` for smooth, responsive font scaling across all device sizes without hard media queries.

- **Optical Sizing & Legibility:**  
  Leverages variable fonts (`font-optical-sizing: auto`) and modern text rendering properties.

- **Modern Typographic Features:**  
  Uses `text-wrap: balance` for headings and `text-wrap: pretty` for paragraphs to prevent typographic orphans.

- **Print-Ready:**  
  Includes a dedicated `@media print` stylesheet:
  - Hides underlines
  - Forces true black text
  - Appends URLs to links automatically when printing to PDF

---

## 🛠️ Tech Stack

- **HTML5** (Vanilla, Semantic, Microdata)
- **CSS3** (Vanilla, Custom Properties, Flexbox, Fluid Typography)

---

## 🚀 How to Use

### 1. Clone the repository

```bash
git clone https://github.com/Iryna-Vyshniak/simple_cv.git
```

### 2. Add your photo

Place your image named `profile_photo.jpg` in the root directory.

### 3. Open in browser

Open `index.html` in any modern web browser.

---

## 🖨️ Exporting to PDF

To generate a perfect PDF version of this resume:

- Open `index.html` in **Chrome** or **Edge**
- Press `Ctrl + P` (or `Cmd + P` on Mac)
- Set destination to **"Save as PDF"**

**Ensure:**

- ✅ "Background graphics" is checked (optional)
- ✅ Margins are set to **Default** or **None**

---

## 👨‍💻 Author

**Iryna Vyshniak**  
Junior Frontend Developer
