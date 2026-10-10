"use client"

import Image from 'next/image'
import NavLinks from './NavLinks';
import Link from 'next/link';
import Marquee from './Marquee';




const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

    
    return (
        <div className='relative mx-auto max-w-7xl px-4 py-3 bg-base-100 shadow-sm'>
                <div className='navbar justify-between'>
   <div className='flex gap-4'>
    <p className='p-3 bg-green-700 rounded-2xl'>
     <Image src="/logo-icon.png" alt='Logo Image' height={20} width={20}></Image>
   </p>
   <div>
    <p className='font-bold text-3xl'>বাজার দর</p>
      <p>{date}</p>
   </div>
   </div>
  
  <div className="flex gap-3">
   <Link href="/signin"><button className="btn btn-outline font-bold">সাইন ইন</button></Link>
   <Link  href="/signup"> <button className="btn bg-green-700 text-white">সাইন আপ</button></Link>
  </div>
  </div>

 <div className='border-b'>
    <div className='flex items-center pt-2'>
  <NavLinks></NavLinks>
  </div>
  </div> 
  <Marquee></Marquee>
</div>
    );
};

export default Header;