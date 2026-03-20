'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [blogCount, setBlogCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/blog').then(r => r.json()).then(data => setBlogCount(Array.isArray(data) ? data.length : 0));
  }, []);

  const cards = [
    { icon: '📝', label: 'Artykuły na blogu', value: blogCount !== null ? String(blogCount) : '...', href: '/admin/blog', color: '#c084fc' },
    { icon: '🎓', label: 'Szkolenia', value: '5', href: '/admin/szkolenia', color: '#60a5fa' },
    { icon: '👤', label: 'Strona o mnie', value: '1', href: '/admin/o-mnie', color: '#34d399' },
  ];

  const quickActions = [
    { label: '✏️ Nowy artykuł', href: '/admin/blog/new', primary: true },
    { label: '🎓 Edytuj szkolenia', href: '/admin/szkolenia', primary: false },
    { label: '👤 Edytuj O mnie', href: '/admin/o-mnie', primary: false },
  ];

  return (
    <div style={{ padding: 32, maxWidth: 1000 }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 700, margin: 0 }}>Witaj, Joanna! 👋</h1>
        <p style={{ color: '#555', marginTop: 8, fontSize: 15 }}>Co dzisiaj chcesz zaktualizować?</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
        {cards.map(card => (
          <Link key={card.href} href={card.href} style={{ textDecoration: 'none' }}>
            <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 12, padding: 20, cursor: 'pointer', transition: 'border-color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = card.color + '66')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e1e1e')}
            >
              <div style={{ fontSize: 24, marginBottom: 8 }}>{card.icon}</div>
              <div style={{ color: card.color, fontSize: 32, fontWeight: 700 }}>{card.value}</div>
              <div style={{ color: '#666', fontSize: 13, marginTop: 4 }}>{card.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 12, padding: 24 }}>
        <h2 style={{ color: '#fff', fontSize: 16, fontWeight: 600, margin: '0 0 16px' }}>Szybkie akcje</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {quickActions.map(action => (
            <Link key={action.href} href={action.href} style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '10px 20px',
                borderRadius: 8,
                border: action.primary ? 'none' : '1px solid #2a2a2a',
                background: action.primary ? '#c084fc' : 'transparent',
                color: action.primary ? '#000' : '#aaa',
                fontWeight: action.primary ? 700 : 400,
                fontSize: 14,
                cursor: 'pointer',
              }}>
                {action.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
