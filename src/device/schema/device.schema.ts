import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema({ timestamps: true })
export class Device {
  @Prop({ unique: true })
  deviceId: string;

  @Prop()
  deviceName: string;

  @Prop()
  deviceType: string;

  @Prop()
  apiKey: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: 'offline' })
  status: string;

  @Prop()
  lastSeen: Date;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
