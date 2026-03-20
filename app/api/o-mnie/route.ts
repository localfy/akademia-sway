import { NextResponse } from "next/server";
import { getFileFromGitHub, saveFileToGitHub } from "@/lib/github";

export async function GET() {
  try {
    const { content } = await getFileFromGitHub("content/o-mnie.json");
    return NextResponse.json(JSON.parse(content));
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updated = await request.json();
    await saveFileToGitHub("content/o-mnie.json", updated, "Update o-mnie");
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
