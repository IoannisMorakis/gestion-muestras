import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import * as JsBarcode from 'jsbarcode';





@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent {
  public data: any = []
  public res: any;
  constructor(private router: Router, private route: ActivatedRoute, public auth: Auth, public firestore: Firestore) {

  }

  generateBarcode(value: any){
    var text = value.txt_input;
    this.res=text;

        JsBarcode("#barcode", text, {
            format: "CODE128"
        });
  }

  toPrint(){
    this.router.navigate(['/print/'+ this.res]);

  }








}
