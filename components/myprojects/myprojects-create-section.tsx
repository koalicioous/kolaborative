import PrimaryButton from '../ui/buttons/primary-button';

export default function MyProjectsCreateSection() {
  return (
    <div className="max-w-lg mx-auto px-5 py-4 bg-indigo-50">
      <h1 className="font-bold text-indigo-700">
        Miliki lebih banyak waktu untuk berinovasi dan berkarya.
      </h1>
      <p className="mt-2 text-xs">
        Dapatkan talenta yang tepat untuk proyekmu
      </p>
      <PrimaryButton className="mt-4 w-full">
        + Buat Proyek Baru
      </PrimaryButton>
    </div>
  );
}
