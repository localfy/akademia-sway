import { NextResponse } from "next/server";
import { getFileFromGitHub, saveFileToGitHub } from "@/lib/github";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  try {
    const { content } = await getFileFromGitHub("content/szkolenia.json");
    const data = JSON.parse(content);
    return NextResponse.json(data[params.id] || null);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const updated = await request.json();
    const { content } = await getFileFromGitHub("content/szkolenia.json");
    const data = JSON.parse(content);
    data[params.id] = updated;
    await saveFileToGitHub("content/szkolenia.json", data, `Update szkolenie: ${params.id}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
