import { Hero } from './../../hero.model';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss',
})
export class HeroDetailsComponent {
  @Input() hero?: Hero;
}
