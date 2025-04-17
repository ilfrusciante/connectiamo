import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();

    // Ascolta cambiamenti login/logout
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
      <Link href="/" style={{ marginRight: 15 }}>Home</Link>
      {!user && (
        <>
          <Link href="/signup" style={{ marginRight: 15 }}>Registrati</Link>
          <Link href="/login" style={{ marginRight: 15 }}>Login</Link>
        </>
      )}
      {user && (
        <>
          <Link href="/profilo" style={{ marginRight: 15 }}>Profilo</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}
