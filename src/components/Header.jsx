import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";

export default function Header() {
  function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }

  const greeting = getGreeting();

  return (
    <header className="header-wrapper">
      <div className="header-content">

        <div className="header-top-row">
          <p className="header-greeting">{greeting}!</p>
          <ThemeToggle />
        </div>

        <h1 className="header-title">
          <span className="name-gradient">Shorooq</span> Abu Zaid
        </h1>

        <p className="header-subtitle">
          Future Software Engineer focused on building clean, intentional
          experiences with code.
        </p>

        <nav className="header-nav">
          <NavLink to="/">Home</NavLink>
          <span>•</span>
          <NavLink to="/about">About</NavLink>
          <span>•</span>
          <NavLink to="/projects">Projects</NavLink>
          <span>•</span>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

      </div>
    </header>
  );
}
