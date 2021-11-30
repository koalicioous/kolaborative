import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Divider from '@mui/material/Divider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Button from '@mui/material/Button';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Goal } from '../../lib/newProject/data/project';
import { useStore } from '../../lib/newProject/stores/createProject';
import { NewProjectDetailActionType } from '../../lib/newProject/actions/NewProjectDetailAction';

export default function ProjectCreateDetailMaterial() {
  const { project, dispatch } = useStore();

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
          label={<div className="text-xs">Hanya tampilkan kepada pengguna di institusi saya.</div>}
        />
        <TextField
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
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Batas Pendaftaran"
            inputFormat="dd/MM/yyyy"
            value={project.registrationDeadline || new Date().toLocaleDateString()}
            onChange={(value) => dispatch({
              type: NewProjectDetailActionType.UPDATE_FIELD,
              field: 'registrationDeadline',
              payload: value,
            })}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField fullWidth {...params} required size="small" />}
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
          <DesktopDatePicker
            label="Tanggal Mulai Proyek"
            inputFormat="dd/MM/yyyy"
            value={project.registrationDeadline || null}
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
          <DesktopDatePicker
            label="Tanggal Selesai Proyek"
            inputFormat="dd/MM/yyyy"
            value={project.registrationDeadline || null}
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
