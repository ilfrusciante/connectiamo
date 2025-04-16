import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('segnalatore');

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (!error && data.user) {
      await supabase.from('profiles').insert({
        id: data.user.id,
        role: role,
        email: email
      });
      router.push('/');
    } else {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Registrazione</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="segnalatore">Segnalatore</option>
        <option value="professionista">Professionista</option>
      </select>
      <br />
      <button onClick={handleSignup}>Registrati</button>
    </div>
  );
}
