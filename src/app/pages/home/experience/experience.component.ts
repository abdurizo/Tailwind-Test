import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { CardService } from '../../../services/cards.service';
import { CardInterface, } from '../../../models/card.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  cardInterface!: CardInterface[];
  /**
   * 
   * @param cardService 
   */
  constructor(private cardService: CardService) {}
  /**
   * 
   */
  ngOnInit(): void {
    this.cardInterface = this.cardService.cards;
  }
}
