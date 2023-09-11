import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  [x: string]: any;
  sharedData: any;

  constructor() { }
  setSharedData(data: any) {
    this.sharedData = data;
  }
  getSharedData() {
    return this.sharedData;
  }
}
