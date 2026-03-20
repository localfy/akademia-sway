import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({
    has_password: !!process.env.ADMIN_PASSWORD,
    password_length: process.env.ADMIN_PASSWORD?.length,
    node_env: process.env.NODE_ENV,
  });
}
