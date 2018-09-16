import { TestBed, inject } from '@angular/core/testing';
import { ScoreBoardService } from './score-board.service';

describe('ScoreBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreBoardService]
    });
  });

  it('should be created', inject([ScoreBoardService], (service: ScoreBoardService) => {
    expect(service).toBeTruthy();
  }));
});
