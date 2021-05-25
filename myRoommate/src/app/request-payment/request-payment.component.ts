import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { accountExample, ReimbursementClass } from './reimbursement';
import { RequestPaymentService} from './request-payment.service';

@Component({
  selector: 'app-request-payment',
  templateUrl: './request-payment.component.html',
  styleUrls: ['./request-payment.component.css']
})
export class RequestPaymentComponent implements OnInit {

  usersList : accountExample[] = [new accountExample("samUserName","sam", "samgroup","sam@sam.com"), new accountExample("ironman","tony", "avengers","tony@stony.com"), new accountExample("cap.America","Steven", "avengers","Steven@Steve.com")];

  constructor(private reimbursementService: RequestPaymentService){}

  userForm = new FormGroup({
    assignee: new FormControl(''),
    amount: new FormControl(''),
    desciption: new FormControl('')
  })

  onSubmit(reimbursement:any) {
    console.log(reimbursement);
    const reimbursementObj: ReimbursementClass = new ReimbursementClass(reimbursement.value.amount, reimbursement.value.desciption, 'www.linktoimage.com', reimbursement.value.assignee, "Creator")
    console.log(reimbursementObj)
    let stringReimbursement = JSON.stringify(reimbursementObj);
    this.reimbursementService.postReimbursement(stringReimbursement).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  ngOnInit(): void {
  }

}
