import { Test, TestingModule } from '@nestjs/testing';
import { CouserService } from './couser.service';

describe('CouserService', () => {
  let service: CouserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CouserService],
    }).compile();

    service = module.get<CouserService>(CouserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
