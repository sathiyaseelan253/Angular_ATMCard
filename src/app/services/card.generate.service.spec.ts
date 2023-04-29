import { TestBed } from '@angular/core/testing';

import { CardGenerateService } from './card.generate.service';

describe('CardGenerateService', () => {
  let service: CardGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardGenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
