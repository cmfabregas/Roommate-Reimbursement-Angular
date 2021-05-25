import { TestBed } from '@angular/core/testing';

import { AddGroupMembersService } from './add-group-members.service';

describe('AddGroupMembersService', () => {
  let service: AddGroupMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddGroupMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
