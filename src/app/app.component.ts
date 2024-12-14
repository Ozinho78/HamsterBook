import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HamsterCardComponent } from './hamster-card/hamster-card.component';
import { ProposalsComponent } from "./proposals/proposals.component";
import { FriendboxComponent } from "./friendbox/friendbox.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HamsterCardComponent, ProposalsComponent, FriendboxComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-project';

  postTexts = [
    'Hallo, mein Name ist Frederick. Ich bin hier, um neue Freunde zu treffen.',
    'Ich bin ein Hamster und ich liebe es, mich mit anderen Hamstern zu unterhalten',
    'Hallo zusammen. Freut mich, dass ihr hier seid.',
    'Hey. Mein Name ist Klaus. Hamster sein fetzt derbe.',
    'Hey. Mein Name ist Susanne. Ich bin 2 Jahre alt.',
    'Ich esse gerne Kekse.',
    'Ich bin ein Kuschelhamster.',
    'Ich heiße Michael. Meine Hobbys sind schlafen und programmieren.'
  ];

  hamsterImages = [
    '../../assets/img/hamster/1.jpg',
    '../../assets/img/hamster/2.jpg',
    '../../assets/img/hamster/3.jpg',
    '../../assets/img/hamster/4.jpg',
    '../../assets/img/hamster/5.jpg',
    '../../assets/img/hamster/6.jpg',
    '../../assets/img/hamster/7.jpg',
    '../../assets/img/hamster/8.jpg'
  ];


  buttonClicked(){
    alert('Hallo, wie geht es dir?')
  }
}
