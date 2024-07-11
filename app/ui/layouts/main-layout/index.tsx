"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const onLogoutClick = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen max-w-screen">
      <div className="navbar bg-base-100 py-8 px-4">
        <div className="navbar-start">
          <Link href="/blog" className="btn btn-ghost text-xl">
            BLOG
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={onLogoutClick}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-8 py-4">{children}</div>
    </div>
  );
};

export default MainLayout;
