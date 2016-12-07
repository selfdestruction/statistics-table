/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HighchartsService } from './highcharts.service.ts';

describe('HighchartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighchartsService]
    });
  });

  it('should ...', inject([HighchartsService], (service: HighchartsService) => {
    expect(service).toBeTruthy();
  }));
});
