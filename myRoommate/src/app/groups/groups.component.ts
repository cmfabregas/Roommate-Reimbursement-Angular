import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { GroupService } from './group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Group[] | undefined;

  constructor(private GroupService: GroupService) { 
    this.listGroups();
    console.log(this.groups);
  }

  ngOnInit(): void {
  }

  listGroups(){
    this.GroupService.getGroupList().subscribe(
      data => {
        this.groups = data;

      }
    )
  }
}
