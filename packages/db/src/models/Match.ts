import { Schema, model, models, Types } from 'mongoose';

export interface IMatch {
  players: Types.ObjectId[];
  scores: number[];
  season: string;
  createdBy: Types.ObjectId;
}

const MatchSchema = new Schema<IMatch>({
  players: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  scores: [{ type: Number, required: true }],
  season: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const Match = models.Match || model<IMatch>('Match', MatchSchema);
