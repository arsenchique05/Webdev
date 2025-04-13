import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "./models";
import {CompanyService} from "./company.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hh_front';
  newName: string = '';
  newDescription: string = '';
  newCity: string = '';
  newAddress: string = '';
  companies : Company[] = [];

  vacancies : Vacancy[] = [];


  constructor(private companyService : CompanyService){

  }
  ngOnInit(): void {
    console.log('hello')
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies
    })
  }

  addCompany(){
    this.companyService.createCompany(this.newName,this.newDescription,this.newCity,this.newAddress).subscribe((company) =>{
      this.companies.push(company)
      this.newAddress = ''
      this.newName = ''
      this.newCity = ''
      this.newDescription = ''
    });
  }

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe((data) => {
      this.companies = this.companies.filter((company) => company.id != id)
    })
  }

  getVacancies(id: number) {
    console.log(id)
    this.companyService.getVacancies(id).subscribe((vacancies) => {
      this.vacancies = vacancies;
    } )
  }
}
