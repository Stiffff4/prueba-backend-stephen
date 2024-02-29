import { CreateCompanyInput, GetCompanyByIdInput } from '@app/input';
import { Company } from '../database/schemas/companies.schema';

export class CompaniesMocks {
  public static mockGetCompanyById: GetCompanyByIdInput = {
    id: 'mocked-id',
  };

  public static _mockCompany = {
    _id: 'Mocked-id',
    name: 'Mocked-name',
    industrySector: 'Mocked-industrySector',
    country: 'Mocked-country',
    city: 'Mocked-city',
    numberOfEmployees: 1,
    annualRevenue: 1,
    foundingDate: '2024-01-01',
    products: ['Mocked-product-1, Mocked-product-2, Mocked-product-3'],
    websiteUrl: 'mockedwebsite.com',
  };

  public static mockCompany: Company = {
    id: 'Mocked-id',
    name: 'Mocked-name',
    industrySector: 'Mocked-industrySector',
    country: 'Mocked-country',
    city: 'Mocked-city',
    numberOfEmployees: 1,
    annualRevenue: 1,
    foundingDate: '2024-01-01',
    products: ['Mocked-product-1, Mocked-product-2, Mocked-product-3'],
    websiteUrl: 'mockedwebsite.com',
  };

  public static mockCreateInput: CreateCompanyInput = {
    name: 'input-name',
    industrySector: 'input-industrySector',
    country: 'input-country',
    city: 'input-city',
    numberOfEmployees: 1,
    annualRevenue: 1,
    foundingDate: '2024-01-01',
    products: ['input-product-1, input-product-2, input-product-3'],
    websiteUrl: 'inputwebsite.com',
  };

  public static mockCompanyModel = { ...this._mockCompany };

  public static mockCompanies = [this.mockCompany, this.mockCompany];
}
