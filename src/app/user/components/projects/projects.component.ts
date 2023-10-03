import { Component } from '@angular/core';
import { Auth, getAuth, signOut } from '@angular/fire/auth';
import { Firestore, collection, deleteDoc, doc, getDocs, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public data: any = []

  constructor(private router: Router, private route: ActivatedRoute, public auth: Auth, public firestore: Firestore) {
    this.getData()
  }

  getData() {
    //console.log(this.auth.currentUser)
    const dbInstance = collection(this.firestore, 'projects');
    getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }


  updateData(id: string) {
    const dataToUpdate = doc(this.firestore, 'projects', id);
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
    const dataToDelete = doc(this.firestore, 'projects', id);
    deleteDoc(dataToDelete)
    .then(() => {
      alert('Data Deleted');
      this.getData()
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  newProject(){
    this.router.navigate(['user/project-new']);
    //window.location.href='#/auth/login';
  }

  EditProject(){
    this.router.navigate(['user/project-new']);
    //window.location.href='#/auth/login';
  }

  Muestras(){
    this.router.navigate(['user/muestras']);
    //window.location.href='#/auth/login';
  }



  Salir(){
    signOut(this.auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    this.router.navigate(['auth/select']);
    //window.location.href='#/auth/login';
  }

}
