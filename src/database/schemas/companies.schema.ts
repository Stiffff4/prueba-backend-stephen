import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
  @Prop({ type: Types.ObjectId, auto: true })
  id: string;

  @Prop()
  name: string;

  @Prop()
  industrySector: string;

  @Prop()
  country: string;

  @Prop()
  city: string;

  @Prop()
  numberOfEmployees: number;

  @Prop()
  annualRevenue: number;

  @Prop()
  foundingDate: string;

  @Prop([String])
  products: string[];

  @Prop()
  websiteUrl: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
