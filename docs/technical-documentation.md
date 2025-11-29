# Technical Documentation

## Project Overview
**Project Name**: Personal Portfolio Web Application
**Purpose**: Provide a responsive, modern portfolio built with React, showcasing projects, GitHub activity, and a contact form.

---

1. File Structure

assignment-3/
├── README.md
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
├── .gitignore
├── package.json
└── vite.config.js

---

2. Component & Page Structure
**Header**
- Displays greeting, name, subtitle.
- Includes navigation built with NavLink.
- Contains light/dark mode toggle.
**Home Page**
- Displays the GitHub API section fetching live repositories.
**About Page**
- Short description of background, skills, and interests.
**Projects Page**
Contains:
    - Search bar (live filtering)
    - Level filter dropdown
    - Project cards with title, category, image, and pill tags
**Contact Page**
- Interactive form with floating labels
- Validation for:
    - Name
    - Email format
    - Message field
**Footer**
- Email link
- GitHub link
- © Copyright
- Fully theme-adaptive (light/dark)

---

3. Styling (CSS)
**Global Styles** (global.css)
- Defines layout (page-wrapper), sections, inputs, buttons.
- Implements theme-aware colors using CSS variables.
**Theme System** (theme.css)
- Light mode → Apple-inspired soft whites
- Dark mode → iOS-style deep blues
- Variables include:
    - --bg
    - --text
    - --accent
    - layout spacing
- Applied using data-theme="light" or "dark".
**Project Cards** (cards.css)
- Glassmorphism effect
- Hover animation
- Dynamic pills and image layout
- Light/dark variants
**Responsiveness**
- Flexbox/grid for layout
- Works across desktop, tablet, mobile
- Header and cards scale with clamp() typography

---

4. JavaScript / React Logic
**Theme Management (Context API)**
- Stores theme in React Context
- Persists in localStorage
- Updates <html data-theme="..."> dynamically
**GitHub API Integration**
Fetches repositories using:
```js
fetch("https://api.github.com/users/ShorooqAbuZaid711/repos?sort=updated")
```
Handles:
- Loading state
- Error state
- Displaying repo cards
**Project Filtering Logic**
Filters by:
- Level (Advanced, Intermediate, All)
- Search query
**Contact Form**
- Controlled components using useState
- Validates:
    - Non-empty fields
    - Email pattern
- Animated feedback using Framer Motion
**Routing (React Router)**
Routes defined in App.jsx:
```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
```

---

5. Responsive Design Approach
- Grid layout for GitHub cards
- Flexbox for header and navigation
- clamp() typography for fluid scaling
- Tested using browser DevTools for multiple breakpoints

---

6. Key Considerations
- Accessibility
    - Semantic HTML
    - Clear focus states
    - Proper label associations
- Performance
    - Optimized images
    - Limited API calls (runs once on mount)
    - CSS variables for minimal repaint
- Maintainability
    - Component-based architecture
    - Clear separation of concerns (components, pages, styles)

---

7. Known Limitations
- Contact form is client-side only (no backend).
- GitHub API may rate limit unauthenticated requests.