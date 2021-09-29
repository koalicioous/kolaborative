import Image from 'next/image'

export default function ProfileHeader() {
  const src = "https://res.cloudinary.com/dau2gxgbw/image/upload/v1630157690/uii-albarra-512_iisoj3.jpg";

  return (
    <div className="max-w-lg mx-auto px-5 py-4 bg-indigo-50 flex flex-col items-center">
      <Image loader={() => src} src={src} alt="Picture of Albarra" width="84" height="84" className="rounded-full" />
      <h1 className="mt-4 font-bold text-indigo-700">Albarra Naufala Erdanto</h1>
      <p className="text-xs text-indigo-700">Universitas Islam Indonesia - Informatika</p>
    </div>
  )
}
