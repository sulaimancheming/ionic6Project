// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-myaddress',
//   templateUrl: './myaddress.page.html',
//   styleUrls: ['./myaddress.page.scss'],
// })
// export class MyaddressPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-myaddress',
  templateUrl: './myaddress.page.html',
  styleUrls: ['./myaddress.page.scss'],
})
export class MyaddressPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoContactPage() {
    this.navCtrl.navigateBack('mycontact');
  }
  gotoaboutmePage() {
    this.navCtrl.navigateRoot('aboutme');
  }

}
