import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@mui/material';
import { useAuth } from '../../context/auth';

export default function ProfileHeader() {
  const src = 'https://res.cloudinary.com/dau2gxgbw/image/upload/v1630157690/uii-albarra-512_iisoj3.jpg';
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await signOut();
    // eslint-disable-next-line no-alert
    if (error) return alert(error);
    return router.push('/myprofile');
  };

  return (
    <div className="max-w-lg mx-auto px-5 py-4 bg-blue-50 flex flex-col items-center flex-grow">
      <Image loader={() => src} src={src} alt="Picture of Albarra" width="84" height="84" className="rounded-full" />
      <h1 className="mt-4 font-bold text-blue-700">{ user.email }</h1>
      <p className="text-xs text-blue-700 mb-4">[Nama Universitas] - [Nama Jurusan]</p>
      <Button variant="contained" onClick={handleLogout}>Log Out</Button>
    </div>
  );
}
