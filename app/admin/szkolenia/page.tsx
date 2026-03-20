'use client';
import Link from 'next/link';

const szkolenia = [
  { id: 'basic', name: 'BASIC', icon: '🌱' },
  { id: 'intermediate', name: 'INTERMEDIATE', icon: '⭐' },
  { id: 'advanced', name: 'ADVANCED', icon: '🔥' },
  { id: 'abc-dynamiki', name: 'ABC DYNAMIKI', icon: '💫' },
  { id: 'dynamika-2-0', name: 'DYNAMIKA 2.0', icon: '⚡' },
];

export default function SzkoleniaPage() {
  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ color: '#fff', fontSize: 24, fontWeight: 700, margin: '0 0 24px' }}>🎓 Szkolenia</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 14 }}>
        {szkolenia.map(s => (
          <Link key={s.id} href={`/admin/szkolenia/${s.id}`} style={{ textDecoration: 'none' }}>
            <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 12, padding: 24, cursor: 'pointer', transition: 'all 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#c084fc44'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e'; }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>{s.name}</div>
              <div style={{ color: '#555', fontSize: 13, marginTop: 4 }}>Kliknij aby edytować →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
