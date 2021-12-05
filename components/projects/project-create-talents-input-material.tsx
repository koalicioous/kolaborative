import {
  useState, Dispatch, SetStateAction, useRef, useEffect,
} from 'react';
import useSWR from 'swr';
import { v4 as uuid4 } from 'uuid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DeleteIconSolid from '../ui/icons/solid/delete-icon';
import { Talent } from '../../lib/newProject/data/project';
import { useStore } from '../../lib/newProject/stores/createProject';
import { NewProjectTalentActionType } from '../../lib/newProject/actions/NewProjectTalentsAction';
import supabase from '../../lib/supabase/client';
import { Major } from '../../lib/filterProject/data/filters';

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

interface OptionType {
  id: string,
  name: string,
  inputValue?: string,
  title?: string,
}

const filterFetcher = async (field: string) => {
  const { data } = await supabase.from<Major|OptionType>(field).select('*');
  return data;
};

const filter = createFilterOptions<any>();

export default function CreateTalentInputMaterial(
  {
    isEditing, talent, editTalent, cancelEdit,
  } : CreateTalentInputProps,
) {
  const [newTalent, setNewTalent] = useState<Talent>(talent || defaultTalent);
  const [newSkill, setNewSkill] = useState<string>('');
  const [validation, setValidation] = useState({
    major: false,
    description: false,
  });
  const { data: majors } = useSWR('majors', filterFetcher);
  // const { data: skills } = useSWR('skills', filterFetcher);

  const [edit] = useState<boolean|undefined>(isEditing);
  const { project, dispatch } = useStore();
  const majorName = useRef<HTMLInputElement>(null);

  const handleAddSkill = (skill: string) => {
    if (newTalent.skills.includes(skill)) return false;
    setNewTalent({
      ...newTalent,
      skills: [...newTalent.skills, skill],
    });
    return setNewSkill('');
  };

  const handleDeleteSkill = (skill: string) => setNewTalent({
    ...newTalent,
    skills: [...newTalent.skills.filter((item) => item !== skill)],
  });

  const newSkillKeyPress = (event: any) => {
    if (event.key === ',' || event.key === 'Enter') {
      handleAddSkill(newSkill);
    }
  };

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

  useEffect(() => {
    if (majorName.current) {
      majorName.current.focus();
    }
  }, []);

  return (
    <div className={`border-b flex flex-col  ${edit || project.talents.length > 0 ? 'p-3 border rounded-md border-gray-200' : 'border-gray-100'}`}>
      <Stack spacing={2}>
        <div className="grid grid-cols-4 gap-2">
          <Autocomplete
            value={newTalent.major}
            onChange={(event, newValue: any) => {
              if (typeof newValue === 'string') {
                setNewTalent({ ...newTalent, major: newValue });
              } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setNewTalent({ ...newTalent, major: newValue.inputValue });
              } else {
                setNewTalent({
                  ...newTalent,
                  major: newValue,
                });
              }
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;
              // Suggest the creation of a new value
              const isExisting = options.some((option) => inputValue === option.name);
              if (inputValue !== '' && !isExisting) {
                filtered.push({
                  inputValue,
                  name: `Add "${inputValue}"`,
                  id: '',
                });
              }

              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={majors!}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === 'string') {
                return option;
              }
              // Add "xxx" option created dynamically
              if (option.name) {
                return option.name;
              }
              // Regular option
              return option.name;
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderOption={(props, option) => <li {...props}>{option.name}</li>}
            fullWidth
            freeSolo
            size="small"
            className="col-span-3"
            renderInput={(params) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <TextField {...params} label="Jurusan" />
            )}
          />
          {/* <TextField
            id="major"
            ref={majorName}
            label="Jurusan"
            placeholder="Pilih jurusan yang kamu butuhkan"
            variant="outlined"
            size="small"
            value={newTalent.major}
            required
            onChange={(e) => setNewTalent({ ...newTalent, major: e.target.value })}
            className="col-span-3"
            focused={validation.major}
            color="warning"
          /> */}
          <FormControl fullWidth size="small">
            <InputLabel id="amount-label" required>Jumlah</InputLabel>
            <Select
              labelId="amount-label"
              id="amount"
              value={String(newTalent.amount)}
              label="Jumlah"
              onChange={(e: SelectChangeEvent) => setNewTalent({
                ...newTalent, amount: parseInt(String(e.target.value), 10),
              })}
            >
              {
              [...Array(10)].map((item, index) => (
                <MenuItem value={index + 1} key={Math.random()}>{ index + 1}</MenuItem>
              ))
            }
            </Select>
          </FormControl>
        </div>
        <TextField
          id="jobDescription"
          label="Deskripsi Pekerjaan"
          required
          placeholder="Jelaskan pekerjaan yang perlu dilakukan role ini"
          multiline
          rows={5}
          size="small"
          value={newTalent.description}
          onChange={(e) => {
            setNewTalent({ ...newTalent, description: e.target.value });
          }}
          color="warning"
          focused={validation.description}
        />
        <div>
          <div className="mb-2">
            <span className="text-sm font-medium text-gray-700">
              Keahlian yang diharapkan
              <span className="ml-1 text-gray-400">(misal: Web Programming)</span>
            </span>
          </div>
          <div className="bg-gray-50 px-2 py-1 rounded-md">
            {
              newTalent.skills.length < 1
              && <p className="text-sm text-gray-500">Belum ada skill yang ditambahkan</p>
            }
            {
              newTalent.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  onDelete={() => handleDeleteSkill(skill)}
                  color="primary"
                  variant="outlined"
                  className="mr-2 mt-2"
                />
              ))
            }
          </div>
        </div>
        <TextField
          id="newTalentSkill"
          label="Tambahkan skill yang dibutuhkan"
          size="small"
          value={newSkill}
          onKeyPress={newSkillKeyPress}
          onChange={(event:any) => {
            if (event.nativeEvent.data !== ',') setNewSkill(event.target.value);
          }}
          helperText="Tekan koma atau enter untuk menambahkan"
        />
      </Stack>
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
            className="-mx-3 -mb-3 mt-3 py-2 border-t border-gray-200 text-sm text-gray-500 font-medium bg-gray-100 hover:bg-gray-200 transition-all"
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

CreateTalentInputMaterial.defaultProps = {
  talent: defaultTalent,
};
