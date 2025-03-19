import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
  return (
    <div className="h-[80px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-lightgray flex flex-row-reverse">
      <Image
        src="/img/logo.png"
        alt="logo"
        className="h-full w-auto"
        width={0}
        height={0}
        sizes="100vh"
      />
      <TopMenuItem title="Booking" pageRef="/booking" />
    </div>
  );
}
