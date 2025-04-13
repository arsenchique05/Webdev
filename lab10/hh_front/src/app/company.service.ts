import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://localhost:8000'
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies/`)
  }

  createCompany(companyName: string, companyDescription: string,
                companyCity: string, companyAddress: string): Observable<Company>{
    return this.client.post<Company>(
      `${this.BASE_URL}/api/companies/`,
      {
        name: companyName,
        description: companyDescription,
        city: companyCity,
        address: companyAddress
      }
    )
  }

  deleteCompany(id : number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/companies/${id}/`
    )
  }

  getVacancies(id : number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies/`)
  }
}
