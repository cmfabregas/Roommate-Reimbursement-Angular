import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPassword } from './resetpassword/resetpassword';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit  {

  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit(){
    /*this.router.events.subscribe(event =>{
      console.log("event is"+event)
      if (event instanceof ResetPassword){
        this.router.navigate(['resetpasswordd?id=/:id']);
      }
   })*/
   //this.router.navigate(['/resetpassword', 'resetpassword?id=/:id'])
  
    //throw new Error('Method not implemented.');
   // this.router.navigate(['login']);

  
  }

 
  title = 'myRoommate';
}
