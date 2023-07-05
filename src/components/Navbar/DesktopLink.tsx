import { DesktopLinkProps } from "@/interfaces";

const DesktopLink = ({ title }:DesktopLinkProps) => {

  return(
    <li className="font-medium cursor-pointer">
      {title}
    </li>
  )
}

export default DesktopLink;
