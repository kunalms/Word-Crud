import { TestBed } from '@angular/core/testing';

import { AddEditWordDialogService } from './add-edit-word-dialog.service';

describe('AddWordService', () => {
  let service: AddEditWordDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEditWordDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
