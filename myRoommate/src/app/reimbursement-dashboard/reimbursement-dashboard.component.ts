import { Component, OnInit } from '@angular/core';
import { ReimbursementDashboardService } from './reimbursement-dashboard.service';
import { ReimbursementClass } from '../request-payment/reimbursement';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-reimbursement-dashboard',
  templateUrl: './reimbursement-dashboard.component.html',
  styleUrls: ['./reimbursement-dashboard.component.css']
})
export class ReimbursementDashboardComponent implements OnInit {

  reimbursementList : ReimbursementClass[];
  groupID: number;
  public user:String="";
  
  constructor(private reimbursementDashboardService :ReimbursementDashboardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.groupID = params['groupId']});
    this.reimbursementDashboardService.getReimbursement(this.groupID).subscribe(res => {
      this.reimbursementList = res;
      console.log(this.reimbursementList);
    })
    //login stuff
    if(sessionStorage.length==0){

      this.router.navigate(['login']);

    }else{

      this.user=JSON.stringify(sessionStorage.getItem('name'));
      this.user=this.user.replace(/[^a-zA-Z ]/g, "");

  }

  }
  
  public logout(){

    console.log("logout");
    sessionStorage.clear();
    this.router.navigate(['login']);
  
  }
}
