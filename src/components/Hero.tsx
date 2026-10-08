import Image from 'next/image'
import Link from 'next/link';
import Dashboard from './Dashboard';
const Hero = () => {
    const date=new Date().toLocaleDateString("bn-BD" ,{
            dateStyle:"full",
        }
    );
    return (
        <div>
        <div className='mx-auto mt-4 flex max-w-7xl items-center justify-between gap-10 px-6 py-10'>
            <div className='m-2'>
                <p className='inline-block rounded-3xl bg-green-100 text-green-800 px-4 py-2'>{date}</p>
                <p className='text-5xl font-extrabold mt-3'>আজকের বাজারের দাম এক নজরে</p>
                <p className='text-gray-400 text-md mt-3'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <Link href="#dashboard"> <button className="btn bg-green-600 text-white mt-2">সব পণ্য দেখুন</button></Link>
            </div>
            <div className='flex w-full justify-center'>
                <Image src="/bazar-hero.png" alt='Bazar Dor App Logo' height={500} width={500} className='max-w-full'></Image>
            </div>
               
        </div>
         <Dashboard></Dashboard>
        </div>
    );
};

export default Hero;