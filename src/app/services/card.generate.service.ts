import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardGenerateService {

  cardDetails:Card;
  constructor() { }
  saveCardDetails(card:Card){
    this.cardDetails = card;
  }
  getCardDetails(){
    return this.cardDetails;
  }

}
