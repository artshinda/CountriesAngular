import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countrys } from '../pages/constants/countrys';

@Injectable({
    providedIn: 'root'
})

export class CountrysService{
    private BASE_URL = 'https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/country';
    constructor(private http: HttpClient){}
        getCountrys(){
            return this.http.get<Countrys[]>(`${this.BASE_URL}`);
        }

        getCountry(id){
            console.log('zzz')
            return this.http.get<Countrys>(`${this.BASE_URL}/${id}`);
        }

}