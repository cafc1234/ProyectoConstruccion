import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( public afAuth: AngularFireAuth,private router: Router) { }



  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigateByUrl('/nav');

      }
    }); 
  }





}
