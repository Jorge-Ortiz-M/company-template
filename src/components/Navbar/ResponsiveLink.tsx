import { NavLinkProps } from "@/interfaces"
import Link from "next/link";

const ResponsiveLink = ({ title, urlPath }: NavLinkProps) => {

  return(
    <li className="flex items-center border-b-2 border-slate-300 py-2 cursor-pointer">
      <Link href={urlPath}>
        {title}
      </Link>
    </li>
  )
}

export default ResponsiveLink;
