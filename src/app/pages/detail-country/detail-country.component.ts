import { Component, OnInit } from '@angular/core';
import { Countrys } from './../constants/countrys';
import { CountrysService } from './../../services/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})

export class DetailCountryComponent implements OnInit {

  country: Countrys;

  constructor(private countrysService: CountrysService, private route: ActivatedRoute) { 
    // this.country = new Countrys();
  }

  ngOnInit(): void {
    console.log(window.history.state);
    const { country } = window.history.state;
    this.country = country;
    // this.getCountry();
  }
  
  goBack() {
    window.history.back();
  }

  getCountry(): void{
    const id = this.route.snapshot.paramMap.get("id");
    console.log('id', id);

    this.countrysService.getCountry(id).
    subscribe((country) => {
      console.log('country', country)
        this.country = country
    })
  }

}
