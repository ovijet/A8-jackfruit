// "use client";
// import NavLink from "@/share/NavLink";
// // import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   //   const userData = authClient.useSession();
//   //   const user = userData.data?.user;

//   //   const handleSignOut = async () => {
//   //     await authClient.signOut();
//   //   }

//   return (
//     <div className="border-b px-2">
//       <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
//         <div className="flex  items-center">
//           <Image
//             src={"/sunLogo.png"}
//             alt="logo"
//             loading="eager"
//             width={60}
//             height={60}
//             className="object-cover h-auto w-auto"
//           />
//           <h3 className="font-bold text-3xl">
//             S<span className="text-orange-600">un</span>Cart.
//           </h3>
//         </div>

//         <ul className="flex items-center gap-5 text-sm">
//           <li>
//             <NavLink href={"/"}>Home</NavLink>
//           </li>
//           <li>
//             <NavLink href={"/all-product"}>All Products</NavLink>
//           </li>

//           <li>
//             <NavLink href={"/profile"}>Profile</NavLink>
//           </li>
//         </ul>

//         <div className="flex gap-4">
//           {
//             <ul className="flex items-center  text-sm gap-5">
//               <li>
//                 <NavLink href={"/signup"}>SignUp</NavLink>
//               </li>
//               <li>
//                 <NavLink href={"/signin"}>SignIn</NavLink>
//               </li>
//             </ul>
//           }

//           {/* {user && (
//             <div className="flex gap-3">
//               <Avatar size="sm">
//                 <Avatar.Image
//                   alt="John Doe"
//                   src={user?.image}
//                   referrerPolicy="no-referrer"
//                 />
//                 <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
//               </Avatar>

//               <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
//             </div>
//           )} */}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import NavLink from "@/share/NavLink";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));

    if (token) {
      setUser({ name: "User" });
    }
  }, []);

  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; path=/";
    setUser(null);
    window.location.href = "/";
  };

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/sunLogo.png" alt="logo" width={50} height={50} />
          <h3 className="font-bold text-2xl ml-2">
            S<span className="text-orange-600">un</span>Cart.
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
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

        {/* Auth (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {!user && (
            <div className="flex gap-4 text-sm">
              <NavLink href="/signup">SignUp</NavLink>
              <NavLink href="/signin">SignIn</NavLink>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleLogout}
                size="sm"
                className="bg-red-500 text-white"
              >
                SignOut
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <NavLink href="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink href="/all-product" onClick={() => setOpen(false)}>
            All Products
          </NavLink>
          <NavLink href="/profile" onClick={() => setOpen(false)}>
            Profile
          </NavLink>

          {!user && (
            <div className="flex flex-col gap-2 mt-2">
              <NavLink href="/signup" onClick={() => setOpen(false)}>
                SignUp
              </NavLink>
              <NavLink href="/signin" onClick={() => setOpen(false)}>
                SignIn
              </NavLink>
            </div>
          )}

          {user && (
            <Button
              onClick={() => {
                handleLogout();
                setOpen(false);
              }}
              className="bg-red-500 text-white mt-2"
            >
              SignOut
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
