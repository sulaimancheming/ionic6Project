import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'หน้าหลัก', url: '/aboutme', icon: 'home' },
    { title: 'แกลเลอรี', url: '/mygallery', icon: 'images' },
    { title: 'ข่าวสาร', url: '/news', icon: 'newspaper' },
    { title: 'ติดต่อเรา', url: '/contactus', icon: 'mail-open' },
    { title: 'ข้อมูลสมาชิก', url: '/members', icon: 'people' },
    { title: 'ถ่ายภาพและแชร์รูปถ่าย', url: '/camera', icon: 'camera' },
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
