import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [NgIf],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent {
  @Input() name: string = 'Frederick';
  @Input() img: string = '../../assets/img/hamster/5.jpg';
  @Input() description: string = '3 Jahre alt';
  @Input() canFollow: boolean = true;
  // @Input() name: string = '';
  // @Input() img: string = '';
  // @Input() description: string = '';

  constructor(public fs: FriendService){}
}
