"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      redirect("/Hero");
    }

    if (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="relative mx-auto max-w-7xl ">
      <div className="flex flex-col justify-between items-center mt-6 mb-6">
        <p className="font-extrabold text-3xl">অ্যাকাউন্ট তৈরি করুন</p>
        <p className="text-gray-500">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-white-200 boarder-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend"></legend>

          <label className="label">নাম</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="যেমন: রহিম উদ্দিন"
          />

          <label className="label">ইমেইল</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="you@example.com"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />

          <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
          <input
            type="password"
            name="confirmPassword"
            className="input"
            placeholder="আবার লিখুন"
          />

          <button
            className="btn bg-green-700 text-white rounded-2xl mt-4"
            type="submit"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>

          <p className="flex justify-center mt-2">
            অ্যাকাউন্ট আছে?{" "}
            <Link href="/sigin" className="text-green-600">
              {" "}
              সাইন ইন করুন{" "}
            </Link>
          </p>

          <button onClick={handleGoogleSignIn} className="btn bg-base-100 ">
            Google দিয়ে চালিয়ে যান
          </button>
          <button onClick={handleGithubSignIn} className="btn bg-base-100">
            GitHub দিয়ে চালিয়ে যান
          </button>
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

export default SignUpPage;
