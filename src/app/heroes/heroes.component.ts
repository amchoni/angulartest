import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HEROES } from '../hero-details/mock-heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() { }
  
    ngOnInit() {
    }
  
    // inicijalizacija
  heroObj: Hero = {
    id: 1,
    name: "Amar"
  };
  hero = 'Ime heroja je';
  heroes = HEROES;
}
