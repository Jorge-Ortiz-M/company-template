import FormSection from "@/components/ContactPage/FormSection";
import WelcomeSection from "@/components/ContactPage/WelcomeSection";
import CustomFooter from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ContactPage = () => {

  return(
    <main className="flex flex-col gap-40">
      <section className="flex flex-col h-[600px] sm:h-[700px]" id="contact-welcome">
        <Navbar />
        <WelcomeSection />
      </section>
      <FormSection />
      <CustomFooter />
    </main>
  )
}

export default ContactPage;
