import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, collection, doc, getDocs, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent {
  title = 'gestion-de-muestras-de-campo';
  public data: any = [];
  public index: number | undefined;



  @ViewChild('div') div: ElementRef | undefined;

  constructor(public auth: Auth, public firestore: Firestore, private renderer: Renderer2){
    this.getData();
    this.index=1;

  }

  handleRegister(value: any){
     this.addData(value);
  }

  addData(value: any) {
    //const dbInstance = collection(this.firestore, 'users');
    let array: any=[];
    let integrantesArr= value.integrantes.split(/[\s,]+/);
    const dbInstance = doc(this.firestore, 'projects', value.id);
    setDoc(dbInstance,
      {
        name: value.name,
        cliente: value.cliente,
        owner: value.owner,
        integrantes: integrantesArr
      }

      )
      .then(() => {
        alert('Data Sent')
      })
      .catch((err) => {
        alert(err.message)
      })

  }

  getData() {
    const dbInstance = collection(this.firestore, 'projects');
    getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }


 /* addElement() {
    if(this.index){this.index= this.index + 1;}
    let mytext='integrante_'+ this.index;
    const p: HTMLParagraphElement = this.renderer.createElement('div');
    p.className="input-fields";

    this.div?.nativeElement.insertAdjacentHTML('afterend', "<div class='input-fields'> <input name= '"+ mytext + "' ngModel placeholder='Integrante "+ this.index +"' id= '"+ mytext + "' type='"+ mytext + "' class='input-field' /> </div>");

    //<input name="integrantes[0]" ngModel placeholder="Integrantes" id="integrantes[0]" type="integrantes[0]" class="input-field" />

    //this.renderer.appendChild(this.div?.nativeElement, p)
  }
  */


}
