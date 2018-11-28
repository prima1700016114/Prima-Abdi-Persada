import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
    detailpage(ket){
      this.navCtrl.push("ac.detailpage",{kategori:ket});
    }

}
