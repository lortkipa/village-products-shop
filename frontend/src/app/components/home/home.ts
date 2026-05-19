import { Component } from '@angular/core';
import { Hero } from "./hero/hero";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
