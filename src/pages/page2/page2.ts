import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})

export class Page2 {
  
  public nome: string;
  public callback: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nome = this.navParams.get("nome");
    this.callback = this.navParams.get("callback");
  }

  confirmar(nome: string) {
    this.callback(nome);
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.pop();
  }
}
