'use client';
import { useEffect, useState } from 'react';

interface OmnieDane {
  title: string;
  name: string;
  bio: string;
  experience: string;
  certifications: string[];
  location: string;
  instagram: string;
  email: string;
}

export default function AdminOMniePage() {
  const [data, setData] = useState<OmnieDane | null>(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const [newCert, setNewCert] = useState('');

  useEffect(() => {
    fetch('/api/o-mnie').then(r => r.json()).then(setData);
  }, []);

  async function handleSave() {
    if (!data) return;
    setSaving(true);
    const res = await fetch('/api/o-mnie', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    setToast(res.ok ? 'Zapisano!' : 'Błąd zapisu');
    setTimeout(() => setToast(''), 3000);
    setSaving(false);
  }

  const inputStyle = { background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: 8, padding: '10px 14px', color: '#fff', fontSize: 14, width: '100%', outline: 'none', boxSizing: 'border-box' as const };
  const labelStyle = { color: '#888', fontSize: 12, marginBottom: 6, display: 'block' };

  if (!data) return <div style={{ padding: 32, color: '#555' }}>Ładowanie...</div>;

  return (
    <div style={{ padding: 32, maxWidth: 700 }}>
      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, background: '#34d399', color: '#000', padding: '10px 20px', borderRadius: 8, fontWeight: 700, zIndex: 9999 }}>
          {toast}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <h1 style={{ color: '#fff', fontSize: 24, fontWeight: 700, margin: 0 }}>👤 O mnie</h1>
        <button onClick={handleSave} disabled={saving} style={{ padding: '10px 24px', background: '#c084fc', color: '#000', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
          {saving ? 'Zapisywanie...' : 'Zapisz zmiany'}
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div>
            <label style={labelStyle}>Imię i nazwisko</label>
            <input style={inputStyle} value={data.name} onChange={e => setData(d => d ? { ...d, name: e.target.value } : d)} />
          </div>
          <div>
            <label style={labelStyle}>Lokalizacja</label>
            <input style={inputStyle} value={data.location} onChange={e => setData(d => d ? { ...d, location: e.target.value } : d)} />
          </div>
          <div>
            <label style={labelStyle}>Instagram</label>
            <input style={inputStyle} value={data.instagram} onChange={e => setData(d => d ? { ...d, instagram: e.target.value } : d)} />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input style={inputStyle} value={data.email} onChange={e => setData(d => d ? { ...d, email: e.target.value } : d)} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Bio (opis główny)</label>
          <textarea style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }} value={data.bio} onChange={e => setData(d => d ? { ...d, bio: e.target.value } : d)} />
        </div>

        <div>
          <label style={labelStyle}>Doświadczenie</label>
          <textarea style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} value={data.experience} onChange={e => setData(d => d ? { ...d, experience: e.target.value } : d)} />
        </div>

        <div>
          <label style={labelStyle}>Certyfikaty i kwalifikacje</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
            {data.certifications.map((cert, idx) => (
              <div key={idx} style={{ display: 'flex', gap: 8 }}>
                <input
                  style={{ ...inputStyle, flex: 1 }}
                  value={cert}
                  onChange={e => {
                    const newCerts = [...data.certifications];
                    newCerts[idx] = e.target.value;
                    setData(d => d ? { ...d, certifications: newCerts } : d);
                  }}
                />
                <button onClick={() => setData(d => d ? { ...d, certifications: d.certifications.filter((_, i) => i !== idx) } : d)}
                  style={{ padding: '8px 12px', background: 'transparent', border: '1px solid #3a1a1a', borderRadius: 6, color: '#f87171', cursor: 'pointer' }}>✕</button>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input style={{ ...inputStyle, flex: 1 }} value={newCert} onChange={e => setNewCert(e.target.value)} placeholder="Dodaj certyfikat..." onKeyDown={e => { if (e.key === 'Enter' && newCert.trim()) { setData(d => d ? { ...d, certifications: [...d.certifications, newCert.trim()] } : d); setNewCert(''); } }} />
            <button onClick={() => { if (newCert.trim()) { setData(d => d ? { ...d, certifications: [...d.certifications, newCert.trim()] } : d); setNewCert(''); } }}
              style={{ padding: '10px 16px', background: '#c084fc', color: '#000', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>+ Dodaj</button>
          </div>
        </div>
      </div>
    </div>
  );
}
