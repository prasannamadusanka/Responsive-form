import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[3], 'Chuck Overstreet');
  x:String="dbjc";

  newHero() {
    this.model = new Hero(42, '', '');
  }

  submitted = false;

  onSubmit() { this.submitted = true; }


  constructor() { }

  ngOnInit(): void {
  }

}
