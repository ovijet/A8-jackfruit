"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  let pathName = usePathname();
  const isActive = pathName === href;
  return (
    <>
      <Link
        href={href}
        className={`${isActive ? "text-orange-600 font-bold" : ""}`}
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;