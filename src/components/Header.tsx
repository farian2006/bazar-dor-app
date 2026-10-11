"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";


const Header = () => {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      })
    );
  }, []);

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-3 bg-base-100 shadow-sm">
      <div className="navbar justify-between">
        <div className="flex gap-4">
          <p className="p-3 bg-green-700 rounded-2xl">
            <Image
              src="/logo-icon.png"
              alt="Logo Image"
              height={20}
              width={20}
            ></Image>
          </p>
          <div>
            <p className="font-bold text-3xl">বাজার দর</p>
            <p>{today}</p>
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="flex items-center pt-2">
        </div>
      </div>
      <UserInfo></UserInfo>
    </div>
  );
};

export default Header;
