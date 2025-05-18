import { useState } from 'react';

export default function App() {
  const [kasse, setKasse] = useState(5000);
  const [forderungen, setForderungen] = useState(0);
  const [sichteinlagen, setSichteinlagen] = useState(5000);
  const [spareinlagen, setSpareinlagen] = useState(0);

  const bilanzsummeLinks = kasse + forderungen;
  const bilanzsummeRechts = sichteinlagen + spareinlagen;

  const betrag = 1000;

  return (
    <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <h2>Aktiva (links)</h2>
        <div>
          <strong>Kasse:</strong> {kasse.toLocaleString()} €
          <div>
            <button onClick={() => setKasse(kasse + betrag)}>+1.000 €</button>
            <button onClick={() => setKasse(Math.max(kasse - betrag, 0))}>-1.000 €</button>
          </div>
        </div>
        <div>
          <strong>Forderungen ggü. Kunden:</strong> {forderungen.toLocaleString()} €
          <div>
            <button onClick={() => setForderungen(forderungen + betrag)}>+1.000 €</button>
            <button onClick={() => setForderungen(Math.max(forderungen - betrag, 0))}>-1.000 €</button>
          </div>
        </div>
        <hr />
        <div>
          <strong>Bilanzsumme:</strong> {bilanzsummeLinks.toLocaleString()} €
        </div>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <h2>Passiva (rechts)</h2>
        <div>
          <strong>Sichteinlagen:</strong> {sichteinlagen.toLocaleString()} €
          <div>
            <button onClick={() => setSichteinlagen(sichteinlagen + betrag)}>+1.000 €</button>
            <button onClick={() => setSichteinlagen(Math.max(sichteinlagen - betrag, 0))}>-1.000 €</button>
          </div>
        </div>
        <div>
          <strong>Spareinlagen:</strong> {spareinlagen.toLocaleString()} €
          <div>
            <button onClick={() => setSpareinlagen(spareinlagen + betrag)}>+1.000 €</button>
            <button onClick={() => setSpareinlagen(Math.max(spareinlagen - betrag, 0))}>-1.000 €</button>
          </div>
        </div>
        <hr />
        <div>
          <strong>Bilanzsumme:</strong> {bilanzsummeRechts.toLocaleString()} €
        </div>
      </div>
    </div>
  );
}
