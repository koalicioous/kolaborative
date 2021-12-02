import { useState } from 'react';
import LoginComponent from './login';
import SignUpComponent from './signup';

enum AuthenticationState {
    'REGISTER' = 'REGISTER',
    'LOGIN' = 'LOGIN',
}

export default function Authentication() {
  const [authState, setAuthState] = useState<AuthenticationState>(AuthenticationState.LOGIN)

  const handleChangeState = () => {
    if (authState === AuthenticationState.LOGIN) return setAuthState(AuthenticationState.REGISTER);
    return setAuthState(AuthenticationState.LOGIN);
  };

  return (
    <section className="bg-gray-50 mx-auto max-w-lg flex-grow flex items-center justify-center flex-col px-3">
      <div className="bg-white w-full rounded-lg px-5 py-5 shadow-lg">
        {
          authState === AuthenticationState.LOGIN
          ? <LoginComponent handleChangeState={handleChangeState} />
          : <SignUpComponent />
        }
      </div>
    </section>
  );
}
