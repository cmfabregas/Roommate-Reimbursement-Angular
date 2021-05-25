import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public user:String="";
  constructor(private router:Router) { }

  ngOnInit(): void {

    if(sessionStorage.length==0){

      this.router.navigate(['login']);

    }else{

      this.user=JSON.stringify(sessionStorage.getItem('name'));
      this.user=this.user.replace(/[^a-zA-Z ]/g, "");
     // console.log(this.user);
    }

    

  }


public logout(){

  console.log("logout");
  sessionStorage.clear();
  this.router.navigate(['login']);

}

}
