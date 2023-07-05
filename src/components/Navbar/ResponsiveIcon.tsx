import { NavIconProps } from "@/interfaces";

const ResponsiveIcon = ({ icon }:NavIconProps) => {

  return(
    <li className="text-xl cursor-pointer">
      {icon}
    </li>
  )
}

export default ResponsiveIcon;
