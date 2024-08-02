import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MyfirstserviceService {
_massage="hello this is service "

  constructor() { }


  getmassage(){
return this._massage;
  }
}
