import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Contact</h2>
        <p className="section-subtitle">
          Have an idea, project, or question? I’d love to hear from you.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}