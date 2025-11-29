import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="page-wrapper">{children}</main>
      <footer className="footer">
        <a href="mailto:abuzaidshorooq@gmail.com">Email</a> ·{" "}
        <a
          href="https://github.com/ShorooqAbuZaid711"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <br />
        <span>
          © {new Date().getFullYear()} Shorooq Abu Zaid. All rights reserved.
        </span>
      </footer>
    </>
  );
}