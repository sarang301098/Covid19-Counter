import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { GlobalDataSummary } from '../models/globle-data';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private baseUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/'
  private globalDataUrl = ''
  private ext = '.csv';
  month;
  date;
  year;

  getDate(date:number){
    if(date<10){
      return '0'+date;
    }
    return date;
  }
  constructor(private http : HttpClient) 
  {
      let now = new Date();
      this.month = now.getMonth() +1;
      this.date = now.getDate();
      this.year = now.getFullYear();

      this.globalDataUrl = `${this.baseUrl}${this.getDate(this.month)}-${this.getDate(this.date)}-${this.year}${this.ext}`;
   }

  getGlobalData(){
    return this.http.get(this.globalDataUrl , {responseType : 'text'}).pipe(
      map(result => {
        let data : GlobalDataSummary[] = [];
        let rows :string[] = result.split('\n');
        rows.splice(0,1);


        let raw = {}


        rows.forEach(row=>{
            let cols = row.split(/,(?=\S)/)

             let cs = {
              country :cols[3],
              confirmed : +cols[7],
              deaths : +cols[8],
              recovered : +cols[9],
              active : +cols[10],
             };

            let temp : GlobalDataSummary = raw[cs.country];
            if(temp){
                temp.active = cs.active + temp.active;
                temp.confirmed = cs.confirmed + temp.confirmed;
                temp.deaths = cs.deaths + temp.deaths;
                temp.recovered = cs.recovered + temp.recovered;
                raw[cs.country] = temp;
            }
            else{
              raw[cs.country] = cs;
            }

        })


        return <GlobalDataSummary[]>Object.values(raw);
      }),
      catchError((error : HttpErrorResponse)=>{
        if(error.status == 404){
          this.date = this.date-1;
          this.globalDataUrl = `${this.baseUrl}${this.getDate(this.month)}-${this.getDate(this.date)}-${this.year}${this.ext}`;
          return this.getGlobalData()
        }
      })
    )
  }
}
