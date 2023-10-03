import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('geo') geo: ElementRef | undefined;
  htmlToAdd: any;

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


  showPosition(position: any) {
    /*
      const p: HTMLParagraphElement = this.renderer.createElement('p');
      p.innerHTML = "add new"
      this.renderer.appendChild(this.div.nativeElement, p)
    */


    //x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }

  getLocation() {
    //d1.nativeElement.insertAdjacentHTML('beforeend', '<div class="two">two</div>');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);

    } else {
      //x.innerHTML = "Geolocation is not supported by this browser.";
    }

  }


  /*
    <div class="one" [innerHtml]="htmlToAdd"></div>
    this.htmlToAdd = '<div class="two">two</div>';
  */



}
