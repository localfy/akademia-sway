import { NextResponse } from "next/server";
import { getFileFromGitHub, saveFileToGitHub } from "@/lib/github";

export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  try {
    const updated = await request.json();
    const { content } = await getFileFromGitHub("content/blog.json");
    const posts = JSON.parse(content);
    const idx = posts.findIndex((p: { slug: string }) => p.slug === params.slug);
    if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
    posts[idx] = updated;
    await saveFileToGitHub("content/blog.json", posts, `Update post: ${updated.title}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { slug: string } }) {
  try {
    const { content } = await getFileFromGitHub("content/blog.json");
    const posts = JSON.parse(content);
    const filtered = posts.filter((p: { slug: string }) => p.slug !== params.slug);
    await saveFileToGitHub("content/blog.json", filtered, `Delete post: ${params.slug}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
