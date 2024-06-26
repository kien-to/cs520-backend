// Path: src/schemas/application.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ApplicationDocument = HydratedDocument<Application>;

@Schema()
export class Application {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  uid: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Job' })
  jid: mongoose.Schema.Types.ObjectId;

  @Prop({ default: Date.now })
  appliedDate: Date;

  @Prop({ enum: ['applied', 'accepted', 'rejected'], default: 'applied' })
  status: string;

  @Prop()
  notes: string;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
