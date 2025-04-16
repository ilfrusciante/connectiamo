import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import Navbar from '../components/Navbar';

export default function Profilo() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setUserData(data);
      }
    });
  }, []);

  if (!userData) return <p>Caricamento profilo...</p>;

  return (
    <div>
      <Navbar />
      <div style={{ padding: 20 }}>
        <h2>Profilo Utente</h2>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Ruolo:</strong> {userData.role}</p>
      </div>
    </div>
  );
}
