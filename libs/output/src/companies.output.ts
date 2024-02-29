import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetCompaniesOutput {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  industrySector: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  city: string;

  @Field(() => Int)
  numberOfEmployees: number;

  @Field(() => Int)
  annualRevenue: number;

  @Field(() => String)
  foundingDate: string;

  @Field(() => [String])
  products: string[];

  @Field(() => String)
  websiteUrl: string;
}

@ObjectType()
export class CreateCompanyOutput {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  industrySector: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  city: string;

  @Field(() => Int)
  numberOfEmployees: number;

  @Field(() => Int)
  annualRevenue: number;

  @Field(() => String)
  foundingDate: string;

  @Field(() => [String])
  products: string[];

  @Field(() => String)
  websiteUrl: string;
}
