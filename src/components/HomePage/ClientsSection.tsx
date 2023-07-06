import ClientCard from "./ClientsSection/ClientCard";

const ClientsSection = () => {

  return(
    <section className="flex flex-col items-center w-full gap-10 px-5 md:px-20">
      <h1 className="text-3xl sm:text-5xl font-bold">Our Clients</h1>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta delectus, consequuntur, <br />
        quisquam dolor voluptates officiis qui atque sapiente, autem vitae vero facere? Ipsa, perspiciatis dolor hic odit modi ipsam natus?
      </p>
      <div className="flex flex-col items-center gap-10">
        <ClientCard
          name="José Peréz"
          imageURL="/assets/joseph.jpg"
          comments="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta delectus, consequuntur"
          date="01/01/2023"
        />
        <ClientCard
          name="Maria Rodríguez"
          imageURL="/assets/maria.jpg"
          comments="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta delectus, consequuntur"
          date="01/01/2023"
        />
        <ClientCard
          name="Belinda López"
          imageURL="/assets/belinda.jpg"
          comments="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta delectus, consequuntur"
          date="01/01/2023"
        />
      </div>
    </section>
  )
}

export default ClientsSection;
