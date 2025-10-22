# 👤 Multi-Page Profile Application (Stage 0 & Stage 1)

A fully responsive, accessible multi-page web application featuring a profile card, contact form with validation, and reflective about page. Built with semantic HTML, modern CSS, and vanilla JavaScript.

---

## ✨ Features

### Stage 0 - Profile Card

* **Accessible Markup:** Semantic HTML5 elements (`<article>`, `<figure>`, `<nav>`, `<section>`)
* **Fully Responsive Layout:** Mobile-first design using Flexbox and Grid
* **Real-time Clock:** Displays current time in milliseconds using `Date.now()`
* **Social Links:** External links with proper security attributes

### Stage 1 - New Pages

* **Contact Form:** Full client-side validation with detailed error messages
* **About Page:** Personal reflections on goals, challenges, and aspirations
* **Multi-page Navigation:** Fixed navigation bar across all pages
* **Form Validation:** Real-time validation with accessibility support
* **Success Feedback:** Clear visual confirmation after successful form submission

---

## 🗂️ Project Structure

```
.
├── index.html          # Profile card (home page)
├── contact.html        # Contact form page
├── about.html          # About me/reflections page
├── index.css           # Global and profile card styles
├── contact.css         # Contact page specific styles
├── about.css           # About page specific styles
├── script.js           # Profile card time display logic
├── contact.js          # Form validation logic
└── README.md           # This file
```

---

## 🎯 Technical Implementation

### Contact Form Validation

#### Required Fields & Test IDs

| Field | Test ID | Validation Rules |
|-------|---------|------------------|
| Full Name | `test-contact-name` | Required, cannot be empty |
| Email | `test-contact-email` | Required, valid email format (<name@example.com>) |
| Subject | `test-contact-subject` | Required, cannot be empty |
| Message | `test-contact-message` | Required, minimum 10 characters |
| Submit Button | `test-contact-submit` | Triggers validation |
| Error Messages | `test-contact-error-{field}` | Individual error display for each field |
| Success Message | `test-contact-success` | Shown after successful submission |

#### Validation Features

- **Real-time validation** on blur and input events
* **Accessible error messages** linked with `aria-describedby`
* **Visual indicators** for valid/invalid states
* **Keyboard navigation** fully supported
* **Focus management** - automatically focuses first invalid field

### About Page Sections

#### Required Sections & Test IDs

| Section | Test ID | Content |
|---------|---------|---------|
| Main Container | `test-about-page` | Wraps entire about page content |
| Bio | `test-about-bio` | Personal introduction and background |
| Goals | `test-about-goals` | Program objectives and aspirations |
| Confidence Areas | `test-about-confidence` | Areas of growth and learning |
| Future Note | `test-about-future-note` | Reflective message to future self |
| Extra Thoughts | `test-about-extra` | Additional reflections and closing thoughts |

---

## ♿ Accessibility Features

### ARIA & Semantic HTML

- All form inputs linked to labels with `for` attribute
* Error messages associated with inputs via `aria-describedby`
* Invalid states indicated with `aria-invalid`
* Live regions (`aria-live`) for dynamic error and success messages
* Proper heading hierarchy (`<h1>`, `<h2>`, `<h3>`)
* Semantic landmarks (`<main>`, `<nav>`, `<section>`, `<article>`)

### Keyboard Navigation

- All interactive elements are keyboard accessible
* Tab order follows logical document flow
* Focus indicators visible on all interactive elements
* Form submission works with Enter key
* Skip to content via semantic structure

### Screen Reader Support

- Descriptive alt text for images
* ARIA labels for navigation regions
* Success/error announcements via live regions
* Form field requirements clearly indicated

---

## 📱 Responsive Design

### Breakpoints

- **Mobile:** < 480px (stacked layout, centered content)
* **Tablet:** 480px - 720px (optimized spacing)
* **Desktop:** 720px+ (side-by-side layouts, expanded grid)
* **Large Desktop:** 1000px+ (multi-column profile card)

### Layout Techniques

