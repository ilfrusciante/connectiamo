import Navbar from '../components/Navbar'; // <--- Import in cima

export default function Home() {
  return (
    <div>
      <Navbar />  {/* <--- Qui viene mostrata la barra */}
      <div style={{ padding: 20 }}>
        <h1>Benvenuto su Connectiamo</h1>
        <p>La piattaforma per connettere segnalatori e professionisti.</p>
      </div>
    </div>
  );
}
