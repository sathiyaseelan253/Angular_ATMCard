import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Card } from '../models/card.model';
import { CardGenerateService } from '../services/card.generate.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit,AfterViewInit{
  popup = false;
  cardDetails : Card
  @ViewChild('cardNo') cardNo!: ElementRef;
  @ViewChild('cvv') cvv!: ElementRef;
  @ViewChild('month') month!: ElementRef;
  @ViewChild('year') year!: ElementRef;
  @ViewChild('availableBalance') availableBalance!: ElementRef;

  constructor(private cardGenerateService: CardGenerateService){}
  ngOnInit(){
    this.cardDetails = this.cardGenerateService.cardDetails;
    console.log("Card details:",this.cardDetails);
  }
  ngAfterViewInit() {
    console.log("Inside ngAfterViewInit ");
    this.cardNo.nativeElement.value = this.cardDetails.cardNo;
    this.cvv.nativeElement.value = this.cardDetails.cvv;
    this.month.nativeElement.value = this.cardDetails.month;
    this.year.nativeElement.value = this.cardDetails.year;
    this.availableBalance.nativeElement.value = this.cardDetails.availableBalance;
  }
}
