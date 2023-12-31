import { NavIconProps } from "@/interfaces";

const DesktopIcon = ({ icon }:NavIconProps) => {

  return(
    <li className="text-xl cursor-pointer">
      {icon}
    </li>
  )
}

export default DesktopIcon;
