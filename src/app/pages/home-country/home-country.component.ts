import { Component, OnInit } from '@angular/core';
import { Countrys } from '../constants/countrys';
import { CountrysService } from 'src/app/services/country.service';

@Component({
  selector: 'app-home-country',
  templateUrl: './home-country.component.html',
  styleUrls: ['./home-country.component.css']
})
export class HomeCountryComponent implements OnInit {

  countrys: Countrys[];
  country: Countrys[];
  countrysArea : Countrys[];

  nameAppartement: string = "";
  descriptionAppartement: string = "";

  title = 'Country Dwaaaaay';

  constructor(private countrysService: CountrysService) { 
    
  }

  ngOnInit(): void {
    this.getCountrys()
  }

  getCountrys(): void {
    this.countrysService.getCountrys().subscribe((countrys) => {
      console.log('countrys', countrys)
      this.countrys = countrys.sort((a, b) => b.population - a.population).slice(0,3);
      this.countrysArea = countrys.sort((a, b) => b.area - a.area).slice(0,3);
    })
  }

}
