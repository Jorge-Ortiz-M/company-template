"use client";
import { useState } from "react";
import { FaGithub, FaGoogle, FaFacebook, FaBars, FaTimesCircle } from "react-icons/fa";
import ResponsiveIcon from "./ResponsiveIcon";
import ResponsiveLink from "./ResponsiveLink";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  return(
    <nav className="flex flex-col md:hidden w-full">
      <div className="flex items-center justify-between p-5">
        <h3 className="text-2xl font-bold">
          Company Inc
        </h3>
        <span className="text-xl cursor-pointer" onClick={() => setShowNav(true)}>
          <FaBars />
        </span>
      </div>
      {
        showNav &&
        <div className="bg-slate-100 flex flex-col fixed justify-between h-full w-full">
          <div className="flex flex-col">
            <div className="flex items-center justify-between bg-slate-200 p-5">
              <h3 className="text-2xl font-bold">
                Company Inc
              </h3>
              <span className="text-xl cursor-pointer" onClick={() => setShowNav(false)}>
                <FaTimesCircle />
              </span>
            </div>
            <ul className="flex flex-col gap-5 p-5">
              <ResponsiveLink title="Home" />
              <ResponsiveLink title="Contact" />
              <ResponsiveLink title="Products" />
            </ul>
          </div>
          <div className="flex flex-col gap-5 p-5">
            <ul className="flex items-center justify-center gap-10">
              <ResponsiveIcon icon={<FaGithub />} />
              <ResponsiveIcon icon={<FaGoogle />} />
              <ResponsiveIcon icon={<FaFacebook />} />
            </ul>
            <div className="flex flex-col items-center justify-center">
              <h4 className="font-bold text-2xl">Company Inc.</h4>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <span>company.com</span>
            </div>
          </div>
        </div>
      }
    </nav>
  )
}

export default ResponsiveNav;
