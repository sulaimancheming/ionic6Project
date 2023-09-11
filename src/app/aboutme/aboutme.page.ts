import { SharedataService } from './../services/sharedata.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.page.html',
  styleUrls: ['./aboutme.page.scss'],
})
export class AboutmePage implements OnInit {

  constructor(private navCtrl: NavController,
              private shareDataServ: SharedataService) { }
  ngOnInit() {
  }
  gotoContactPage() {
    const myContact = { tel: '0625120431', email: 'sulaimanjehming@gmail.com', age: '21' };
    this.shareDataServ.setShareedData(myContact);
    this.navCtrl.navigateForward('mycontact');
  }
}
