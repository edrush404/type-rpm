import { Test, TestingModule } from '@nestjs/testing';
import { CouserController } from './couser.controller';

describe('CouserController', () => {
  let controller: CouserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CouserController],
    }).compile();

    controller = module.get<CouserController>(CouserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
