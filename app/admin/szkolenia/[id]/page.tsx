'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface Szkolenie {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  nextDate: string;
  description: string;
  program: string[];
  image: string;
}

export default function EditSzkoleniePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [data, setData] = useState<Szkolenie | null>(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const [newPoint, setNewPoint] = useState('');

  useEffect(() => {
    fetch(`/api/szkolenia/${id}`).then(r => r.json()).then(setData);
  }, [id]);

  async function handleSave() {
    if (!data) return;
    setSaving(true);
    const res = await fetch(`/api/szkolenia/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    setToast(res.ok ? 'Zapisano!' : 'Błąd zapisu');
    setTimeout(() => setToast(''), 3000);
    setSaving(false);
  }

  function addProgramPoint() {
    if (!newPoint.trim() || !data) return;
    setData(d => d ? { ...d, program: [...d.program, newPoint.trim()] } : d);
    setNewPoint('');
  }

  function removeProgramPoint(idx: number) {
    setData(d => d ? { ...d, program: d.program.filter((_, i) => i !== idx) } : d);
  }

  const inputStyle = { background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: 8, padding: '10px 14px', color: '#fff', fontSize: 14, width: '100%', outline: 'none', boxSizing: 'border-box' as const };
  const labelStyle = { color: '#888', fontSize: 12, marginBottom: 6, display: 'block' };

  if (!data) return <div style={{ padding: 32, color: '#555' }}>Ładowanie...</div>;

  return (
    <div style={{ padding: 32, maxWidth: 800 }}>
      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, background: '#34d399', color: '#000', padding: '10px 20px', borderRadius: 8, fontWeight: 700, zIndex: 9999 }}>
          {toast}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <div>
          <button onClick={() => router.back()} style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: 14, marginBottom: 8, padding: 0 }}>← Wróć</button>
          <h1 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>Edytuj: {data.title}</h1>
        </div>
        <button onClick={handleSave} disabled={saving} style={{ padding: '10px 24px', background: '#c084fc', color: '#000', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
          {saving ? 'Zapisywanie...' : 'Zapisz zmiany'}
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div>
            <label style={labelStyle}>Tytuł</label>
            <input style={inputStyle} value={data.title} onChange={e => setData(d => d ? { ...d, title: e.target.value } : d)} />
          </div>
          <div>
            <label style={labelStyle}>Podtytuł</label>
            <input style={inputStyle} value={data.subtitle} onChange={e => setData(d => d ? { ...d, subtitle: e.target.value } : d)} />
          </div>
          <div>
            <label style={labelStyle}>Cena (zł)</label>
            <input style={inputStyle} value={data.price} onChange={e => setData(d => d ? { ...d, price: e.target.value } : d)} />
          </div>
          <div>
            <label style={labelStyle}>Czas trwania</label>
            <input style={inputStyle} value={data.duration} onChange={e => setData(d => d ? { ...d, duration: e.target.value } : d)} />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={labelStyle}>Następny termin</label>
            <input style={inputStyle} value={data.nextDate} onChange={e => setData(d => d ? { ...d, nextDate: e.target.value } : d)} placeholder="np. 15-16 marca 2026, Poznań" />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Opis szkolenia</label>
          <textarea style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }} value={data.description} onChange={e => setData(d => d ? { ...d, description: e.target.value } : d)} />
        </div>

        <div>
          <label style={labelStyle}>Program szkolenia</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
            {data.program.map((point, idx) => (
              <div key={idx} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ color: '#555', fontSize: 13, minWidth: 20 }}>{idx + 1}.</span>
                <input
                  style={{ ...inputStyle, flex: 1 }}
                  value={point}
                  onChange={e => {
                    const newProgram = [...data.program];
                    newProgram[idx] = e.target.value;
                    setData(d => d ? { ...d, program: newProgram } : d);
                  }}
                />
                <button onClick={() => removeProgramPoint(idx)} style={{ padding: '8px 12px', background: 'transparent', border: '1px solid #3a1a1a', borderRadius: 6, color: '#f87171', cursor: 'pointer', fontSize: 13 }}>
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input style={{ ...inputStyle, flex: 1 }} value={newPoint} onChange={e => setNewPoint(e.target.value)} placeholder="Dodaj punkt programu..." onKeyDown={e => e.key === 'Enter' && addProgramPoint()} />
            <button onClick={addProgramPoint} style={{ padding: '10px 16px', background: '#c084fc', color: '#000', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>
              + Dodaj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
