import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyAdminToken } from "@/lib/auth";

function authorized(req) {
  return verifyAdminToken(req.cookies.get("sb_admin")?.value);
}

export async function GET(req) {
  if (!authorized(req)) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const rows = await db()`SELECT * FROM service_requests ORDER BY created_at DESC LIMIT 500`;
  return NextResponse.json({ rows });
}

export async function PATCH(req) {
  if (!authorized(req)) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const id = Number(body.id);
  const status = String(body.status || "New");
  const note = String(body.note || "");
  const fee = body.fee === "" || body.fee == null ? null : Number(body.fee);

  if (!Number.isInteger(id) || !Number.isFinite(fee ?? 0)) {
    return NextResponse.json({ message: "Invalid data" }, { status: 422 });
  }

  await db()`
    UPDATE service_requests
    SET status = ${status}, fee = ${fee}, admin_note = ${note}, updated_at = NOW()
    WHERE id = ${id}
  `;
  return NextResponse.json({ ok: true });
}