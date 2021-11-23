import {
  useState, Dispatch, SetStateAction,
} from 'react';
import { v4 as uuid4 } from 'uuid';
import { WithContext as ReactTags } from 'react-tag-input';
import DeleteIconSolid from '../ui/icons/solid/delete-icon';
import { Talent } from '../../lib/newProject/data/project';
import { useStore } from '../../lib/newProject/stores/createProject';
import { NewProjectTalentActionType } from '../../lib/newProject/actions/NewProjectTalentsAction';

const keyCodes = {
  comma: 188,
  enter: [10, 13],
};
const delimiters = [keyCodes.comma, ...keyCodes.enter];
const defaultTalent = {
  id: uuid4(),
  major: '',
  amount: 1,
  description: '',
  skills: [],
};

interface CreateTalentInputProps {
  isEditing: boolean,
  talent?: Talent,
  editTalent: Dispatch<SetStateAction<string>>,
  cancelEdit: Dispatch<SetStateAction<boolean>>,
}

export default function CreateTalentInput(
  {
    isEditing, talent, editTalent, cancelEdit,
  } : CreateTalentInputProps,
) {
  const [newTalent, setNewTalent] = useState<Talent>(talent || defaultTalent);
  const [validation, setValidation] = useState({
    major: false,
    description: false,
  });

  const [edit] = useState<boolean|undefined>(isEditing);
  const { project, dispatch } = useStore();

  const handleAddSkill = (skill: {id: string, text: string}) => setNewTalent({
    ...newTalent,
    skills: [...newTalent.skills, skill],
  });

  const handleDeleteSkill = (i: number) => setNewTalent({
    ...newTalent,
    skills: [...newTalent.skills.filter((tag, index) => index !== i)],
  });

  const handleInsertTalent = () => {
    if (newTalent.major && newTalent.description) {
      if (edit) {
        dispatch(
          {
            type: NewProjectTalentActionType.EDIT_TALENT,
            payload: newTalent,
          },
        );
        return editTalent('');
      }
      return dispatch(
        {
          type: NewProjectTalentActionType.INSERT_TALENT,
          payload: { ...newTalent, id: uuid4() },
        },
      );
    }
    return setValidation({
      major: newTalent.major.length < 1,
      description: newTalent.description.length < 1,
    });
  };

  return (
    <div className={`border-b flex flex-col  ${edit || project.talents.length > 0 ? 'p-3 border rounded-md border-gray-200' : 'border-gray-100'}`}>
      <div className="grid grid-cols-4 gap-3">
        <label htmlFor="major" className="block col-span-3">
          <div>
            <span className="text-vase font-medium text-gray-700">
              Jurusan
            </span>
            <span className="text-red-500">*</span>
          </div>
          <input
            id="major"
            type="text"
            className={`px-2 py-3 text-base rounded-md border border-gray-200 mt-1 w-full ${!validation.major ? 'border-gray-200' : 'border-red-500'}`}
            placeholder="Pilih jurusan yang kamu butuhkan"
            value={newTalent.major}
            onChange={(e) => setNewTalent({ ...newTalent, major: e.target.value })}
          />
          { validation.major
          && <span className="text-red-500 text-xs">Jurusan tidak boleh kosong</span>}
        </label>
        <label htmlFor="amount" className="block">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Jumlah
            </span>
            <span className="text-red-500">*</span>
          </div>
          <select name="amount" id="amount" value={newTalent.amount} className="px-3 py-3 text-base rounded-md border border-gray-200 mt-1 w-full" onChange={(e) => setNewTalent({ ...newTalent, amount: parseInt(e.target.value, 10) })}>
            {
              [...Array(10)].map((item, index) => (
                <option
                  value={index + 1}
                  key={Math.random()}
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
          <span className="text-base font-medium text-gray-700">
            Deskripsi Tugas
          </span>
          <span className="text-red-500">*</span>
        </div>
        <textarea
          id="jobDescription"
          rows={5}
          className={`px-2 py-3 text-base rounded-md border mt-1 w-full bg-white ${validation.description ? 'border-red-500' : 'border-gray-200'}`}
          placeholder="Jelaskan pekerjaan yang perlu dilakukan"
          value={newTalent.description}
          onChange={(e) => { setNewTalent({ ...newTalent, description: e.target.value }); }}
        />
        { validation.description
          && <span className="text-red-500 text-xs -my-1">Jurusan tidak boleh kosong</span>}
      </label>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="skills" className="block col-span-3 mt-3">
        <div>
          <span className="text-base font-medium text-gray-700">
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
        <span
          className="mt-3 text-gray-500 text-sm"
        >
          Tekan
          {' '}
          <b>&apos;Enter&apos;</b>
          {' '}
          atau
          {' '}
          <b>&apos;koma&apos;</b>
          {' '}
          untuk menambahkan skill baru
        </span>
      </label>
      <div className="mt-4 flex">
        {
          edit && (
          <button
            type="button"
            className="transition-all hover:shadow hover:bg-red-200 w-20 mr-2 pt-3 pl-3 text-red-700 h-12 rounded-md bg-red-100 border-red-300 flex items-center justify-center"
            onClick={() => {
              dispatch({ type: NewProjectTalentActionType.REMOVE_TALENT, payload: newTalent });
              return editTalent('');
            }}
          >
            <DeleteIconSolid className="w-8 h-8" />
          </button>
          )
        }
        <button
          type="button"
          className="p-2 rounded-md border border-blue-500 bg-blue-500 shadow hover:bg-blue-600 text-white transition-all w-full"
          onClick={(handleInsertTalent)}
        >
          {
            edit
              ? 'Perbarui'
              : '+ Tambahkan'
          }
        </button>
      </div>
      {
        (edit || project.talents.length > 0)
        && (
          <button
            type="button"
            className="-mx-3 -mb-3 mt-3 py-3 border-t border-gray-200 text-sm text-gray-500 font-medium bg-gray-100 hover:bg-gray-200 transition-all"
            onClick={() => {
              if (edit) return editTalent('');
              return cancelEdit(false);
            }}
          >
            Batalkan
          </button>
        )
      }
    </div>
  );
}

CreateTalentInput.defaultProps = {
  talent: defaultTalent,
};
