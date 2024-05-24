import { ContactForm } from "../../features/contact_section/form";

export const ContactSection = () => {
  return (
    <div className="flex flex-col items-center gap-12 mb-28 py-12">
      <div className="flex flex-col items-center">
        <h1>Me contacter</h1>
        <h2>Voir mes réseaux</h2>
      </div>
      <div className="flex flex-col items-center">
        <ContactForm />
      </div>
    </div>
  );
};
