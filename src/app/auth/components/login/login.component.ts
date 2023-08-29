import { Component } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public current: any
  public nid: number = 1;
  constructor(public auth: Auth, private router: Router){

  }


  Signup(){
    this.router.navigate(['/auth/signup']);
    //window.location.href='#/auth/login';
  }


  handleLogin(value:any){
    signInWithEmailAndPassword(this.auth, value.email, value.password)
    .then((response: any)=>{
       console.log(response.user)
       console.log(response.user.email)
    })
    .catch((err) =>{
     alert(err.message);
    })

    this.router.navigate(['/admin']);

    //console.log(this.auth.currentUser)

    /*this.router.navigate(['/admin'],
    {
      state: {
        email: mail
      }
    }
    );*/
    //window.location.href= "#/admin";


  }

}


/*

  FirebaseAuth mFirebaseAuth = FirebaseAuth.getInstance();
  FirebaseUser mFirebaseUser = mFirebaseAuth.getCurrentUser();
  // User Name
  mFirebaseUser.getDisplayName();
  // User ID
  mFirebaseUser.getUid();
  // Email-ID
  mFirebaseUser.getEmail();
  // User-Profile (if available)
  mFirebaseUser.getPhotoUrl();



  this.current= this.auth.currentUser
  let str: string
  str= '#/admin/' + this.current
  window.location.href=str;


*/
