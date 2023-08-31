import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  messages = [
    { from: 'titulo', subject: 'subtitulo', content: 'content' },
    { from: 'titulo', subject: 'subtitulo', content: 'content' },
    { from: 'titulo', subject: 'subtitulo', content: 'content' },
    { from: 'titulo', subject: 'subtitulo', content: 'content' },
  ]
}
