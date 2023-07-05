import { NavLinkProps } from "@/interfaces"

const ResponsiveLink = ({ title }: NavLinkProps) => {

  return(
    <li className="flex items-center border-b-2 border-slate-300 py-2 cursor-pointer">
      {title}
    </li>
  )
}

export default ResponsiveLink;
