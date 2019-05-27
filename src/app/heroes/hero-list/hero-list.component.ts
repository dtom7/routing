import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHeroId: number;

  heroes: Hero[];

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
    console.log('HeroListComponent - constructor');
  }

  ngOnInit() {
    console.log('HeroListComponent - ngOnInit');
    this.getHeroes();
    this.route.paramMap.pipe(
      map((parms) => parms.get('id'))
    ).subscribe((id) => this.selectedHeroId = +id);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
