import Link from 'next/link';
import Image from 'next/image';

export default function HomePageTalentWelcome() {
  return (
    <div className="max-w-lg p-5 mx-auto bg-white">
      <div className="grid grid-cols-5 my-3">
        <div className="col-span-2">
          <Image
            src="/projects-header.svg"
            height={150}
            width={200}
          />
        </div>
        <div className="col-span-3 flex items-center p-3">
          <h1 className="text-xl md:text-3xl text-center font-bold text-blue-600">
            Temukan Proyek Kolaborasi Seru!
          </h1>
        </div>
      </div>
      <div className="flex">
        <Link href="/create-project">
          <a className="rounded-md py-2 w-full text-center bg-blue-600 text-blue-50 font-semibold text-sm shadow-md">
            + Mulai Proyek Baru
          </a>
        </Link>
      </div>
    </div>
  );
}
