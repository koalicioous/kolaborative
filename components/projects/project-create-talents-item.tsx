import { Dispatch, SetStateAction } from 'react';
import UsersSolid from '../ui/icons/solid/users';
import { Talent } from '../../lib/newProject/data/project';
import GraduationHatSolid from '../ui/icons/solid/graduation-hat';

interface TalentItemProps {
    talent: Talent
    // eslint-disable-next-line react/require-default-props
    editTalent?: Dispatch<SetStateAction<string>>
}

export default function TalentItem({ talent, editTalent }: TalentItemProps) {
  return (
    <div className="p-4 bg-blue-50 rounded-md flex flex-col mb-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <GraduationHatSolid className="pt-1 h-8 w-6 text-blue-600 flex justify-center items-center -my-1" />
          <h1 className="font-bold text-lg text-blue-600 ml-1">
            {
              'majors' in talent
                ? talent.majors?.name
                : (talent.major.name ?? talent.major)
            }
          </h1>
        </div>
        <div className="flex items-center">
          <UsersSolid className="pt-3 h-10 w-8 text-blue-600 flex justify-center items-center -my-1" />
          <span className="font-semibold text-blue-600">
            {talent.amount}
            <span className="ml-1">
              Orang
            </span>
          </span>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-base text-gray-700 font-bold">Deskripsi Tugas</h2>
        <p>{talent.description}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-base text-gray-700 font-bold">Skill yang Diharapkan:</h2>
        <ul className="list-disc list-inside">
          {
            talent.skills.map((skill) => (
              <li className="my-1" key={skill.name}>
                {skill.name}
              </li>
            ))
          }
        </ul>
      </div>
      {
        editTalent
        && (
        <button
          type="button"
          className="transition-all py-2 text-sm -mx-4 -mb-4 mt-4 rounded-b-md text-blue-400 font-medium flex-grow text-center bg-blue-100 hover:bg-blue-200 hover:text-blue-600"
          onClick={() => {
            editTalent(talent.id);
          }}
        >
          Klik untuk mengubah
        </button>
        )
      }
    </div>
  );
}
