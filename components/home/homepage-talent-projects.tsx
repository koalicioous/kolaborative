import ClockIconSolid from '../ui/icons/solid/clock-icon';

export default function HomePageTalentProjects() {
  return (
    <div className="max-w-lg m-auto px-5 py-4 border-t-2 bg-white">
      <div className="flex items-center">
        <ClockIconSolid className="w-8 h-8 text-yellow-400" />
        <h2 className="ml-2 text-md md:text-xl font-bold text-blue-600">
          Deadline Pendaftaran Sebentar Lagi
        </h2>
      </div>
    </div>
  );
}
