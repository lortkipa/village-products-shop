import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Products } from "./products/products";
import { About } from "./about/about";
import { WhyUs } from "./why-us/why-us";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Hero, Products, About, WhyUs],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
