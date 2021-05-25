import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { login,Alert } from './login';
import { loginservice } from './login.service';
import { Router } from '@angular/router';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent  {

  loglist: login[] = [];

  logGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  @Input()
  public staticAlertClosed: boolean = false;

  @Output() state = new EventEmitter<boolean>();
  private _success = new Subject<string>();
  successMessage = '';

  @ViewChild('selfClosingAlert', { static: false })
  selfClosingAlert!: NgbAlert;

  constructor(private foodServ: loginservice,private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {
 /*   this.foodServ.getAllFood().subscribe(
      response =>{
        console.log(response);
        this.reglist=response;
      }
    )*/

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(3000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  public changeSuccessMessage() { this._success.next('Wrong password');

  }
  public submitFood(food: FormGroup){
    console.log('button clicked');
    console.log(food);
    let stringFood = JSON.stringify(food.value);
    this.foodServ.postFood(stringFood).subscribe(
      response => {
        console.log(response);
        //console.log(response.firstname);
        //console.log("nai");
        if(response!=null){
          //sessionStorage.setItem('name', JSON.stringify(response.username));
          sessionStorage.setItem("userId", JSON.stringify(response.userId));
          sessionStorage.setItem('name', response.username.toString()); 
          console.log(sessionStorage);
          this.router.navigate(['home']);
          

        }else{

         // console.log("Wrong password");
         // this.modalService.open("Wrong password", { centered: true });
      
         this.changeSuccessMessage();
          
        }

        this.loglist.push(response);
      }
    );
  }



}


