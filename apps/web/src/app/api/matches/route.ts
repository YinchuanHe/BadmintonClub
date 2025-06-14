import { NextResponse } from 'next/server';
import { connect } from '../../../../../packages/db/src';
import { Match } from '../../../../../packages/db/src/models/Match';
import { User } from '../../../../../packages/db/src/models/User';

export async function POST(request: Request) {
  const { playerIds, scores, season, createdBy } = await request.json();
  await connect(process.env.MONGODB_URI || '');
  const user = await User.findById(createdBy);
  if (!user || (user.role !== 'admin' && user.role !== 'sub-admin')) {
    return NextResponse.json({ error: 'Not authorized' }, { status: 403 });
  }
  const match = await Match.create({ players: playerIds, scores, season, createdBy });
  // simple battle score algorithm: add total points to players
  for (let i = 0; i < playerIds.length; i++) {
    await User.findByIdAndUpdate(playerIds[i], { $inc: { battleScore: scores[i] } });
  }
  return NextResponse.json(match);
}
