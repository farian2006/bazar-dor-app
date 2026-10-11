"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleSignout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
      {user ? (
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center">
            <p className="text-xs"> স্বাগতম </p>
            <p className="text-xs">{user.name}</p>
            <Link href={"/profile"} className="flex flex-col items-center">
            <p className="font-extrabold text-blue-500">প্রোফাইলে যান</p>
          </Link>
          <button onClick={handleSignout} className="btn bg-red-500 btn-xs">
           সাইন আউট
          </button>
        </div>
        </div>
      ) : (
       <div className="flex gap-3 items-center">
          <Link href="/signin">
            <button className="btn btn-outline font-bold">সাইন ইন</button>
          </Link>
          <Link href="/signup">
          {" "}
            <button className="btn bg-green-700 text-white">সাইন আপ</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
