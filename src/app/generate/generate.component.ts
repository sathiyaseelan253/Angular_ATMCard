import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { CardGenerateService } from '../services/card.generate.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
  inputForm : FormGroup
  constructor(private cardGenerateService:CardGenerateService,private router:Router){}
  ngOnInit(){
    this.inputForm = new FormGroup({
      cardNo: new FormControl('',[Validators.required]),
      cvv: new FormControl('',[Validators.required,Validators.minLength(3)]),
      month: new FormControl('',[Validators.required]),
      year: new FormControl('',[Validators.required]),
      avlBalance: new FormControl('',[Validators.required]),
    });
  }
  onFormSubmit(){
    this.cardGenerateService.saveCardDetails(this.inputForm.value);
    this.router.navigate(['./card']);
    console.log("Submitted values: ",this.inputForm.value);
  }
}
