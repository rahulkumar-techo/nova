"use client";

/**
 * 👤 UserDropdown Component
 * - Displays user avatar
 * - Dropdown menu with Profile, Billing, Team, and Sign Out
 */

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./Avatar";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

type Props = {
  user: {
    image?: string | null;
    name?: string | null;
    email?: string | null;
  };
};

const UserDropdown = ({ user }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none">
          <UserAvatar imageUrl={user?.image || ""} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>
          <div className="text-sm font-medium truncate">{user?.name || "User"}</div>
          <div className="text-xs text-gray-500 truncate">{user?.email}</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => (window.location.href = "/profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => (window.location.href = "/dashboard")}>
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-red-500 hover:text-red-600"
        >
          <LogOut className="w-4 h-4 mr-2" /> Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
