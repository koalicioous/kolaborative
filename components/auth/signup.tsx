import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Stack,
  TextField,
  IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  InputLabel,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from '../../context/auth';

interface NewUserData {
    email: string,
    password: string,
    passwordConfirmation: string,
    passwordVisible: boolean,
}

interface Validation {
  email: boolean,
  password: boolean,
  passwordConfirmation: boolean,
  passwordMatch: boolean,
}

interface SignupComponentProps {
  handleChangeState: () => void;
}

export default function SignUpComponent({ handleChangeState }: SignupComponentProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<{ message: String, status: Number}>();
  const [newUserData, setNewUserData] = useState<NewUserData>({
    email: '',
    password: '',
    passwordConfirmation: '',
    passwordVisible: false,
  });

  const [validation, setValidation] = useState<Validation>({
    email: false,
    password: false,
    passwordConfirmation: false,
    passwordMatch: false,
  });

  const handlePasswordVisible = () => {
    setNewUserData({
      ...newUserData,
      passwordVisible: !newUserData.passwordVisible,
    });
  };

  const handleChange = (prop: keyof NewUserData) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewUserData({ ...newUserData, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const router = useRouter();
  const { signUp } = useAuth();

  const handleSubmitForm = async () => {
    const passwordMatch = newUserData.password === newUserData.passwordConfirmation;
    if (newUserData.email
        && newUserData.password
        && passwordMatch
    ) {
      setLoading(true);
      const { error } = await signUp({
        email: newUserData.email,
        password: newUserData.password,
      })
        .then((response: any) => {
          setLoading(false);
          return response;
        });
      if (error) return setAuthError(error);
      return router.push('/myprofile');
    }
    return setValidation({
      email: newUserData.email.length < 1,
      password: newUserData.password.length < 1,
      passwordConfirmation: newUserData.passwordConfirmation.length < 1,
      passwordMatch: !passwordMatch,
    });
  };

  return (
    <>
      <h1 className="text-2xl text-center font-semibold text-blue-600 mb-1">Buat Akun Baru</h1>
      <h2 className="text-center text-gray-600 mb-5 text-sm">Bringing your great ideas come true</h2>
      {
        authError
        && (
          <div className="p-2 bg-red-50 border border-red-100 rounded-md mb-3 text-xs -mt-2 text-red-800">
            { authError.message }
          </div>
        )
      }
      <Stack direction="column" spacing={2} className="w-full mb-3">
        <TextField
          id="email"
          name="email"
          variant="outlined"
          label="Email"
          size="small"
          helperText={validation.email ? 'Email tidak boleh kosong' : ''}
          error={validation.email}
          value={newUserData.email}
          onChange={handleChange('email')}
          required
          fullWidth
        />
        <FormControl sx={{ m: 1 }} variant="outlined" size="small" required fullWidth error={validation.password || validation.passwordMatch}>
          <InputLabel htmlFor="outlined-adornment-password" error={validation.password || validation.passwordMatch}>Password</InputLabel>
          <OutlinedInput
            fullWidth
            id="password"
            name="password"
            type={newUserData.passwordVisible ? 'text' : 'password'}
            value={newUserData.password}
            onChange={handleChange('password')}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordVisible}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {newUserData.passwordVisible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )}
            label="Password"
          />
          <FormHelperText>
            {
              [validation.password ? 'Konfirmasi password tidak boleh kosong' : undefined,
                validation.passwordMatch ? 'Password tidak sama' : undefined].filter((value) => value !== undefined).join(', ')
            }
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="outlined" size="small" required fullWidth error={validation.passwordConfirmation || validation.passwordMatch}>
          <InputLabel htmlFor="outlined-adornment-password" error={validation.passwordConfirmation || validation.passwordMatch}>Konfirmasi Password</InputLabel>
          <OutlinedInput
            fullWidth
            id="passwordConfirmation"
            name="passwordConfirmation"
            type={newUserData.passwordVisible ? 'text' : 'password'}
            value={newUserData.passwordConfirmation}
            onChange={handleChange('passwordConfirmation')}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordVisible}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {newUserData.passwordVisible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )}
            label="passwordConfirmation"
          />
          <FormHelperText>
            {
              [validation.passwordConfirmation ? 'Konfirmasi password tidak boleh kosong' : undefined,
                validation.passwordMatch ? 'Password tidak sama' : undefined].filter((value) => value !== undefined).join(', ')
            }
          </FormHelperText>
        </FormControl>
        <LoadingButton loading={loading} variant="contained" onClick={handleSubmitForm}>
          Register
        </LoadingButton>
        <button type="button" className="text-xs text-blue-600 hover:text-blue-700 font-medium" onClick={() => handleChangeState()}>
          Sudah punya akun? Klik untuk login
        </button>
      </Stack>
    </>
  );
}
