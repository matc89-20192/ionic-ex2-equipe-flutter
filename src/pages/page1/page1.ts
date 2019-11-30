import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Page2} from '../page2/page2';

@IonicPage()

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})

export class Page1 {
  public nome : any = "Fulano";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  trocar() {
    this.navCtrl.push(Page2, {
      'nome': this.nome,
      'callback': this.callback.bind(this)
    });
  }


  callback(nome2:string) {
    if(nome2 != "") {
      this.nome = nome2;
    } else {
      this.nome = "";
    }
  }
}
