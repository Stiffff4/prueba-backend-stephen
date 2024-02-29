import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreateCompanyInput,
  GetCompanyByIdInput,
  UpdateCompanyData,
} from '@app/input';
import { DatabaseHelper } from '@app/helpers';
import { Model } from 'mongoose';
import { Company } from '../database/schemas/companies.schema';
import { ObjectHelper } from '@app/helpers/object.helper';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private companiesModel: Model<Company>,
  ) {}

  public async getAll(): Promise<Company[]> {
    return this.companiesModel.find().exec();
  }

  public async getById({ id }: GetCompanyByIdInput): Promise<Company> {
    const company: Company = await this.companiesModel.findById(id).exec();

    DatabaseHelper.checkIfRecordExists(company);

    return company;
  }

  public async create(input: CreateCompanyInput): Promise<Company> {
    const company = await this.companiesModel.create(input);

    return await company.save();
  }

  public async update(id: string, data: UpdateCompanyData): Promise<Company> {
    const cleanedData = ObjectHelper.clean(data);

    const updatedCompany = await this.companiesModel.findByIdAndUpdate(
      id,
      cleanedData,
      { new: true },
    );

    DatabaseHelper.checkIfRecordExists(updatedCompany);

    return updatedCompany;
  }

  public async delete({ id }: GetCompanyByIdInput): Promise<Company> {
    const company: Company = await this.companiesModel
      .findByIdAndDelete(id)
      .exec();

    DatabaseHelper.checkIfRecordExists(company);

    return company;
  }
}
