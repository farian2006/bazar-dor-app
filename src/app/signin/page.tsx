"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";


const SignInPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
    }
  };

  const handleGithubSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative mx-auto max-w-7xl">
      <div className="flex flex-col items-center justify-between mt-6 mb-6">
        <p className="font-extrabold text-3xl">সাইন ইন</p>

        <p className="text-gray-500">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex justify-center">
        <fieldset className="fieldset bg-white rounded-box w-xs border p-4">
          <legend className="fieldset-legend"></legend>

          <label className="label">ইমেইল</label>

          <input
            type="email"
            name="email"
            className="input"
            placeholder="you@example.com"
            required
          />

        <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input w-full pr-12"
              placeholder="কমপক্ষে ৮ অক্ষর"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            className="btn bg-green-700 text-white rounded-2xl mt-4"
            type="submit"
          >
            সাইন ইন
          </button>

          <p className="flex justify-center text-gray-500">অথবা</p>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn bg-base-100"
          >
            <FaGoogle />
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            type="button"
            onClick={handleGithubSignIn}
            className="btn bg-base-100"
          >
            <FaGithub />
            GitHub দিয়ে চালিয়ে যান
          </button>

          <p className="flex justify-center mt-2">
            অ্যাকাউন্ট নেই?

            <Link href="/signup" className="text-green-600 ml-1">
              সাইন আপ করুন
            </Link>
          </p>
        </fieldset>
      </form>

      <Link
        href="/"
        className="flex justify-center mt-4 text-gray-500"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default SignInPage;