import { NavLinkProps } from "@/interfaces";

const DesktopLink = ({ title }:NavLinkProps) => {

  return(
    <li className="font-medium cursor-pointer">
      {title}
    </li>
  )
}

export default DesktopLink;
