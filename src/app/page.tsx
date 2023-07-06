import AboutSection from "@/components/HomePage/AboutSection";
import DescriptionSection from "@/components/HomePage/DescriptionSection";
import ProductsSection from "@/components/HomePage/ProductsSection";
import WelcomeSection from "@/components/HomePage/WelcomeSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col gap-40">
      <section className="flex flex-col bg-red-600 h-[600px] sm:h-[700px]" id="homepage-welcome">
        <Navbar />
        <WelcomeSection />
      </section>
      <DescriptionSection />
      <AboutSection />
      <ProductsSection />
    </main>
  )
}
