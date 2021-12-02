import { useState } from 'react';
import { useRouter } from 'next/router';
import { Stack, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from '../../context/auth';

interface LoginData {
    email: string,
    password: string,
    passwordVisible: boolean,
}

interface Validation {
    email: boolean,
    password: boolean
}

export default function SignIn() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
    passwordVisible: false,
  });

  const [validation, setValidation] = useState<Validation>({
    email: false,
    password: false,
  });

  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<{ message: String, status: Number}>();

  const { signIn } = useAuth();
  const handlePasswordVisible = () => {
    setLoginData({
      ...loginData,
      passwordVisible: !loginData.passwordVisible,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange = (prop: keyof LoginData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [prop]: event.target.value });
  };

  const handleSubmitForm = async () => {
    if (loginData.email && loginData.password) {
      setLoading(true);
      const { error } = await signIn({
        email: loginData.email,
        password: loginData.password,
      })
        .then((response: any) => {
          setLoading(false);
          return response;
        });
      if (error) return setAuthError(error);
      return router.push('/myprofile');
    }
    return setValidation({
      email: loginData.email.length < 1,
      password: loginData.password.length < 1,
    });
  };

  return (
    <section className="bg-gray-100 mx-auto flex-grow flex items-center justify-center flex-col px-3">
      <div className="bg-white w-full rounded-lg px-5 py-5 shadow-lg">
        <h1 className="text-2xl text-center font-semibold text-blue-600 mb-1">Selamat datang di Kolaborative!</h1>
        <h2 className="text-center text-gray-600 mb-5 text-sm">Login to experience the most power of collaboration tools</h2>
        {
          authError
          && (
            <div className="p-2 bg-red-50 border border-red-100 rounded-md mb-3 text-xs -mt-2 text-red-800">
              { authError.message }
            </div>
          )
        }
        <Stack direction="column" spacing={2} className="w-full">
          <TextField
            id="email"
            name="email"
            variant="outlined"
            label="Email"
            size="small"
            color="warning"
            focused={validation.email}
            onChange={handleChange('email')}
            required
            fullWidth
          />
          <FormControl sx={{ m: 1 }} variant="outlined" size="small" required fullWidth focused={validation.password}>
            <InputLabel htmlFor="outlined-adornment-password" color="warning" focused={validation.password}>Password</InputLabel>
            <OutlinedInput
              fullWidth
              id="password"
              name="password"
              color="warning"
              type={loginData.passwordVisible ? 'text' : 'password'}
              value={loginData.password}
              onChange={handleChange('password')}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handlePasswordVisible}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {loginData.passwordVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )}
              label="Password"
            />
          </FormControl>
          <LoadingButton loading={loading} variant="contained" onClick={handleSubmitForm}>
            Login
          </LoadingButton>
        </Stack>

      </div>
    </section>
  );
}
