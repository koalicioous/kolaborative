import Image from 'next/image';
import { NewProjectDetailActionType } from '../../lib/actions/NewProjectDetailAction';
import { Goal } from '../../lib/data/project';
import { useStore } from '../../lib/stores/createProject';

export default function ProjectCreateDetail() {
  const { project, dispatch } = useStore();

  return (
    <section className="max-w-lg mx-auto bg-white p-3">
      <label htmlFor="name" className="block">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Nama Proyek
          </span>
          <span className="text-red-500">*</span>
        </div>
        <input
          id="name"
          type="text"
          className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full"
          placeholder="Ketik nama proyekmu"
          value={project.name}
          onChange={(e) => dispatch({
            type: NewProjectDetailActionType.UPDATE_FIELD,
            field: 'name',
            payload: e.target.value,
          })}
        />
      </label>
      <label htmlFor="private" className="flex items-center mt-2">
        <input
          id="private"
          type="checkbox"
          checked={project.isPrivate}
          onChange={() => dispatch({
            type: NewProjectDetailActionType.TOGGLE_CHECKBOX,
            field: 'isPrivate',
          })}
        />
        <span className="ml-2 text-xs font-medium text-gray-800">
          Hanya tampilkan kepada pengguna di institusi saya
        </span>
      </label>
      <label htmlFor="event" className="block mt-3">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Event
            <span className="text-xs text-gray-400"> (Optional)</span>
          </span>
        </div>
        <input
          id="event"
          type="text"
          className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full"
          placeholder="Event yang diikuti proyek ini"
          value={project.event}
          onChange={(e) => dispatch({
            type: NewProjectDetailActionType.UPDATE_FIELD,
            field: 'event',
            payload: e.target.value,
          })}
        />
      </label>
      <label htmlFor="deadline" className="block mt-3">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Batas akhir pendaftaran
          </span>
          <span className="text-red-500">*</span>
        </div>
        <input
          id="deadline"
          type="date"
          className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full bg-white"
          placeholder="Event yang diikuti proyek ini"
          value={project.registrationDeadline}
          onChange={(e) => dispatch({
            type: NewProjectDetailActionType.UPDATE_FIELD,
            field: 'registrationDeadline',
            payload: e.target.value,
          })}
        />
      </label>
      <label htmlFor="description" className="block mt-3">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Deskripsi Proyek
          </span>
          <span className="text-red-500">*</span>
        </div>
        <textarea
          id="description"
          rows={10}
          className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full bg-white"
          placeholder="Event yang diikuti proyek ini"
          value={project.description}
          onChange={(e) => dispatch({
            type: NewProjectDetailActionType.UPDATE_FIELD,
            field: 'description',
            payload: e.target.value,
          })}
        />
      </label>
      <label htmlFor="event" className="block mt-3">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Tujuan Proyek
            <span className="text-xs text-gray-400"> (Optional)</span>
          </span>
        </div>
        {
          project.goals.length > 0
          && project.goals.map((goal: Goal, index: number) => (
            <div key={goal.id} className="flex items-center">
              <div className="border border-gray-200 my-2 rounded-md flex items-center focus-within:border-blue-300 flex-grow">
                <span className="w-12 text-center">{`${index + 1} . `}</span>
                <input
                  type="text"
                  name={`goal-${index}`}
                  id={`goal-${index}`}
                  value={goal.description}
                  className="py-3 focus:outline-none rounded-r-md flex-grow"
                  placeholder="ex: Memenangkan medali emas PIMNAS 2021"
                  onChange={(e) => dispatch({
                    type: NewProjectDetailActionType.EDIT_GOAL_DESCRIPTION,
                    field: goal.id,
                    payload: e.target.value,
                  })}
                />
              </div>
              <button
                type="button"
                className="transition-all hover:shadow hover:bg-gray-100 w-12 h-12 rounded-md bg-gray-50 ml-2 flex items-center justify-center"
                onClick={() => dispatch({
                  type: NewProjectDetailActionType.REMOVE_GOAL,
                  field: 'goals',
                  payload: goal.id,
                })}
              >
                <Image
                  src="/delete.svg"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          ))
        }
      </label>
      <button
        type="button"
        className="rounded-md bg-blue-50 border border-blue-100 p-2 mt-2 text-center w-full text-xs text-blue-500 font-semibold"
        onClick={() => dispatch({
          type: NewProjectDetailActionType.INSERT_GOALS,
          field: 'goals',
        })}
      >
        + Tambah tujuan proyek
      </button>
      <div className="grid grid-cols-2 gap-4 mt-3">
        <label htmlFor="startDate" className="block">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Tanggal Mulai Proyek
            </span>
            <span className="text-xs text-gray-400"> (Optional)</span>
          </div>
          <input
            id="startDate"
            type="date"
            className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full bg-white"
            placeholder="Event yang diikuti proyek ini"
            value={project.registrationDeadline}
            onChange={(e) => dispatch({
              type: NewProjectDetailActionType.UPDATE_FIELD,
              field: 'startDate',
              payload: e.target.value,
            })}
          />
        </label>
        <label htmlFor="finishDate" className="block">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Tanggal Selesai Proyek
            </span>
            <span className="text-xs text-gray-400"> (Optional)</span>
          </div>
          <input
            id="finishDate"
            type="date"
            className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full bg-white"
            placeholder="Event yang diikuti proyek ini"
            value={project.registrationDeadline}
            onChange={(e) => dispatch({
              type: NewProjectDetailActionType.UPDATE_FIELD,
              field: 'finishDate',
              payload: e.target.value,
            })}
          />
        </label>
      </div>
      <div className="mt-3 py-3 border-t border-gray-100">
        <button type="button" className="w-full p-2 rounded-md bg-red-100 text-sm text-red-800 font-semibold">
          Hapus Proyek
        </button>
      </div>
    </section>
  );
}
