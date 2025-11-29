import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SearchBar from "../components/SearchBar";

import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

export default function Projects() {
  const [level, setLevel] = useState("All");
  const [query, setQuery] = useState("");

  const projectData = [
    {
      title: "Employee Bonus Prediction Model",
      category: "ML",
      tagline: "HR Analytics",
      pills: ["Advanced", "Data Science", "2024"],
      level: "Advanced",
      image: project1,
    },
    {
      title: "Opportune – Student Volunteering & Internship Finder",
      category: "Full-Stack",
      tagline: "Student Engagement",
      pills: ["Intermediate", "Web App", "2023"],
      level: "Intermediate",
      image: project2,
    },
    {
      title: "Financial Management Toolkit for Small Businesses",
      category: "FinTech",
      tagline: "Analytics Suite",
      pills: ["Advanced", "Business Tools", "2024"],
      level: "Advanced",
      image: project3,
    },
  ];

  const filtered = projectData
    .filter((p) => level === "All" || p.level === level)
    .filter((p) => {
      const q = query.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });

  return (
    <div className="page-wrapper">
      <div className="section">
        <div className="section-header">
          <h2>Projects</h2>
          <p className="section-subtitle">
            A collection of selected work — machine learning, full-stack
            development, and financial analytics tools.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar query={query} onQueryChange={setQuery} />

        {/* Level Filter */}
        <div className="filter-row">
          <label>Level:</label>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="All">All</option>
            <option value="Advanced">Advanced</option>
            <option value="Intermediate">Intermediate</option>
          </select>
        </div>

        {/* Render Cards */}
        {filtered.map((proj, i) => (
          <ProjectCard
            key={i}
            title={proj.title}
            category={proj.category}
            tagline={proj.tagline}
            pills={proj.pills}
            image={proj.image}
          />
        ))}
      </div>
    </div>
  );
}