import DesktopNav from "./DesktopNav";
import ResponsiveNav from "./ResponsiveNav";

const Navbar = () => {

  return(
    <header className="flex items-center w-full">
      <DesktopNav />
      <ResponsiveNav />
    </header>
  )
}

export default Navbar;
