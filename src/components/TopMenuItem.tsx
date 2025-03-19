import Link from 'next/link';

export default function TopMenuItem({ title, pageRef }: { title: string; pageRef: string }) {
  return (
    <Link className="w-[120px] text-center my-auto font-sans text-[18pt] text-gray-500 pr-[7em]" href={pageRef}>
      {title}
    </Link>
  );
}
