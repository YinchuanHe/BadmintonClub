import { NextResponse } from 'next/server';
import { connect } from '../../../../../packages/db/src';
import { User } from '../../../../../packages/db/src/models/User';

export async function POST(request: Request) {
  const { email, name, password } = await request.json();
  await connect(process.env.MONGODB_URI || '');
  const user = await User.create({ email, name, password });
  return NextResponse.json(user);
}

export async function GET() {
  await connect(process.env.MONGODB_URI || '');
  const users = await User.find();
  return NextResponse.json(users);
}
