import { NavLinkProps } from "@/interfaces";
import Link from "next/link";

const DesktopLink = ({ title, urlPath }:NavLinkProps) => {

  return(
    <li className="font-medium cursor-pointer">
      <Link href={urlPath}>
        {title}
      </Link>
    </li>
  )
}

export default DesktopLink;
