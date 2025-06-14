import { NextResponse } from 'next/server';

export async function POST() {
  // TODO: clear session cookie
  return NextResponse.json({ message: 'Logged out' });
}
