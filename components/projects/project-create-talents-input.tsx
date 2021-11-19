import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { WithContext as ReactTags } from 'react-tag-input';
import { Talent } from '../../lib/data/project';
import { useStore } from '../../lib/stores/createProject';
import { NewProjectTalentActionType } from '../../lib/actions/NewProjectTalentsAction';

const keyCodes = {
  comma: 188,
  enter: [10, 13],
};
const delimiters = [keyCodes.comma, ...keyCodes.enter];

export default function CreateTalentInput() {
  const [newTalent, setNewTalent] = useState<Talent>({
    id: uuid4(),
    major: '',
    amount: 0,
    description: '',
    skills: [],
  });
  const { dispatch } = useStore();

  const handleAddSkill = (skill: {id: string, text: string}) => setNewTalent({
    ...newTalent,
    skills: [...newTalent.skills, skill],
  });

  const handleDeleteSkill = (i: number) => setNewTalent({
    ...newTalent,
    skills: [...newTalent.skills.filter((tag, index) => index !== i)],
  });

  return (
    <div className="border-b border-gray-100">
      <div className="grid grid-cols-4 gap-3">
        <label htmlFor="name" className="block col-span-3">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Jurusan
            </span>
            <span className="text-red-500">*</span>
          </div>
          <input
            id="name"
            type="text"
            className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full"
            placeholder="Pilih jurusan yang kamu butuhkan"
            value={newTalent.major}
            onChange={(e) => setNewTalent({ ...newTalent, major: e.target.value })}
          />
        </label>
        <label htmlFor="amount" className="block">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Jumlah
            </span>
            <span className="text-red-500">*</span>
          </div>
          {/* <input
            id="amount"
            min="1"
            type="number"
            className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full"
            placeholder="Jumlah"
            value={newTalent.amount}
            onChange={(e) => setNewTalent({
              ...newTalent,
              amount: parseInt(e.target.value, 10),
            })}
          /> */}
          <select name="amount" id="amount" className="px-3 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full" onChange={(e) => setNewTalent({ ...newTalent, amount: parseInt(e.target.value, 10) + 1 })}>
            {
              [...Array(10)].map((item, index) => (
                <option
                  value={index}
                  key={Math.random()}
                  selected={newTalent.amount === (index + 1)}
                >
                  {index + 1}
                </option>
              ))
            }
          </select>
        </label>
      </div>
      <label htmlFor="jobDescription" className="block mt-3">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Deskripsi Tugas
          </span>
          <span className="text-red-500">*</span>
        </div>
        <textarea
          id="jobDescription"
          rows={5}
          className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full bg-white"
          placeholder="Jelaskan pekerjaan yang perlu dilakukan"
          value={newTalent.description}
          onChange={(e) => setNewTalent({ ...newTalent, description: e.target.value })}
        />
      </label>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="skills" className="block col-span-3">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Keahlian yang diharapkan
            <span className="ml-1 text-gray-400">(misal: Web Programming)</span>
          </span>
        </div>
        <ReactTags
          id="skills"
          tags={newTalent.skills}
          delimiters={delimiters}
          handleAddition={handleAddSkill}
          handleDelete={handleDeleteSkill}
        />
      </label>
      <div className="grid grid-cols-2 gap-2 mt-3">
        <button type="button">
          Hapus
        </button>
        <button
          type="button"
          className="p-2 rounded-md border border-blue-500 text-blue-600"
          onClick={() => dispatch({
            type: NewProjectTalentActionType.INSERT_TALENT,
            payload: newTalent,
          })}
        >
          Simpan
        </button>
      </div>
    </div>
  );
}
