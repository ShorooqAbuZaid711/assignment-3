# 🌟 Personal Portfolio Web Application – Assignment 4

## 📌 Overview

This repository contains my final personal portfolio web application for **SWE363 – Assignment 4**.  
It is a modern, responsive, React-based single-page application that showcases:

- My projects and interests
- Live GitHub activity
- A polished contact form
- A full light/dark theme system

---

## 🧱 Tech Stack

- **Frontend:** React (with Vite)
- **Routing:** React Router
- **State Management:** React Context (for theme)
- **Styling:** Custom CSS (glassmorphism, theme system, responsive layout)
- **Animations:** Framer Motion (contact form feedback)
- **API Integration:** GitHub REST API

---

## 📂 Project Structure

```text
assignment-4/
├── README.md
├── index.html
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
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   ├── slides.pdf
│   └── demo-video.mp4
├── package.json
├── vite.config.js
└── .gitignore
```

---

## 🚀 Running the Project Locally

**Prerequisites**
- Node.js (LTS)
- npm (comes with Node)

1. Clone the repository
    ```bash
    git clone https://github.com/ShorooqAbuZaid711/assignment-4.git
    cd assignment-4
    ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Run development server
    ```bash
    npm run dev
    ```
4. Open in browser
    Vite will print a local URL such as:
    ```bash
    http://localhost:5173/
    ```
    Open it in your browser.
---

## ✨ Features

### UI & Pages
- Header with dynamic greeting (Good morning/afternoon/evening) and navigation.
- Home Page: Shows latest GitHub repositories using the GitHub API.
- About Page: Short bio and focus areas.
- Projects Page:
    - Cards with images, categories, and pill tags.
    - Live search input.
    - Level filter (All / Intermediate / Advanced).
- Contact Page:
    - Floating-label form.
    - Client-side validation for name, email, and message.
    - Animated feedback messages.
### Theme System
- Light/dark mode toggle.
- Theme saved in localStorage.
- CSS variables for colors, typography, spacing.
- Theme applied via ```baah data-theme="light" | "dark"``` on ```bash<html>```.
### GitHub API Integration
- Fetches public repositories from my GitHub account.
- Displays repo name, description, language, and stars.
- Shows loading and error states.

---

## 🧪 Error Handling & Performance
- Graceful error messages for:
    - GitHub API failures
    - Invalid contact form input
- No page reloads; SPA navigation via React Router.
- Limited GitHub API calls (only on mount).
- Responsive layout built with Flexbox and fluid typography.

---

## 🤖 AI Usage Summary

AI tools were used as assistants, not as a replacement for understanding.
Examples:
- Clarifying React / CSS concepts.
- Debugging layout and state issues.
- Improving wording and structure of the documentation.
- Helping refine this README and the AI usage report.
**A detailed log** of all AI tool usage (including prompts, outputs, edits, and reflections) is provided in:
- ```bash docs/ai-usage-report.md```

---

## Documentation
- Technical Documentation: ```bash docs/technical-documentation.md```
- AI Usage Report: ```bash docs/ai-usage-report.md```
- Slides & Demo: ```bash presentation/slides.pdf, presentation/demo-video.mp4```

---

## 🔮 Future Improvements
- Connect the Contact form to a real backend or email service.
- Add more projects with richer content (videos, links, case studies).
- Add basic analytics (page visits, link clicks).
- Improve accessibility further (ARIA attributes, keyboard navigation).

---

## 📜 License
© 2025 Shorooq Abu Zaid. All rights reserved.