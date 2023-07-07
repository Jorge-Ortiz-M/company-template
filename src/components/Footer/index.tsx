import FooterLink from "./FooterLink";

const CustomFooter = () => {

  return(
    <footer className="bg-slate-100 p-20 text-black flex flex-col items-center justify-center gap-10">
      <ul className="flex items-center gap-10">
        <FooterLink title="Home" urlPath="/" />
        <FooterLink title="Contact" urlPath="/contact" />
        <FooterLink title="Products" urlPath="/products" />
      </ul>
      <p className="text-center font-bold">
        Copyrights @ 2022 | Yorch Dev's
      </p>
    </footer>
  )
}

export default CustomFooter;
