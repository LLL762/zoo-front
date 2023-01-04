import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs';
import EnvUtil from 'src/app/util/EnvUtil';
import { Enclosure } from './model/Enclosure';

@Injectable({
  providedIn: 'root'
})
export class EnclosureService {

  constructor(private http: HttpClient) { }

  getEnclosureById(id: string) {
    const url = EnvUtil.getApiUrl('ENCLOSURES') + "/" + id;
    return this.http.get<any>(url).pipe(
      shareReplay()
    );
  }

}
