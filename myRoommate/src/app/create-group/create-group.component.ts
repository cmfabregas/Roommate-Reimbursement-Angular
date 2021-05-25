import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {FormArray, FormControl, FormGroup } from '@angular/forms';
import { Group } from '../group';
import {CreateGroupService} from './create-group.service';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  groupList: Group[] | undefined;
  groupCreated:boolean = false;


  groupGroup = new FormGroup({
    groupName: new FormControl(''),
    groupDescription: new FormControl(''),
    groupUsers: new FormArray([
      new FormGroup({
        userId: new FormControl('')
      })
    ])

  });

  constructor(private groupService:CreateGroupService) { }

  ngOnInit(): void {
  }



  public submitGroup(group:FormGroup){
    console.log('button clicked');
    console.log(group);
    const userID = Number(sessionStorage.getItem('userId'));
    this.groupGroup.patchValue({
      groupUsers: [{
        userId: userID
      }]
    });

    console.log(group);
    console.log(this.groupGroup);
    let stringGroup = JSON.stringify(group.value);
    this.groupService.postGroup(stringGroup).subscribe(
      response => {
        console.log(response);
        this.groupCreated = true;
        this.groupList?.push(response);
      }
    )
  }

}
