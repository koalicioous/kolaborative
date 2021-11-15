import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

const CreateProjectHeader: FC = () => (
  <header className="fixed w-full bg-white shadow" style={{ zIndex: 99 }}>
    <div className="max-w-lg m-auto px-4 py-3 flex items-center justify-start">
      <Link href="/">
        <a className="flex items-center">
          <Image
            src="/arrow-left.svg"
            width={16}
            height={16}
          />
        </a>
      </Link>
      <h1 className="ml-3 font-semibold text-blue-600">
        Mulai Proyek Baru
      </h1>
    </div>
  </header>
);

export default CreateProjectHeader;
