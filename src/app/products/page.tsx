import CustomFooter from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CardSection from "@/components/ProductsPage/CardSection";
import DescriptionSection from "@/components/ProductsPage/DescriptionSection";
import WelcomeSection from "@/components/ProductsPage/WelcomeSection";

const ProductsPage = () => {

  return(
    <main className="flex flex-col gap-40">
      <section className="flex flex-col h-[600px] sm:h-[700px]" id="products-welcome">
        <Navbar />
        <WelcomeSection />
      </section>
      <DescriptionSection />
      <CardSection />
      <CustomFooter />
    </main>
  )
}

export default ProductsPage;
