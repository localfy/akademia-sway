'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  published: boolean;
  content: string;
}

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<Post | null>(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => {
    fetch('/api/blog')
      .then(r => r.json())
      .then((posts: Post[]) => {
        const found = posts.find(p => p.slug === slug);
        if (found) setPost(found);
      });
  }, [slug]);

  async function handleSave(publish?: boolean) {
    if (!post) return;
    setSaving(true);
    const data = publish !== undefined ? { ...post, published: publish } : post;
    const res = await fetch(`/api/blog/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setToast('Zapisano!');
      setTimeout(() => setToast(''), 3000);
      if (data.slug !== slug) router.push('/admin/blog');
    } else {
      setToast('Błąd zapisu');
    }
    setSaving(false);
  }

  const inputStyle = { background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: 8, padding: '10px 14px', color: '#fff', fontSize: 14, width: '100%', outline: 'none', boxSizing: 'border-box' as const };
  const labelStyle = { color: '#888', fontSize: 12, marginBottom: 6, display: 'block' };

  if (!post) return <div style={{ padding: 32, color: '#555' }}>Ładowanie...</div>;

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
          <h1 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>Edytuj artykuł</h1>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <a href={`/blog/${slug}`} target="_blank" style={{ textDecoration: 'none' }}>
            <button style={{ padding: '10px 16px', background: 'transparent', border: '1px solid #2a2a2a', borderRadius: 8, color: '#aaa', fontSize: 13, cursor: 'pointer' }}>
              Podgląd →
            </button>
          </a>
          <button onClick={() => handleSave(false)} disabled={saving} style={{ padding: '10px 16px', background: 'transparent', border: '1px solid #2a2a2a', borderRadius: 8, color: '#aaa', fontSize: 13, cursor: 'pointer' }}>
            Szkic
          </button>
          <button onClick={() => handleSave(true)} disabled={saving} style={{ padding: '10px 20px', background: '#c084fc', color: '#000', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            {saving ? 'Zapisywanie...' : post.published ? 'Zapisz' : 'Opublikuj'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <label style={labelStyle}>Tytuł</label>
            <input style={{ ...inputStyle, fontSize: 18, fontWeight: 600 }} value={post.title} onChange={e => setPost(p => p ? { ...p, title: e.target.value } : p)} />
          </div>
          <div>
            <label style={labelStyle}>Slug (URL)</label>
            <input style={inputStyle} value={post.slug} onChange={e => setPost(p => p ? { ...p, slug: e.target.value } : p)} />
          </div>
          <div>
            <label style={labelStyle}>Krótki opis</label>
            <textarea style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} value={post.excerpt} onChange={e => setPost(p => p ? { ...p, excerpt: e.target.value } : p)} />
          </div>
          <div>
            <label style={labelStyle}>Treść artykułu</label>
            <textarea
              style={{ ...inputStyle, minHeight: 450, resize: 'vertical', fontFamily: 'monospace', fontSize: 13, lineHeight: '1.6' }}
              value={post.content}
              onChange={e => setPost(p => p ? { ...p, content: e.target.value } : p)}
              placeholder="Treść w Markdown..."
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 10, padding: 18 }}>
            <h3 style={{ color: '#fff', fontSize: 14, fontWeight: 600, margin: '0 0 14px' }}>Ustawienia</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <label style={labelStyle}>Status</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[true, false].map(val => (
                    <button key={String(val)} onClick={() => setPost(p => p ? { ...p, published: val } : p)}
                      style={{ flex: 1, padding: '8px', borderRadius: 6, border: `1px solid ${post.published === val ? (val ? '#34d399' : '#f87171') : '#2a2a2a'}`, background: post.published === val ? (val ? 'rgba(52,211,153,0.1)' : 'rgba(248,113,113,0.1)') : 'transparent', color: post.published === val ? (val ? '#34d399' : '#f87171') : '#555', fontSize: 12, cursor: 'pointer' }}>
                      {val ? 'Opublikowany' : 'Szkic'}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={labelStyle}>Kategoria</label>
                <select style={inputStyle} value={post.category} onChange={e => setPost(p => p ? { ...p, category: e.target.value } : p)}>
                  <option>Kariera</option><option>Technika</option><option>Metodyka</option><option>Inne</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Data</label>
                <input style={inputStyle} value={post.date} onChange={e => setPost(p => p ? { ...p, date: e.target.value } : p)} />
              </div>
              <div>
                <label style={labelStyle}>Czas czytania</label>
                <input style={inputStyle} value={post.readTime} onChange={e => setPost(p => p ? { ...p, readTime: e.target.value } : p)} />
              </div>
              <div>
                <label style={labelStyle}>Obrazek</label>
                <input style={inputStyle} value={post.image} onChange={e => setPost(p => p ? { ...p, image: e.target.value } : p)} />
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
