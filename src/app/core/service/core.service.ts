import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  private getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
  }

  public getApiPath(): string {
    return this.getBaseUrl() + "api/main";
  }

  public getData() {
    return this.http.get(this.getBaseUrl() + 'api/main/returner')
      .subscribe( result => {
        console.log(result);
      });
  }
}
