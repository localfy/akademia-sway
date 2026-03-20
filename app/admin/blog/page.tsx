'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  published: boolean;
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [toast, setToast] = useState('');

  useEffect(() => { fetchPosts(); }, []);

  async function fetchPosts() {
    const res = await fetch('/api/blog');
    setPosts(await res.json());
    setLoading(false);
  }

  async function deletePost(slug: string, title: string) {
    if (!confirm(`Usunąć artykuł "${title}"?`)) return;
    setDeleting(slug);
    await fetch(`/api/blog/${slug}`, { method: 'DELETE' });
    setToast('Artykuł usunięty!');
    setTimeout(() => setToast(''), 3000);
    await fetchPosts();
    setDeleting(null);
  }

  return (
    <div style={{ padding: 32 }}>
      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, background: '#34d399', color: '#000', padding: '10px 20px', borderRadius: 8, fontWeight: 700, zIndex: 9999 }}>
          {toast}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ color: '#fff', fontSize: 24, fontWeight: 700, margin: 0 }}>📝 Artykuły</h1>
        <Link href="/admin/blog/new">
          <button style={{ padding: '10px 20px', background: '#c084fc', color: '#000', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            + Nowy artykuł
          </button>
        </Link>
      </div>

      {loading ? (
        <div style={{ color: '#555', padding: 40, textAlign: 'center' }}>Ładowanie...</div>
      ) : posts.length === 0 ? (
        <div style={{ color: '#555', padding: 40, textAlign: 'center' }}>Brak artykułów</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {posts.map(post => (
            <div key={post.slug} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 10, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{post.title}</div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ background: '#1e1e1e', color: '#c084fc', fontSize: 11, padding: '2px 8px', borderRadius: 4 }}>{post.category}</span>
                  <span style={{ color: '#555', fontSize: 12 }}>{post.date}</span>
                  <span style={{ color: post.published ? '#34d399' : '#f87171', fontSize: 12 }}>
                    {post.published ? '● Opublikowany' : '○ Szkic'}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <Link href={`/admin/blog/${post.slug}`}>
                  <button style={{ padding: '6px 14px', background: 'transparent', border: '1px solid #2a2a2a', borderRadius: 6, color: '#aaa', fontSize: 13, cursor: 'pointer' }}>
                    Edytuj
                  </button>
                </Link>
                <Link href={`/blog/${post.slug}`} target="_blank">
                  <button style={{ padding: '6px 14px', background: 'transparent', border: '1px solid #2a2a2a', borderRadius: 6, color: '#aaa', fontSize: 13, cursor: 'pointer' }}>
                    Podgląd
                  </button>
                </Link>
                <button
                  onClick={() => deletePost(post.slug, post.title)}
                  disabled={deleting === post.slug}
                  style={{ padding: '6px 14px', background: 'transparent', border: '1px solid #3a1a1a', borderRadius: 6, color: '#f87171', fontSize: 13, cursor: 'pointer' }}
                >
                  {deleting === post.slug ? '...' : 'Usuń'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
