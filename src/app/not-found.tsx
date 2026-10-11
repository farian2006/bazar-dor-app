import Link from 'next/link';

 const Notfound = () => {
    return (
       <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">৪০৪</h1>

      <p className="mt-2 text-gray-400">
       দুঃখিত, এই পৃষ্ঠাটি পাওয়া যায়নি।
      </p>

      <Link
        href="/"
        className="mt-5 rounded-lg bg-green-600 px-5 py-2 text-white"
      >
       হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default Notfound;