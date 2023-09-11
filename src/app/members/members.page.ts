/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { addDoc} from 'firebase/firestore';
import { doc } from '@angular/fire/firestore';
import { deleteDoc } from 'firebase/firestore';
import { NavController } from '@ionic/angular';
import { SharedataService } from '../services/sharedata.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  documents: Array<any>;

  constructor(private firestore: Firestore, private navCtrl: NavController,
              private shareDataServ: SharedataService) {
    const collectionRef = collection(firestore, 'user_info');
    collectionData(collectionRef, { idField: 'doc_id' }).subscribe(response => {
      this.documents = response;
      console.log(response);
    });
  }
  ngOnInit() { }

  addData(myForm) {
    const document = {
      memberID: myForm.member_id,
      name: myForm.name,
      surname: myForm.surname,
      gender: myForm.gender,
      age: myForm.age,
      tel: myForm.tel
    };
    const collectionRef = collection(this.firestore, 'user_info');
    addDoc(collectionRef, document);
  }
  deleteData(documentID) {
    const documentRef = doc(this.firestore, 'user_info/' + documentID);
    deleteDoc(documentRef);
  }
  gotoUpdateMemberPage(doc_data) {
    this.shareDataServ.setSharedData(doc_data);
    this.navCtrl.navigateForward('update-member');
  }
}
