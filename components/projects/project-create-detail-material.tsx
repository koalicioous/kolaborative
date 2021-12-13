import TextField from '@mui/material/TextField';
import useSWR from 'swr';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import DatePicker from '@mui/lab/DatePicker';
import Divider from '@mui/material/Divider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import supabase from '../../lib/supabase/client';
import { Goal } from '../../lib/newProject/data/project';
import { useStore } from '../../lib/newProject/stores/createProject';
import { NewProjectDetailActionType } from '../../lib/newProject/actions/NewProjectDetailAction';
import { Event } from '../../lib/filterProject/data/filters';

interface OptionType {
  id: string,
  name: string,
  inputValue?: string,
  title?: string,
}

const filterFetcher = async (field: string) => {
  const { data } = await supabase.from<Event|OptionType>(field).select('*');
  return data;
};

const filter = createFilterOptions<any>();

export default function ProjectCreateDetailMaterial() {
  const { project, dispatch } = useStore();
  const { data: events } = useSWR('events', filterFetcher);

  return (
    <section className="max-w-lg mx-auto bg-white p-3">
      <Stack spacing={2} className="mb-3">
        <TextField
          id="name"
          fullWidth
          label="Nama Proyek"
          required
          variant="outlined"
          size="small"
          value={project.name}
          onChange={(e) => dispatch({
            type: NewProjectDetailActionType.UPDATE_FIELD,
            field: 'name',
            payload: e.target.value,
          })}
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          value={project.isPrivate}
          onChange={() => dispatch({
            type: NewProjectDetailActionType.TOGGLE_CHECKBOX,
            field: 'isPrivate',
          })}
          label={<div className="text-xs">Hanya tampilkan kepada pengguna di institusi saya.</div>}
        />
        <Autocomplete
          value={project.event}
          onChange={(event, newValue: any) => {
            if (typeof newValue === 'string') {
              dispatch({
                type: NewProjectDetailActionType.UPDATE_FIELD,
                field: 'event',
                payload: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              dispatch({
                type: NewProjectDetailActionType.UPDATE_FIELD,
                field: 'event',
                payload: newValue.inputValue,
              });
            } else {
              dispatch({
                type: NewProjectDetailActionType.UPDATE_FIELD,
                field: 'event',
                payload: newValue,
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
          options={events!}
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
            <TextField {...params} label="Event yang diikuti proyek ini" />
          )}
        />
        {/* <TextField
          id="event"
          fullWidth
          label="Event yang diikuti proyek ini"
          variant="outlined"
          size="small"
          value={project.event}
          onChange={(e) => dispatch({
            type: NewProjectDetailActionType.UPDATE_FIELD,
            field: 'event',
            payload: e.target.value,
          })}
        /> */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Deadline Pendaftaran"
            inputFormat="dd/MM/yyyy"
            value={project.registrationDeadline || null}
            onChange={(value) => dispatch({
              type: NewProjectDetailActionType.UPDATE_FIELD,
              field: 'registrationDeadline',
              payload: value,
            })}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField fullWidth {...params} required size="small" helperText={null} />}
          />
        </LocalizationProvider>
        <TextField
          id="description"
          label="Deskripsi Proyek"
          required
          placeholder=""
          multiline
          rows={8}
          size="small"
          value={project.description}
          onChange={(e) => dispatch({
            type: NewProjectDetailActionType.UPDATE_FIELD,
            field: 'description',
            payload: e.target.value,
          })}
        />
        <Divider />
        <Typography component="div">
          Goals Proyek
          <span className="text-xs ml-2 text-gray-400">(Optional)</span>
        </Typography>
        {
          project.goals.length > 0
          && project.goals.map((goal: Goal, index: number) => (
            <div key={goal.id} className="flex items-center">
              <FormControl fullWidth>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  size="small"
                  value={goal.description}
                  placeholder="Menjuarai PIMNAS 2021"
                  onChange={(e) => dispatch({
                    type: NewProjectDetailActionType.EDIT_GOAL_DESCRIPTION,
                    field: goal.id,
                    payload: e.target.value,
                  })}
                  startAdornment={<InputAdornment position="start">{`${index + 1}.`}</InputAdornment>}
                />
              </FormControl>
              <IconButton
                aria-label="delete"
                onClick={() => dispatch({
                  type: NewProjectDetailActionType.REMOVE_GOAL,
                  field: 'goals',
                  payload: goal.id,
                })}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          ))
        }
        <Button
          variant="outlined"
          onClick={() => dispatch({
            type: NewProjectDetailActionType.INSERT_GOALS,
            field: 'goals',
          })}
        >
          Tambah Goals Proyek
        </Button>
        <Divider />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Tanggal Mulai Proyek"
            inputFormat="dd/MM/yyyy"
            value={project.startDate || null}
            onChange={(value) => dispatch({
              type: NewProjectDetailActionType.UPDATE_FIELD,
              field: 'startDate',
              payload: value,
            })}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField fullWidth {...params} size="small" />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Tanggal Selesai Proyek"
            inputFormat="dd/MM/yyyy"
            value={project.finishDate || null}
            onChange={(value) => dispatch({
              type: NewProjectDetailActionType.UPDATE_FIELD,
              field: 'finishDate',
              payload: value,
            })}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField fullWidth {...params} size="small" />}
          />
        </LocalizationProvider>
      </Stack>
    </section>
  );
}
