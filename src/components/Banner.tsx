'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Banner() {
  const router = useRouter()
  const [index,setIndex] = useState(0);
  const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg'];

  return (
    <div className="block p-1 m-0 w-screen h-[80vh] relative" onClick={()=>setIndex(index+1)}>
      <Image
        src={covers[index%4]}
        alt="cover"
        fill={true}
        objectFit="cover"
      />
      <div className="relative top-[100px] z-20 text-center text-shadow-md">
        <h1 className='text-4xl font-bold'>where every event finds its venue</h1>
        <h3 className='text-xl font-serif'>Finding the perfect venue has never been easier. Whatever it's wedding, corporate event, or private party, we connecting people to the perfect place.</h3>
      </div>
      <button className="bg-white text-cyan-600 border border-cyan-600 font-semibold
      py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-10 hover:bg-cyan-600 hover:text-white hover:border-transparent"
      onClick={(e)=>{e.stopPropagation(); router.push('/venue')}}>
        Select Your Venue Now!
      </button>
    </div>
  );
}
