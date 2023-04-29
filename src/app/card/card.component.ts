import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Card } from '../models/card.model';
import { CardGenerateService } from '../services/card.generate.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit{
  popup = false;
  cardDetails : Card
  constructor(private cardGenerateService: CardGenerateService){}
  ngOnInit(){
    this.cardDetails = this.cardGenerateService.cardDetails;
  }
}
