import { HeroService } from './../hero.service';
import { Hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from '../hero.detail/hero-details/hero-details.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  imports: [FormsModule, CommonModule, HeroDetailsComponent],
})
export class HeroesComponent implements OnInit {
  //propriedade que vai receber listagem
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
