import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Products } from "./products/products";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Hero, Products],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
