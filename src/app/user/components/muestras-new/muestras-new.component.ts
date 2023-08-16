import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, collection, doc, getDocs, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-muestras-new',
  templateUrl: './muestras-new.component.html',
  styleUrls: ['./muestras-new.component.css']
})
export class MuestrasNewComponent {
  title = 'gestion-de-muestras-de-campo';
  public data: any = []

  constructor(public auth: Auth, public firestore: Firestore){
    this.getData();

  }

  handleRegister(value: any){
     this.addData(value);
  }

  addData(value: any) {
    //const dbInstance = collection(this.firestore, 'users');
    const dbInstance = doc(this.firestore, 'muestras', value.name);
    setDoc(dbInstance, value)
      .then(() => {
        alert('Data Sent')
      })
      .catch((err) => {
        alert(err.message)
      })

  }

  getData() {
    const dbInstance = collection(this.firestore, 'muestras');
    getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }


}
