import { TestBed } from '@angular/core/testing';

import { AddCityService } from './add-city.service';

describe('AddCityService', () => {
  let service: AddCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
