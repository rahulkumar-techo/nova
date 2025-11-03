/**
 * ✨ Stylish AuthButton (NextAuth + Tailwind + Dropdown)
 * - Shows Login button when unauthenticated
 * - Shows User Avatar dropdown when logged in
 * - Safe redirect handling for both sign-in and sign-out
 */

"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { LogIn } from "lucide-react";
import UserDropdown from "./UserDropdown";

const AuthButton: React.FC = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <>
      {isAuthenticated && session?.user ? (
        <UserDropdown user={session.user} />
      ) : (
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl 
          font-semibold text-white transition-all duration-300
          bg-gradient-to-r from-blue-500 to-cyan-600
          hover:from-cyan-500 hover:to-sky-600
          border border-white/20 shadow-md hover:shadow-lg hover:scale-105"
        >
          <LogIn className="w-5 h-5 transition-transform group-hover:-rotate-12" />
          <span>Login</span>
        </button>
      )}
    </>
  );
};

export default AuthButton;
