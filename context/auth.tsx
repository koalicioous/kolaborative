import {
  useContext,
  useState,
  useEffect,
  ReactElement,
  createContext,
} from 'react';
import supabase from '../lib/supabase/client';

const AuthContext = createContext<any>({});

export function AuthProvider({ children }: {children: ReactElement | ReactElement[]}) {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const currentSession = supabase.auth.session();

    if (currentSession?.user) {
      setUser(currentSession?.user);
    }
    setLoading(false);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        fetch('/api/auth', {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          credentials: 'same-origin',
          body: JSON.stringify({ event, session }),
        }).then((res) => {
          res.json();
          setLoading(false);
        })
          .catch(() => setLoading(false));
      },
    );

    return () => authListener?.unsubscribe();
  }, []);

  const value = {
    signUp: (data: any) => supabase.auth.signUp(data),
    signIn: (data: any) => supabase.auth.signIn(data),
    authProvider: (data: any) => supabase.auth.signIn({
      provider: data,
    }),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
