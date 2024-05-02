import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css'],
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() value?: String;

  constructor() {}

  ngOnInit() {}
}
