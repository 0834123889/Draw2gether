import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],

  animations: [
    trigger('open', [

    ])
  ]

})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
