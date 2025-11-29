import { useEffect, useState } from "react";

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | error

  useEffect(() => {
    async function fetchRepos() {
      try {
        setStatus("loading");
        const res = await fetch(
          "https://api.github.com/users/ShorooqAbuZaid711/repos?sort=updated"
        );
        if (!res.ok) throw new Error("GitHub API error");
        const data = await res.json();
        setRepos(data);
        setStatus("idle");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    }
    fetchRepos();
  }, []);

  return (
    <section className="section">
      <div className="section-header">
        <h2>Latest GitHub Repositories</h2>
        <p className="section-subtitle">
          Live data fetched from the GitHub API.
        </p>
      </div>

      {status === "loading" && <p>Loading repositories…</p>}
      {status === "error" && (
        <p className="error-text">
          Couldn’t load repositories right now. Please try again later.
        </p>
      )}

      <div className="github-grid">
        {repos.slice(0, 6).map((repo) => (
          <article key={repo.id} className="project-card github-card">
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>
            <div className="github-meta">
              {repo.language && <span className="pill">{repo.language}</span>}
              <span className="pill">★ {repo.stargazers_count}</span>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}