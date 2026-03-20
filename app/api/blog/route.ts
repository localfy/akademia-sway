import { NextResponse } from "next/server";
import { getFileFromGitHub, saveFileToGitHub } from "@/lib/github";

export async function GET() {
  try {
    const { content } = await getFileFromGitHub("content/blog.json");
    return NextResponse.json(JSON.parse(content));
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const newPost = await request.json();
    const { content } = await getFileFromGitHub("content/blog.json");
    const posts = JSON.parse(content);
    posts.push(newPost);
    await saveFileToGitHub("content/blog.json", posts, `Add post: ${newPost.title}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