- Mobile-first approach
* CSS Grid for complex layouts
* Flexbox for component arrangement
* Fluid typography with responsive font sizes
* Flexible images and media

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
* No build tools or dependencies required

### Local Development

1. **Clone the repository:**

   ```bash
    git clone https://github.com/Vixs101/hng13-stage-0-frontend
    cd hng13-stage-0-frontend
   ```

2. **Open in browser:**
   * Simply open `index.html` in your browser
   * Or use a local server (recommended):

     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```

3. **Navigate the app:**
   * Home: `index.html`
   * Contact: `contact.html`
   * About: `about.html`

---

## 🧪 Testing Guide

### Manual Testing Checklist

#### Profile Card (Stage 0)

- [ ] Avatar image displays correctly
* [ ] Time updates every second in milliseconds
* [ ] Social links open in new tabs
* [ ] All `data-testid` attributes present
* [ ] Responsive on mobile, tablet, and desktop
* [ ] Keyboard navigable

#### Contact Form (Stage 1)

- [ ] All fields are required and validated
* [ ] Email validation accepts valid emails only
* [ ] Message requires minimum 10 characters
* [ ] Error messages display below fields
* [ ] Success message appears after valid submission
* [ ] Form resets after successful submission
* [ ] Validation works on blur and input
* [ ] First invalid field receives focus on submit
* [ ] All `data-testid` attributes present

#### About Page (Stage 1)

- [ ] All sections present with correct test IDs
* [ ] Content is well-structured with headings
* [ ] Responsive layout on all devices
* [ ] Semantic HTML used throughout

#### Navigation

- [ ] Navigation bar fixed at top
* [ ] Active page indicator works
* [ ] Links work correctly between pages
* [ ] Navigation accessible via keyboard

---

## 🎨 Design Choices

### Visual Theme

- **Dark mode design** with slate blue gradient backgrounds
* **Glassmorphism effects** with backdrop blur and transparency
* **Blue accent color** (#60a5fa) for interactive elements
* **Smooth animations** for hover states and transitions
* **Card-based layouts** with subtle shadows and borders

### Typography

- System font stack for optimal performance
* Responsive font sizes using rem units
* Proper line height for readability
* Clear visual hierarchy

---

## 📝 Code Quality

### Best Practices

- **Semantic HTML5** throughout
* **BEM-inspired** class naming conventions
* **Modular CSS** with separate stylesheets per page
* **Vanilla JavaScript** - no frameworks required
* **Comprehensive comments** in code
* **Consistent formatting** and indentation
* **No console errors** or warnings

### Performance

- Minimal JavaScript for fast load times
* Optimized CSS with no redundant rules
* Efficient selectors and specificity
* No external dependencies

---

## ✅ Acceptance Criteria Checklist

### Stage 0

- [x] Profile card with all required elements
* [x] Real-time millisecond clock display
* [x] Semantic HTML structure
* [x] All required `data-testid` attributes
* [x] Fully responsive design
* [x] Accessible markup

### Stage 1 - Contact Page

- [x] All required form fields with correct test IDs
* [x] Validation prevents invalid submissions
* [x] Success message shows only after valid submission
* [x] Error messages for each field
* [x] Labels linked to inputs with `for`
* [x] ARIA associations for errors
* [x] Fully keyboard accessible

### Stage 1 - About Page

- [x] All required sections with correct test IDs
* [x] Semantic HTML (main, section, headings)
* [x] Proper document structure
* [x] Responsive layout

### General Requirements

- [x] Semantic HTML throughout
* [x] Accessible (labels, alt text, ARIA)
* [x] Fully responsive (mobile, tablet, desktop)
* [x] Keyboard navigable
* [x] Clean, modular code
* [x] Comprehensive README

---

## 👨‍💻 Author

**Elijah Victor**
* Twitter: [@vixs101](https://x.com/vixs101)
* GitHub: [@Vixs101](https://github.com/Vixs101)
* LinkedIn: [vixs101](https://www.linkedin.com/in/vixs101/)

---

## 📄 License

This project is part of the HNG internship and is available for educational purposes.

---

**Last Updated:** October 2025
