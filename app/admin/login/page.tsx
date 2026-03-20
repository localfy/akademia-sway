'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const password = inputRef.current?.value || '';
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Nieprawidłowe hasło');
    }
    setLoading(false);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: 40, width: '100%', maxWidth: 380, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🌸</div>
          <h1 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>Akademia Sway</h1>
          <p style={{ color: '#555', fontSize: 13, marginTop: 6 }}>Panel administracyjny</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <input
            ref={inputRef}
            type="password"
            name="password"
            placeholder="Hasło"
            autoFocus
            autoComplete="current-password"
            style={{ background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: 8, padding: '12px 16px', color: '#fff', fontSize: 14, outline: 'none', width: '100%', boxSizing: 'border-box' }}
          />
          {error && <p style={{ color: '#f87171', fontSize: 13, margin: 0 }}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            style={{ background: loading ? '#1a1a1a' : '#c084fc', color: loading ? '#444' : '#000', border: 'none', borderRadius: 8, padding: '12px', fontWeight: 700, fontSize: 14, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Logowanie...' : 'Zaloguj się'}
          </button>
        </form>
      </div>
    </div>
  );
}
