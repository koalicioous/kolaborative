import PrimaryButton from '../ui/buttons/primary-button';

export default function HomePageOwnerWelcome() {
  return (
    <div className="max-w-lg m-auto p-5 bg-white">
      <h1 className="font-bold text-indigo-700 text-xl text-center">
        Tell Your Talent Need,
        <br />
        and Let Us Do The Rest! 📝
      </h1>
      <p className="mt-2 text-indigo-700 text-xs text-center">
        Kolaborative membantu kamu lebih fokus berinovasi
        dengan SDM yang tepat
      </p>
      <PrimaryButton className="mt-4 w-full font-bold">
        📢 Promosikan Proyekmu!
      </PrimaryButton>
      <PrimaryButton className="mt-2 w-full font-bold">
        💡 Pelajari Cara Kerja Kami
      </PrimaryButton>
    </div>
  );
}
