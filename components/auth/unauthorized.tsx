import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

export default function Unauthorized() {
  const router = useRouter();
  return (
    <div className="flex-grow p-4 flex items-center justify-center">
      <div className="bg-white rounded-md shadow flex flex-col justify-center items-center px-8 pt-2 pb-8">
        <Image
          src="/auth.svg"
          width={150}
          height={150}
          layout="fixed"
        />
        <h1 className="text-lg font-semibold text-blue-500 text-center">Whoops! Kamu belum login..</h1>
        <p className="text-center text-sm text-gray-500 mb-3">Login untuk mengakses semua fitur gratis!</p>
        <Button
          fullWidth
          variant="contained"
          onClick={() => router.push({ pathname: '/myprofile' })}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
