import { Component } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'
import {
  addDoc,
  setDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = 'gestion-de-muestras-de-campo';
  public data: any = []

  constructor(public auth: Auth, public firestore: Firestore){

  }

  handleRegister(value: any){
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
     .then((response: any)=>{
        console.log(response.user)
     })
     .catch((err) =>{
      alert(err.message);
     });
     this.addData(value);
  }

  addData(value: any) {
    //const dbInstance = collection(this.firestore, 'users');
    const dbInstance = doc(this.firestore, 'users', value.email);
    setDoc(dbInstance, value)
      .then(() => {
        alert('Data Sent')
      })
      .catch((err) => {
        alert(err.message)
      })
  }

}
