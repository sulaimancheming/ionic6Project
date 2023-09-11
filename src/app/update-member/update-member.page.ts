import { Component, OnInit } from '@angular/core';
import { Firestore, doc } from '@angular/fire/firestore';
import { documentId, updateDoc } from 'firebase/firestore';
import { SharedataService } from '../services/sharedata.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.page.html',
  styleUrls: ['./update-member.page.scss'],
})
export class UpdateMemberPage implements OnInit {
  docData: any;
  memberID: string;
  name: string;
  surname: string;
  gender: string;
  age: number;
  tel: string;

  constructor(private firestore: Firestore, private shareDataServ: SharedataService,
              private navCtrl: NavController) {
    this.docData = this.shareDataServ.getSharedData();
    this.memberID = this.docData.memberID;
    this.name = this.docData.name;
    this.surname = this.docData.surname;
    this.gender = this.docData.gender;
    this.age = this.docData.age;
    this.tel = this.docData.tel;
  }

  ngOnInit() { }

  gotoPrevPage(){
    this.navCtrl.navigateBack('members');
  }
  updateData() {
    const document = {
      memberID: this.memberID,
      name: this.name,
      surname: this.surname,
      gender: this.gender,
      age: this.age,
      tel: this.tel
    };
    const documentRef = doc(this.firestore, 'user_info/' + this.docData.doc_id);
    updateDoc(documentRef, document);
    this.navCtrl.navigateBack('members');
  }
}
