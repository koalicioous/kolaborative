import { useStore } from '../../../lib/stores/createProject';

export default function CreateProjectAction() {
  const { project } = useStore();
  const ACTIVE_CLASS: string = 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg';
  const INACTIVE_CLASS: string = 'bg-gray-200 text-gray-400 border border-gray-300';
  const IS_ENABLED: boolean = project.name
  && project.description
  && project.talents.length > 0;
  const SUBMIT_BUTTON_CLASS: string = IS_ENABLED ? ACTIVE_CLASS : INACTIVE_CLASS;

  return (
    <div className="fixed bottom-0 z-10 p-3 border-top border-2 bg-white w-full border-gray-50 shadow-md">
      <div className="max-w-lg mx-auto grid grid-cols-2 gap-4 text-center">
        <button type="button" className="text-sm text-blue-500">
          Simpan sebagai draft
        </button>
        <button type="button" disabled={!IS_ENABLED} className={`transition-all rounded-md p-2 ${SUBMIT_BUTTON_CLASS}`}>
          Publikasikan
        </button>
      </div>
    </div>
  );
}
