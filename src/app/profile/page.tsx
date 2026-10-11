"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (!name.trim()) {
      return;
    }

    setLoading(true);

    try {
      const { error } = await authClient.updateUser({
        name: name.trim(),
      });

      if (error) {
        toast.error("Failed to update profile")
        return;
      }
      toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে");
      setShow(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignout = async () => {
    await authClient.signOut();
    toast.success("সাইন আউট সফলভাবে সম্পন্ন হয়েছে")
 
   window.location.replace("/");
  };

  return (
    <main className="min-h-screen bg-[#f1f6f1] px-4 py-8 text-[#29352d]">
      <div className="mx-auto w-full max-w-140">
        <div className="mb-5">
          <h1 className="text-xl font-bold tracking-tight">আমার প্রোফাইল</h1>
          <p className="text-xs text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন
          </p>
        </div>

        <section className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-[#e0e9e1] bg-[#fbfdfb] p-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold">
                {user?.name || "User"}
              </h2>
              <p className="truncate text-xs text-gray-500">{user?.email}</p>
            </div>
          </div>

          <button
            onClick={handleSignout}
            className="btn btn-outline btn-error text-red-600 rounded-2xl mt-4"
            type="submit"
          >
            ↩ সাইন আউট
          </button>
        </section>

        <section className="rounded-xl border border-[#e0e9e1] bg-[#fbfdfb] p-4 sm:p-5">
          <h3 className="mb-6 text-sm font-semibold">তথ্য</h3>

          <form onSubmit={handleUpdateProfile} className="flex flex-col gap-2">
            <label htmlFor="name" className="ml-4 text-xs text-gray-600">
              নাম
            </label>

            <input
              id="name"
              name="name"
              type="text"
              defaultValue={user?.name || ""}
              placeholder="আপনার নাম লিখুন"
              required
              className="h-7.5 w-full rounded-lg border border-[#e0e9e1] bg-transparent px-3 text-sm outline-none focus:border-green-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-3 h-7.75 w-full rounded-md bg-[#008c3c] text-xs font-medium text-white shadow-md transition hover:bg-[#007a34] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "আপডেট হচ্ছে..." : "আপডেট"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;
