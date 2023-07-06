import WelcomeSection from "@/components/HomePage/WelcomeSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col bg-red-600 h-[600px] sm:h-[700px]" id="homepage-welcome">
        <Navbar />
        <WelcomeSection />
      </section>
    </main>
  )
}
