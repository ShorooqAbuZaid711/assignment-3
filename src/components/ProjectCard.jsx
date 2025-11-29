import React from "react";

export default function ProjectCard({ title, category, tagline, pills, image }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{title}</h3>
        <p className="project-subtitle">
          {category} · {tagline}
        </p>
      </div>

      <div className="pill-row">
        {pills.map((p, i) => (
          <span key={i} className="pill">
            {p}
          </span>
        ))}
      </div>

      <div className="project-body">
        <img src={image} alt={title} className="project-image" />
      </div>
    </div>
  );
}