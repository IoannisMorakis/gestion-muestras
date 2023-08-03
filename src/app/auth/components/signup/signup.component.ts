import { Component } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(public auth: Auth){

  }

  handleRegister(value: any){
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
     .then((response: any)=>{
        console.log(response.user)
     })
     .catch((err) =>{
      alert(err.message);
     })

  }

}
