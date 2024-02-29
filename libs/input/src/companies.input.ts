import { Field, InputType, Int } from '@nestjs/graphql';
@InputType()
export class GetCompanyByIdInput {
  @Field(() => String!)
  id: string;
}

@InputType()
export class CreateCompanyInput {
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

@InputType()
export class UpdateCompanyData {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  industrySector?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => Int, { nullable: true })
  numberOfEmployees?: number;

  @Field(() => Int, { nullable: true })
  annualRevenue?: number;

  @Field(() => Int, { nullable: true })
  foundingDate?: string;

  @Field(() => [String], { nullable: true })
  products?: string[];

  @Field(() => String, { nullable: true })
  websiteUrl?: string;
}

@InputType()
export class UpdateCompanyInput {
  @Field(() => String!)
  id: string;

  @Field(() => UpdateCompanyData)
  data: UpdateCompanyData;
}
