'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  const isLogin = pathname === '/admin/login';
  if (isLogin) return <>{children}</>;

  const navItems = [
    { href: '/admin', label: '🏠 Dashboard', exact: true },
    { href: '/admin/blog', label: '📝 Blog' },
    { href: '/admin/szkolenia', label: '🎓 Szkolenia' },
    { href: '/admin/o-mnie', label: '👤 O mnie' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', fontFamily: 'sans-serif', display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{ width: 240, background: '#111', borderRight: '1px solid #1e1e1e', display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
        <div style={{ padding: '0 20px 24px', borderBottom: '1px solid #1e1e1e' }}>
          <div style={{ fontSize: 20 }}>🌸</div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginTop: 6 }}>Akademia Sway</div>
          <div style={{ color: '#555', fontSize: 12, marginTop: 2 }}>Panel Admin</div>
        </div>
        <nav style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {navItems.map(item => {
            const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'block',
                  padding: '10px 12px',
                  borderRadius: 8,
                  color: active ? '#c084fc' : '#888',
                  background: active ? 'rgba(192,132,252,0.1)' : 'transparent',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: active ? 600 : 400,
                  transition: 'all 0.15s',
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div style={{ padding: '16px 12px', borderTop: '1px solid #1e1e1e' }}>
          <Link href="/" target="_blank" style={{ display: 'block', padding: '8px 12px', color: '#555', fontSize: 13, textDecoration: 'none', marginBottom: 8 }}>
            🌐 Zobacz stronę →
          </Link>
          <button
            onClick={handleLogout}
            style={{ width: '100%', padding: '8px 12px', background: 'transparent', border: '1px solid #2a2a2a', borderRadius: 8, color: '#555', fontSize: 13, cursor: 'pointer', textAlign: 'left' }}
          >
            🚪 Wyloguj się
          </button>
        </div>
      </aside>
      {/* Main content */}
      <main style={{ flex: 1, overflow: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
