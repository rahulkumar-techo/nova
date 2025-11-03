/**
 * 🧠 UserAvatar Component
 * - Displays user’s profile picture
 * - Fallback initials if no image
 */

import Image from "next/image";

const UserAvatar = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden shadow-md hover:scale-105 transition">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="User Avatar"
          width={40}
          height={40}
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-full h-full flex items-center justify-center text-white font-bold">
          U
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
