import Link from 'next/link';

interface ProjectItemProps {
  className: string
}

export default function ProjectItem({ className }: ProjectItemProps) {
  return (
    <Link href="/projects/asd">
      <a className={`p-2 shadow-md border rounded-lg block ${className}`}>
        <div className="flex justify-between">
          <span className="text-xs px-4 py-1 bg-gray-200 rounded-md">PKM</span>
          <span className="text-xs">15 September 2021</span>
        </div>
        <h3 className="mt-2 text-sm font-bold text-indigo-700">
          Karya Cipta: Mesin Pembersih Air Bertenaga Surya
        </h3>
        <p className="mt-5 text-xs">
          Mencari
          <b className="mx-1">
            3 Talenta
          </b>
          dari
          <b className="ml-1">
            Informatika, Ekonomi
          </b>
        </p>
      </a>
    </Link>
  );
}
