import { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';

interface LoginData {
    email: string,
    password: string,
    passwordVisible: boolean,
}

export default function SignIn() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
    passwordVisible: false,
  });

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

  return (
    <section className="bg-gray-100 mx-auto flex-grow flex items-center justify-center flex-col px-3">
      <div className="bg-white w-full rounded-lg px-5 py-5 shadow-lg">
        <h1 className="text-2xl text-center font-semibold text-blue-600 mb-1">Selamat datang di Kolaborative!</h1>
        <h2 className="text-center text-gray-600 mb-5 text-sm">Login to experience the most power of collaboration tools</h2>
        <Stack direction="column" spacing={2} className="w-full">
          <TextField
            id="email"
            name="email"
            variant="outlined"
            label="Email"
            size="small"
            onChange={handleChange('email')}
            required
            fullWidth
          />
          <FormControl sx={{ m: 1 }} variant="outlined" size="small" required fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              fullWidth
              id="password"
              name="password"
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
          <Button variant="contained">
            Login
          </Button>
        </Stack>

      </div>
    </section>
  );
}
