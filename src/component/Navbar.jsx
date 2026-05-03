"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth.client";
import NavLink from "@/share/NavLink";

import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-3">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/sunLogo.png" alt="logo" width={50} height={50} />
          <h3 className="font-bold text-2xl md:text-3xl">
            <Link href="/">
              S<span className="text-orange-600">un</span>Cart.
            </Link>
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-[16px]">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/all-product">All Products</NavLink>
          </li>
          <li>
            <NavLink href="/profile">Profile</NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <li className="list-none btn">
                <NavLink href="/signin">SignIn</NavLink>
              </li>
              <li className="list-none btn btn-primary">
                <NavLink href="/signup">
                  <span className="  px-3 py-1 rounded">SignUp</span>
                </NavLink>
              </li>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <h1 className="text-sm">{user?.name}</h1>

              <Avatar size="sm">
                <Avatar.Image src={user?.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSignOut}
                size="sm"
                className="bg-orange-400 text-white"
              >
                SignOut
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 py-4 border-t">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/all-product">All Products</NavLink>
          <NavLink href="/profile">Profile</NavLink>

          {!user ? (
            <>
              <li className="list-none btn">
                <NavLink href="/signin">SignIn</NavLink>
              </li>
              <li className="list-none btn btn-primary">
                <NavLink href="/signup">
                  <span className="  px-3 py-1 rounded">SignUp</span>
                </NavLink>
              </li>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSignOut}
                size="sm"
                className="bg-orange-400 text-white"
              >
                SignOut
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
