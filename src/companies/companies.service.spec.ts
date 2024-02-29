import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesService } from './companies.service';
import { NotFoundException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { CompaniesMocks } from './companies.mocks';
import { Company } from 'src/database/schemas/companies.schema';
import { Model } from 'mongoose';

const mockModel = {
  find: jest.fn(),
  findById: jest.fn(),
  findByIdAndDelete: jest.fn(),
  save: jest.fn(),
  create: jest.fn(),
  findByIdAndUpdate: jest.fn(),
};

describe('CompaniesService', () => {
  let service: CompaniesService;
  let mockCompanyModel: Model<Company>;

  const _mockCompany = CompaniesMocks._mockCompany;
  const mockCompanies: Company[] = CompaniesMocks.mockCompanies;
  const mockGetCompanyById = CompaniesMocks.mockGetCompanyById;
  const mockCreateInput = CompaniesMocks.mockCreateInput;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompaniesService,
        {
          provide: getModelToken('Company'),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<CompaniesService>(CompaniesService);
    mockCompanyModel = module.get<Model<Company>>(getModelToken('Company'));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return all companies', async () => {
      jest.spyOn(mockModel, 'find').mockImplementation(() => ({
        exec: jest.fn().mockResolvedValue(mockCompanies),
      }));

      const result: Company[] = await service.getAll();

      expect(result).toEqual(mockCompanies);
    });
  });

  describe('getById', () => {
    it('should return a company by ID', async () => {
      jest.spyOn(mockModel, 'findById').mockImplementation(() => ({
        exec: jest.fn().mockResolvedValue(_mockCompany),
      }));

      const result = await service.getById(mockGetCompanyById);

      expect(result).toEqual(_mockCompany);
    });

    it('should throw NotFoundException if company does not exist', async () => {
      jest.spyOn(mockModel, 'findById').mockImplementation(() => ({
        exec: jest.fn().mockResolvedValue(null),
      }));

      await expect(service.getById(mockGetCompanyById)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('create', () => {
    it('should create a new company', async () => {
      jest.spyOn(mockCompanyModel, 'create').mockImplementation((): any =>
        Promise.resolve({
          _mockCompany,
          save: jest.fn().mockResolvedValue(_mockCompany),
        }),
      );

      const result = await service.create(mockCreateInput);

      expect(result).toEqual(_mockCompany);
    });
  });

  describe('update', () => {
    it('should update an existing company', async () => {
      jest
        .spyOn(mockModel, 'findByIdAndUpdate')
        .mockResolvedValue(_mockCompany);

      const result = await service.update(_mockCompany._id, mockCreateInput);

      expect(result).toEqual(_mockCompany);
    });

    it('should throw NotFoundException if company does not exist', async () => {
      jest.spyOn(mockModel, 'findByIdAndUpdate').mockResolvedValue(null);

      await expect(
        service.update(_mockCompany._id, mockCreateInput),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('delete', () => {
    it('should delete a company by ID', async () => {
      jest.spyOn(mockModel, 'findByIdAndDelete').mockImplementation(() => ({
        exec: jest.fn().mockResolvedValue(_mockCompany),
      }));

      const result = await service.delete(mockGetCompanyById);

      expect(result).toEqual(_mockCompany);
    });

    it('should throw NotFoundException if company does not exist', async () => {
      jest.spyOn(mockModel, 'findByIdAndDelete').mockImplementation(() => ({
        exec: jest.fn().mockResolvedValue(null),
      }));

      await expect(service.delete(mockGetCompanyById)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
