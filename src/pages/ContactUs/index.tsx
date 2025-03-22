import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <ContactInfo />
        </div>
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
