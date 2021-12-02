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
    const session = supabase.auth.session();

    if (session?.user) {
      setUser(session?.user);
    }
    setLoading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, authChangeSession) => {
        setUser(authChangeSession?.user ?? null);
        setLoading(false);
      },
    );

    return () => listener?.unsubscribe();
  }, []);

  const value = {
    signUp: (data: any) => supabase.auth.signUp(data),
    signIn: (data: any) => supabase.auth.signIn(data),
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
