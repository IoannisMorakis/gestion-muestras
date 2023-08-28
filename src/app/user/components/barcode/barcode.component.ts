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
  constructor(private router: Router, private route: ActivatedRoute, public auth: Auth, public firestore: Firestore) {

  }

  generateBarcode(){
    var text = "hello"

        JsBarcode("#barcode", text, {
            format: "CODE128"
        });
  }


}
