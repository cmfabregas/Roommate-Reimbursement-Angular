import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPassword } from './resetpassword';
import { ResetPasswordService } from './resetpassword.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})


export class ResetPasswordComponent  implements OnInit {
  foodGroup: FormGroup;
  submitted: boolean = false;
  code: String = '';
  //firstElementWithError: string | null;
  successMessage: string | undefined; 


  constructor(private fb: FormBuilder, private foodServ:ResetPasswordService,private router:Router,private activeRoute: ActivatedRoute) { 
    this.foodGroup = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  ngOnInit(): void {
    this.foodGroup = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
    this.activeRoute.queryParams.subscribe(params => {
      this.code= params['id'];
      //console.log(this.code + 'code');

  });

  let param = this.activeRoute.snapshot.paramMap.get('id');
    //console.log("reset page");
      if(param) {
      //console.log(param);
     this.code = param;
    }
  
  }
  get f() { return this.foodGroup.controls; }


  scrollTo(el: Element): void {
    if (el) {
       el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
 }
 scrollToError(): void {
    const firstElementWithError = document.querySelector('.ng-  invalid[formControlName]')!;
    this.scrollTo(firstElementWithError);
 }
  onSubmit() { 
    this.submitted = true;
    //console.log("inside submit");
    

    if (this.foodGroup.invalid) {
      this.scrollToError();
    }else {
      //console.log("Complete");    
      this.resetPassword(this.foodGroup)      
    }  
     
  }
  public resetPassword(food: FormGroup){
    this.successMessage = "";
    var json = {
      password: this.foodGroup.value.password,
      specialcode:this.code
  };

    //console.log(this.foodGroup.value.password);
    
  
    this.submitted = true;
    //console.log('button clicked');      
    //console.log(food);
   // console.log(this.code+ 'this.code');
    let stringFood = JSON.stringify(food.value);
   // if(food.value.)
    this.foodServ.postFood(json).subscribe(
      response => {        
        this.successMessage = "Reset password success.";        
        //console.log(response);
        //console.log("nai");               
     
      }      
    );
    this.foodGroup.reset();
    Object.keys(this.foodGroup.controls).forEach(key => {
      this.foodGroup.get(key)?.setErrors(null);
    })    
  }
  

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }            
    }
    
  }  
}


