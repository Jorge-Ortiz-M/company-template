import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";
import DesktopIcon from "./DesktopIcon";
import DesktopLink from "./DesktopLink";

const DesktopNav = () => {

  return(
    <nav className="flex items-center justify-between border p-5">
      <div className="flex items-center gap-20">
        <h3 className="text-2xl font-bold">Company Inc</h3>
        <ul className="flex items-center gap-8">
          <DesktopLink title="Home" />
          <DesktopLink title="Contact" />
          <DesktopLink title="Products" />
        </ul>
      </div>
      <ul className="flex items-center gap-10">
        <DesktopIcon icon={<FaGithub />} />
        <DesktopIcon icon={<FaGoogle />} />
        <DesktopIcon icon={<FaFacebook />} />
      </ul>
    </nav>
  )
}

export default DesktopNav;
