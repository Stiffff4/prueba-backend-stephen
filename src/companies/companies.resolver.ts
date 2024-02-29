import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateCompanyOutput,
  GetCompaniesOutput,
} from '@app/output/companies.output';
import {
  CreateCompanyInput,
  GetCompanyByIdInput,
  UpdateCompanyInput,
} from '@app/input';
import { Company } from '../database/schemas/companies.schema';
import { CompaniesService } from './companies.service';

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(private readonly companiesService: CompaniesService) {}

  @Query(() => [GetCompaniesOutput])
  public async getAll(): Promise<Company[]> {
    return this.companiesService.getAll();
  }

  @Query(() => GetCompaniesOutput)
  public async getOne(
    @Args('input') input: GetCompanyByIdInput,
  ): Promise<Company> {
    return this.companiesService.getById(input);
  }

  @Mutation(() => CreateCompanyOutput)
  public async create(
    @Args('input') input: CreateCompanyInput,
  ): Promise<Company> {
    return this.companiesService.create(input);
  }

  @Mutation(() => CreateCompanyOutput)
  public async update(
    @Args('input') { id, data }: UpdateCompanyInput,
  ): Promise<Company> {
    return this.companiesService.update(id, data);
  }

  @Mutation(() => CreateCompanyOutput)
  public async delete(
    @Args('input') input: GetCompanyByIdInput,
  ): Promise<Company> {
    return this.companiesService.delete(input);
  }
}
