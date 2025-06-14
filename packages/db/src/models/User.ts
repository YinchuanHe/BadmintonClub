import { Schema, model, models } from 'mongoose';

export interface IUser {
  email: string;
  name: string;
  password: string;
  role: 'admin' | 'sub-admin' | 'member';
  battleScore: number;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'sub-admin', 'member'], default: 'member' },
  battleScore: { type: Number, default: 0 },
});

export const User = models.User || model<IUser>('User', UserSchema);
