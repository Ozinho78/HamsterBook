import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  // names = ['Marius'];
  // texts = [
  //   '2 Jahre alt',
  // ];
  // images = [
  //   '../../assets/img/hamster/5.jpg',
  // ];

  names = [];
  texts = [];
  images = [];

  // addFriend('Peter', 'Hallo', '../../assets/img/hamster/6.jpg')
  addFriend(name:string, text:string, image:string){
    this.names.push(name);
    this.texts.push(text);
    this.images.push(image);
  }

}
