import CustomCard from "./Card";

const CardSection = () => {

  return(
    <section className="flex flex-col gap-10 px-5 sm:px-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <CustomCard imageURL="/assets/camera.jpg" />
        <CustomCard imageURL="/assets/cellphone.jpg" />
        <CustomCard imageURL="/assets/Cpu.jpg" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <CustomCard imageURL="/assets/camera.jpg" />
        <CustomCard imageURL="/assets/cellphone.jpg" />
        <CustomCard imageURL="/assets/Cpu.jpg" />
      </div>
    </section>
  )
}

export default CardSection;
