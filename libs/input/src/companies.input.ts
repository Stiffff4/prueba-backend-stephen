import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCompanyInput {
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

@InputType()
export class GetCompanyByIdInput {
  @Field(() => String!)
  id: string;
}
