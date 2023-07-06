const CustomFooter = () => {

  return(
    <footer className="bg-black p-20 text-white flex flex-col items-center justify-center gap-10">
      <ul className="flex items-center gap-10">
        <li className="text-center font-semibold">Home</li>
        <li className="text-center font-semibold">Contact</li>
        <li className="text-center font-semibold">Products</li>
      </ul>
      <p className="text-center font-bold">
        Copyrights @ 2022 | Yorch Dev's
      </p>
    </footer>
  )
}

export default CustomFooter;
