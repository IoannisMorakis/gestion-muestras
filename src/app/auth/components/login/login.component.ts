import { Component } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public auth: Auth){

  }

  handleLogin(value:any){
    signInWithEmailAndPassword(this.auth, value.email, value.password)
    .then((response: any)=>{
       console.log(response.user)
    })
    .catch((err) =>{
     alert(err.message);
    })


  }

}
