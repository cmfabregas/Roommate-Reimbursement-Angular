import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPassword } from './forgotpassword';
import { ForgotPasswordService } from './forgotpassword.service';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})


export class ForgotPasswordComponent  {

  reglist: ForgotPassword[] = [];
  successMessage: string | undefined; ////and this
  forbiddenEmails: any;
  errorMessage: string | undefined;
  IsvalidForm = true;

  foodGroup = new FormGroup({
    email: new FormControl('')
  });

  @Input()
  public staticAlertClosed: boolean = false;

  @Output() state = new EventEmitter<boolean>();
  private _success = new Subject<string>();
  failureMessage = '';

  @ViewChild('selfClosingAlert', { static: false })
  selfClosingAlert!: NgbAlert;

  constructor(private foodServ: ForgotPasswordService,private router:Router) { }

  ngOnInit(): void {
 /*   this.foodServ.getAllFood().subscribe(
      response =>{
        console.log(response);
        this.reglist=response;
      }
    )*/
  }
  public changeSuccessMessage() { this._success.next('Wrong password');

  }
  public forgotPassword(food: FormGroup){
    this.errorMessage = '';
    this.successMessage = '';
    //console.log('form submitted');    
   this    
    //console.log(food);
    let stringFood = JSON.stringify(food.value);
    this.foodServ.postFood(stringFood).subscribe(
      response => {
        if(response!=null){
        this.successMessage = "Reset password link sent to email sucessfully."; // and 
        //console.log(response);
        //console.log("nai");
        this.reglist.push(response);
        }
        else{
          //console.log("failure message")
          this.changeSuccessMessage();
        }
        //this.router.navigate(['login']);
      },
      error => {
          //console.log(error);
          this.errorMessage = 'Invalid email address';
      }
    );
    this.foodGroup.reset(); 
    //console.log("reset password");
   // (    //this.router.navigate(['resetpassword']); 
//  err: { error: { message: string | undefined; }; }) => {

    //  if (err.error.message) {
    //    this.errorMessage = err.error.message;
    //  }else {
    //    this.IsvalidForm = false;
    //  } 
   // }
  }
}


