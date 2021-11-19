import { Talent } from '../../lib/data/project';
import { useStore } from '../../lib/stores/createProject';
import CreateTalentInput from './project-create-talents-input';
import TalentItem from './project-create-talents-item';

export default function ProjectCreateTalents() {
  const { project } = useStore();
  const activeClass: string = 'bg-blue-50 text-blue-600';
  const disabledClass: string = 'bg-gray-50 text-gray-400 border border-gray-200';
  const pushButtonClass: string = project.talents.length > 0 ? activeClass : disabledClass;

  return (
    <section className="max-w-lg mx-auto bg-white p-3">
      <div className="p-3 rounded-md border border-yellow-200 bg-yellow-50 mb-3">
        <h1 className="font-bold text-gray-700">Tim Kolaborasi</h1>
        <p className="text-sm">
          Masukkan setidaknya 1 talenta yang kamu perlukan dalam proyek keren ini.
        </p>
      </div>
      {
        project.talents.length < 1
          ? <CreateTalentInput />
          : project.talents.map((talent: Talent) => (
            <TalentItem talent={talent} />
          ))
      }
      <div className="border-b border-gray-200 mt-4" />
      <button type="button" className={`p-3 rounded-md w-full mt-4 text-sm ${pushButtonClass}`}>
        + Tambah Kebutuhan Talenta
      </button>
    </section>
  );
}
