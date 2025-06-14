import { NextResponse } from 'next/server';
import { connect } from '../../../../../../packages/db/src';
import { User } from '../../../../../../packages/db/src/models/User';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  await connect(process.env.MONGODB_URI || '');
  const user = await User.findOne({ email, password });
  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  // TODO: set session cookie
  return NextResponse.json({ message: 'Logged in' });
}
