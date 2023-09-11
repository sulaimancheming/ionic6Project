import { SharedataService } from '../services/sharedata.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mycontact',
  templateUrl: './mycontact.page.html',
  styleUrls: ['./mycontact.page.scss'],
})
export class MycontactPage implements OnInit {
  myContactInfo: any;
  constructor(private navCtrl: NavController,
              private shareDataServ: SharedataService) { }

  ngOnInit() {
    this.myContactInfo = this.shareDataServ.getSharedData();
  }
  gotoContactPage() {
    this.navCtrl.navigateBack('aboutme');
  }
  gotoaddressPage() {
    this.navCtrl.navigateForward('myaddress');
  }

}
