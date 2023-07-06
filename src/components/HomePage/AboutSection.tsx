import Image from "next/image";

const AboutSection = () => {

  return(
    <section className="flex items-center w-full gap-10 px-20">
      <div className="flex flex-col w-4/6 gap-5">
        <h1 className="text-3xl sm:text-5xl font-bold">About Us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta delectus, consequuntur, quisquam dolor voluptates officiis qui atque sapiente, autem vitae vero facere? Ipsa, perspiciatis dolor hic odit modi ipsam natus?
        </p>
      </div>
      <div className="flex flex-col w-2/6 items-end">
        <Image
          src="/assets/why-us.png"
          alt="why-us-company"
          width={330}
          height={330}
        />
      </div>
    </section>
  )
}

export default AboutSection;
