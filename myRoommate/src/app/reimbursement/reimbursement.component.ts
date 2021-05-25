import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Reimbursement } from './reimbursement';
import { reimbursementservice } from './reimbursement.service';

@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent implements OnInit {


  reglist: Reimbursement[] = [];

  groupID: number;

  remgroup = new FormGroup({
    GroupName: new FormControl(''),
    ReimbursementName: new FormControl(''),
    ReimbursementAmount: new FormControl(''),
    assign: new FormControl(''),
  });
  constructor(private remServ: reimbursementservice,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.groupID = params['groupId']});
  }

  public submit(reim: FormGroup){
    console.log('button clicked');
   console.log(reim);
    reim.value.username = sessionStorage.getItem("name");
    reim.value.groupId = this.groupID;
    let stringreim = JSON.stringify(reim.value);
    console.log(stringreim);
    this.remServ.submitrem(stringreim).subscribe(
      response => {
        console.log(response);
        console.log("nai");
        this.reglist.push(response);
        
        //this.router.navigate(['login']);

      }
    );
    window.location.reload();
  }

}
