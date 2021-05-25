import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from './register';
import { registerservice } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent  {

  reglist: register[] = [];

  foodGroup = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
    lastName: new FormControl('')
  });

  constructor(private foodServ: registerservice,private router:Router) { }

  ngOnInit(): void {
 /*   this.foodServ.getAllFood().subscribe(
      response =>{
        console.log(response);
        this.reglist=response;
      }
    )*/
  }

  public submitFood(food: FormGroup){
    console.log('button clicked');
    console.log(food);
    let stringFood = JSON.stringify(food.value);
    this.foodServ.postFood(stringFood).subscribe(
      response => {
        console.log(response);
        console.log("nai");
        this.reglist.push(response);
        this.router.navigate(['login']);

      }
    );
  }
}

