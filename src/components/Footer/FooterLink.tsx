import type { FooterLinkProps } from "@/interfaces"
import Link from "next/link";

const FooterLink = ({ title, urlPath }:FooterLinkProps) => {

  return(
    <li className="text-center font-semibold">
      <Link href={urlPath}>
        {title}
      </Link>
    </li>
  )
}

export default FooterLink;
