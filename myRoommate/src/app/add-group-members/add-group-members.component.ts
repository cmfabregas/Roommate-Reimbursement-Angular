import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Group } from '../group';
import { GroupService } from '../groups/group.service';
import { AddGroupMembersService } from './add-group-members.service';
import { Addgm } from './addgm';

@Component({
  selector: 'app-add-group-members',
  templateUrl: './add-group-members.component.html',
  styleUrls: ['./add-group-members.component.css']
})
export class AddGroupMembersComponent implements OnInit {

  groups: Group[] | undefined;

  addGm: Addgm[] | undefined;

  addGroupMember = new FormGroup({
    groupId: new FormControl(''),
    username: new FormControl('')
  })

  constructor(private GroupService:GroupService, private AddGroupMembersService:AddGroupMembersService) {
    this.listGroup();
    console.log(this.groups);
   }

  ngOnInit(): void {
  }

  listGroup(){
    this.GroupService.getGroupList().subscribe(
      data =>{
        this.groups = data;
      }
    )
  }


  public submitGroup(group:FormGroup){
    console.log("button clicked");
    console.log(group);

    let stringGroupMember = JSON.stringify(group.value);
    this.AddGroupMembersService.postGroup(stringGroupMember).subscribe(
      response => {
        console.log(response);
        this.addGm?.push(response);
      }
    )
  }

}
