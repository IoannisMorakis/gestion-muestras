import { Component } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public current: any
  constructor(public auth: Auth){

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

    console.log(this.auth.currentUser)
    window.location.href= "#/admin/1";


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
