import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  div1Oculta = true;

  ocultarDiv1() {
    this.div1Oculta = !this.div1Oculta;
  }

}
