# Technical Documentation

## Project Overview

**Project Name:** Personal Portfolio Web Application  
**Assignment:** SWE363 – Assignment 4 (final version)  
**Purpose:** Provide a responsive, modern portfolio built with React, showcasing projects, GitHub activity, and a contact form.

---

## 1. File Structure

```text
assignment-4/
├── README.md
├── index.html
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── ContactForm.jsx
│   │   ├── GitHubSection.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── ThemeToggle.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── assets/
│   │   └── images/
│   └── styles/
│       ├── global.css
│       ├── cards.css
│       └── theme.css
├── presentation/
│   ├── slides.pdf
│   └── demo-video.mp4
├── package.json
├── vite.config.js
└── .gitignore
```

---

2. Component & Page Structure
### Layout & Header
#### Header
- Displays greeting based on current time (Good morning / afternoon / evening).
- Shows name and subtitle line.
- Contains navigation links using NavLink from React Router.
- Includes the light/dark mode toggle.
#### Layout
- Wraps pages with the header and footer.
- Provides a consistent page-wrapper container for main content.
#### Pages
**Home Page**
- Displays the GitHub section that fetches live repositories from the GitHub API.
**About Page**
- Short description of background, skills, and interests.
**Projects Page**
- Contains:
    - Search bar (live filtering)
    - Level filter dropdown
    - Project cards with title, category, image, and pill tags
- Filtering logic:
    - By level (Advanced, Intermediate, All)
    - By search query (title, category, tagline)
**Contact Page**
- Interactive form with floating labels.
- Validation for:
    - Name (non-empty)
    - Email format
    - Message field
- Animated feedback using Framer Motion.
**Footer**
- Email link
- GitHub profile link
- Copyright
- Theme-aware (light/dark) styling

---

3. Styling (CSS)
**Global Styles** (```global.css```)
- Defines layout (page-wrapper), basic typography, sections, inputs, and buttons.
- Implements theme-aware colors using CSS variables.
- Provides styling for:
    - Sections and headers
    - Contact form (glassmorphism card)
    - Floating label inputs
    - Header and footer
**Theme System** (```theme.css```)
- Uses CSS custom properties attached to :root and `[data-theme="light"]`.
- Dark mode:
    - Radial gradient background
    - Muted text colors
- Light mode:
    - Soft blue/white background similar to iOS/macOS
- Variables include:
    - `--bg`, `--bg-solid`, `--text`, `--accent`, etc.
    - Layout spacing and font sizes.
**Project Cards** (`cards.css`)
- Glassmorphism effect for project and GitHub cards.
- Hover animation with slight lift.
- Pill tags for technologies, year, level.
- Responsive card layout.
**Responsiveness**
- Flexbox and grid used to adapt layout.
- `clamp()` used for responsive font sizing.
- Tested using browser DevTools for phone / tablet / desktop breakpoints.

---

4. JavaScript / React Logic
**Routing**
- Implemented with React Router.
- Routes defined in App.jsx:
```jsx 
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
```
**Theme Management (Context API)**
- `ThemeContext` provides `theme` and `toggleTheme`.
- Initial theme is loaded from `localStorage` (default `light`).
- On change:
    - Updates `data-theme` attribute on `<html>`.
    - Persists the selection in `localStorage`.
**GitHub API Integration**
- GitHubSection fetches repositories using:
```js fetch("https://api.github.com/users/<your-username>/repos?sort=updated")```
- Handles:
    - Loading state
    - Error state
    - Displaying up to 6 of the latest repositories
- Shows:
    - Name
    - Description
    - Language
    - Star count
    - Link to repository
**Project Filtering Logic**
- Local projectData array in `Projects.jsx`.
- Filters in two steps:
    1. By level (All, Advanced, Intermediate).
    2. By search query (case-insensitive) on title, tagline, or category.
- Result is mapped into `ProjectCard` components.
**Contact Form Logic**
- Controlled inputs managed with `useState`.
- On submit:
    - Check non-empty fields.
    - Validate email using a regex.
    - Show error or success message.
    - Clear fields on success.
- Uses Framer Motion for:
    - Form mount animation.
    - Feedback message transitions.

---

5. Responsive Design Approach
- Layout:
    - page-wrapper with max width.
    - Centered content, flexible padding.
- Header:
    - Scales title and subtitle based on viewport.
    - Navigation fits on a single line on desktop and wraps on smaller screens.
- Cards:
    - Single column on small screens.
    - Comfortable spacing to avoid crowding.
- Typography:
    - Uses clamp() to keep headings and body text readable on all devices.

---

6. Key Considerations
**Accessibility**
- Semantic HTML elements used where possible (`header`, `main`, `section`, `footer`).
- Labels for inputs and clear focus states.
- Sufficient color contrast in both light and dark themes.
**Performance**
- Minimal dependencies (React, React Router, Framer Motion).
- GitHub API called once on component mount.
- Images optimized for web usage.
- CSS variables reduce repaint cost when toggling themes.
**Maintainability**
- Component-based architecture with clear responsibilities.
- Separation of concerns:
    - Components, pages, context, and styles in separate folders.
- Reusable base styles for cards and forms.

---

7. Deployment Notes (Assignment 4)
- Built with Vite’s standard build process: `npm run build`.
- Output is a static bundle placed in the dist/ directory.
- Can be deployed on:
    - GitHub Pages
    - Netlify
    - Vercel
- The live link (if deployed) is referenced in the main `README.md`.

---

8. Known Limitations
- Contact form is client-side only (no backend).
- GitHub API is unauthenticated; heavy usage may hit rate limits.
- No localization (English only).