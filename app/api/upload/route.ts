import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

    const buffer = await file.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    const filename = `uploads/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
    const GITHUB_REPO = process.env.GITHUB_REPO!;
    const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";

    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/public/${filename}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Upload image: ${filename}`,
          content: base64,
          branch: GITHUB_BRANCH,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: 500 });
    }

    return NextResponse.json({ url: `/${filename}` });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
