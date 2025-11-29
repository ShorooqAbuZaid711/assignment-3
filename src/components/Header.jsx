import React from "react";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-content">
        {/* Greeting + Theme Toggle */}
        <div className="header-top-row">
          <p className="header-greeting">Good night!</p>
          <ThemeToggle />
        </div>

        {/* Name */}
        <h1 className="header-title">
          <span className="name-gradient">Shorooq</span> Abu Zaid
        </h1>

        {/* Subtitle */}
        <p className="header-subtitle">
          Future Software Engineer focused on building clean, intentional
          experiences with code.
        </p>

        {/* Navigation */}
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