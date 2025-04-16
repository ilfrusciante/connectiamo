import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
      <Link href="/" style={{ marginRight: 15 }}>Home</Link>
      <Link href="/signup" style={{ marginRight: 15 }}>Registrati</Link>
      <Link href="/login" style={{ marginRight: 15 }}>Login</Link>
      {user && (
        <>
          <Link href="/profilo" style={{ marginRight: 15 }}>Profilo</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}
