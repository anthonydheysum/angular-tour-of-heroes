import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'WindStorm'
  // };

  // going for service instead of direct constant import
  // heroes = HEROES;
  heroes: Hero[];

  // selectedHero: Hero;

  // HeroService directly declared and defined at injection site
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // initialize getting the heroes through service fetch
  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  // }

  // commenting it off to implement Observables
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
 
}
