'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewBlogPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const [post, setPost] = useState({
    slug: '',
    title: '',
    excerpt: '',
    date: new Date().toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' }),
    category: 'Kariera',
    readTime: '5 min',
    image: '/joanna.jpg',
    published: false,
    content: '',
  });

  function handleTitleChange(title: string) {
    const slug = title.toLowerCase()
      .replace(/ą/g, 'a').replace(/ę/g, 'e').replace(/ó/g, 'o').replace(/ś/g, 's')
      .replace(/ł/g, 'l').replace(/ż/g, 'z').replace(/ź/g, 'z').replace(/ć/g, 'c').replace(/ń/g, 'n')
      .replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
    setPost(p => ({ ...p, title, slug }));
  }

  async function handleSave(publish = false) {
    setSaving(true);
    const data = { ...post, published: publish };
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setToast(publish ? 'Opublikowano!' : 'Zapisano szkic!');
      setTimeout(() => router.push('/admin/blog'), 1500);
    } else {
      setToast('Błąd zapisu');
      setSaving(false);
    }
  }

  const inputStyle = { background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: 8, padding: '10px 14px', color: '#fff', fontSize: 14, width: '100%', outline: 'none', boxSizing: 'border-box' as const };
  const labelStyle = { color: '#888', fontSize: 12, marginBottom: 6, display: 'block' };

  return (
    <div style={{ padding: 32, maxWidth: 900 }}>
      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, background: '#34d399', color: '#000', padding: '10px 20px', borderRadius: 8, fontWeight: 700, zIndex: 9999 }}>
          {toast}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <div>
          <button onClick={() => router.back()} style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: 14, marginBottom: 8, padding: 0 }}>← Wróć</button>
          <h1 style={{ color: '#fff', fontSize: 24, fontWeight: 700, margin: 0 }}>Nowy artykuł</h1>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => handleSave(false)} disabled={saving} style={{ padding: '10px 20px', background: 'transparent', border: '1px solid #2a2a2a', borderRadius: 8, color: '#aaa', fontSize: 14, cursor: 'pointer' }}>
            Zapisz szkic
          </button>
          <button onClick={() => handleSave(true)} disabled={saving || !post.title} style={{ padding: '10px 20px', background: post.title ? '#c084fc' : '#1a1a1a', color: post.title ? '#000' : '#444', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: post.title ? 'pointer' : 'not-allowed' }}>
            {saving ? 'Zapisywanie...' : 'Opublikuj'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
        {/* Main */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <label style={labelStyle}>Tytuł *</label>
            <input style={{ ...inputStyle, fontSize: 18, fontWeight: 600 }} value={post.title} onChange={e => handleTitleChange(e.target.value)} placeholder="Tytuł artykułu..." />
          </div>
          <div>
            <label style={labelStyle}>Slug (URL)</label>
            <input style={inputStyle} value={post.slug} onChange={e => setPost(p => ({ ...p, slug: e.target.value }))} placeholder="slug-artykulu" />
          </div>
          <div>
            <label style={labelStyle}>Krótki opis (excerpt)</label>
            <textarea style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} value={post.excerpt} onChange={e => setPost(p => ({ ...p, excerpt: e.target.value }))} placeholder="Krótki opis artykułu..." />
          </div>
          <div>
            <label style={labelStyle}>Treść artykułu</label>
            <textarea
              style={{ ...inputStyle, minHeight: 400, resize: 'vertical', fontFamily: 'monospace', fontSize: 13, lineHeight: '1.6' }}
              value={post.content}
              onChange={e => setPost(p => ({ ...p, content: e.target.value }))}
              placeholder="Wpisz treść artykułu... (obsługuje Markdown: **pogrubienie**, # Nagłówki, - listy)"
            />
            <p style={{ color: '#444', fontSize: 11, marginTop: 4 }}>Obsługuje Markdown: **pogrubienie**, *kursywa*, # Nagłówek, - lista</p>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 10, padding: 18 }}>
            <h3 style={{ color: '#fff', fontSize: 14, fontWeight: 600, margin: '0 0 14px' }}>Ustawienia</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <label style={labelStyle}>Kategoria</label>
                <select style={inputStyle} value={post.category} onChange={e => setPost(p => ({ ...p, category: e.target.value }))}>
                  <option>Kariera</option>
                  <option>Technika</option>
                  <option>Metodyka</option>
                  <option>Inne</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Data publikacji</label>
                <input style={inputStyle} value={post.date} onChange={e => setPost(p => ({ ...p, date: e.target.value }))} />
              </div>
              <div>
                <label style={labelStyle}>Czas czytania</label>
                <input style={inputStyle} value={post.readTime} onChange={e => setPost(p => ({ ...p, readTime: e.target.value }))} placeholder="5 min" />
              </div>
              <div>
                <label style={labelStyle}>Obrazek (URL)</label>
                <input style={inputStyle} value={post.image} onChange={e => setPost(p => ({ ...p, image: e.target.value }))} placeholder="/joanna.jpg" />
              </div>
            </div>
          </div>

          {post.image && (
            <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 10, overflow: 'hidden' }}>
              <img src={post.image} alt="" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
