"use client";
import { authClient } from "@/lib/auth.client";
import NavLink from "@/share/NavLink";

import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaDAndD } from "react-icons/fa";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user, "ffffffff");

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex  items-center">
          <Image
            src={"/sunLogo.png"}
            alt="logo"
            loading="eager"
            width={60}
            height={60}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-bold text-3xl">
            S<span className="text-orange-600">un</span>Cart.
          </h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-product"}>All Products</NavLink>
          </li>

          <li>
            <NavLink href={"/profile"}>Profile</NavLink>
          </li>
        </ul>

        <div className="flex gap-4">
          {
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <NavLink href={"/signup"}>SignUp</NavLink>
              </li>
              <li>
                <NavLink href={"/signin"}>SignIn</NavLink>
              </li>
            </ul>
          }
          {/* {user && ( */}
          <div className="flex gap-3">
            <h1>{user?.name}</h1>
            <Avatar size="sm">
              <Avatar.Image
                alt="John Doe"
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>

            <Button onClick={handleSignOut} size="sm" variant="danger">
              SignOut
            </Button>
          </div>
          {/* )} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
