import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, collection, deleteDoc, doc, getDocs, updateDoc, query, where } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-muestras',
  templateUrl: './muestras.component.html',
  styleUrls: ['./muestras.component.css']
})
export class MuestrasComponent {
  public data: any = []

  constructor(private router: Router, private route: ActivatedRoute, public auth: Auth, public firestore: Firestore) {
    this.getData();
    this.MyQuery();
  }

  getData() {
    //console.log(this.auth.currentUser)
    const dbInstance = collection(this.firestore, 'muestras');
    getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }


  updateData(id: string) {
    const dataToUpdate = doc(this.firestore, 'muestras', id);
    updateDoc(dataToUpdate, {})
      .then(() => {
        alert('Data updated');
        this.getData()
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  deleteData(id: string) {
    const dataToDelete = doc(this.firestore, 'muestras', id);
    deleteDoc(dataToDelete)
    .then(() => {
      alert('Data Deleted');
      this.getData()
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  Salir(){

    this.router.navigate(['user/projects']);
    //window.location.href='#/auth/login';
  }

  newMuestra(){
    this.router.navigate(['user/muestras-new']);
    //window.location.href='#/auth/login';
  }



  async MyQuery(){
    const q = query(collection(this.firestore, "muestras"), where("codigo", "==","EJ-01"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

  }



}
