import Image from "next/image";

const ProductsSection = () => {

  return(
    <section className="flex flex-col md:flex-row items-center w-full gap-10 px-5 md:px-20">
      <div className="flex flex-col w-full sm:w-4/6 md:w-2/6 items-center md:items-end">
        <Image
          src="/assets/skills.png"
          alt="why-us-company"
          width={330}
          height={330}
          className="w-auto"
        />
      </div>
      <div className="flex flex-col w-full sm:w-4/6 gap-5 items-center md:items-end">
        <h1 className="text-3xl sm:text-5xl font-bold text-center md:text-end">Products</h1>
        <p className="text-center md:text-end">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta delectus, consequuntur, quisquam dolor voluptates officiis qui atque sapiente, autem vitae vero facere? Ipsa, perspiciatis dolor hic odit modi ipsam natus?
        </p>
      </div>
    </section>
  )
}

export default ProductsSection;
