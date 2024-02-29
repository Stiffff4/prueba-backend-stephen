import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetCompaniesOutput {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  industrySector: string;

  @Field()
  country: string;

  @Field()
  city: string;

  @Field(() => Int)
  numberOfEmployees: number;

  @Field(() => Int)
  annualRevenue: number;

  @Field()
  foundingDate: string;

  @Field(() => [String])
  products: string[];

  @Field()
  websiteUrl: string;
}

@ObjectType()
export class CreateCompanyOutput {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  industrySector: string;

  @Field()
  country: string;

  @Field()
  city: string;

  @Field(() => Int)
  numberOfEmployees: number;

  @Field(() => Int)
  annualRevenue: number;

  @Field()
  foundingDate: string;

  @Field(() => [String])
  products: string[];

  @Field()
  websiteUrl: string;
}
