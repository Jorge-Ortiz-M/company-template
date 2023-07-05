import { DesktopIconProps } from "@/interfaces";

const DesktopIcon = ({ icon }:DesktopIconProps) => {

  return(
    <li className="text-xl cursor-pointer">
      {icon}
    </li>
  )
}

export default DesktopIcon;
