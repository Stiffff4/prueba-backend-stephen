import { Test, TestingModule } from '@nestjs/testing';
import { Company } from '../database/schemas/companies.schema';
import { CompaniesResolver } from './companies.resolver';
import { CompaniesService } from './companies.service';
import { CompaniesMocks } from './companies.mocks';

describe('CompaniesResolver', () => {
  let resolver: CompaniesResolver;
  let service: CompaniesService;

  const mockCompany = CompaniesMocks.mockCompany;
  const mockCompanies: Company[] = CompaniesMocks.mockCompanies;
  const mockGetCompanyById = CompaniesMocks.mockGetCompanyById;
  const mockCreateInput = CompaniesMocks.mockCreateInput;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompaniesResolver,
        {
          provide: CompaniesService,
          useValue: {
            getAll: jest.fn(),
            getById: jest.fn(),
            create: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<CompaniesResolver>(CompaniesResolver);
    service = module.get<CompaniesService>(CompaniesService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getAll', () => {
    it('should return companies', async () => {
      jest.spyOn(service, 'getAll').mockResolvedValue(mockCompanies);

      const result: Company[] = await resolver.getAll();

      expect(result).toEqual(mockCompanies);
    });
  });

  describe('getOne', () => {
    it('should return a company by ID', async () => {
      jest.spyOn(service, 'getById').mockResolvedValue(mockCompany);

      const result: Company = await resolver.getOne(mockGetCompanyById);

      expect(result).toEqual(mockCompany);
    });
  });

  describe('create', () => {
    it('should create a new company', async () => {
      jest.spyOn(service, 'create').mockResolvedValue(mockCompany);

      const result: Company = await resolver.create(mockCreateInput);

      expect(result).toEqual(mockCompany);
    });
  });

  describe('delete', () => {
    it('should delete a company by ID', async () => {
      jest.spyOn(service, 'delete').mockResolvedValue(mockCompany);

      const result: Company = await resolver.delete(mockGetCompanyById);

      expect(result).toEqual(mockCompany);
    });
  });
});
