"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log(session)

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-lg">You are not signed in</p>
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <img
        src={session.user?.image || ""}
        alt="Profile"
        className="w-16 h-16 rounded-full"
      />
      <h1 className="text-2xl font-semibold">
        Welcome, {session.user?.name} 👋
      </h1>
      <p>{session.user?.email}</p>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
}
