import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Company } from '../company';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularUseCases';
  singleCompany: Company = {
    companyName: "",
    yearOfEstablishment: 0,
    countOfEmployees: 0,
    Location: ""
    
  };

   companyList: Company[]=[];
  // [{ companyName :'xyz', location: 'Chennai', yearOfEstablishment: 2025, countOfEmployees: 5000 }] 

  onSubmit(singleCompany : Company){
    this.companyList.push(singleCompany)
    console.log(this.companyList);
  }

  OnClear(singleCompany : Company){
    this.singleCompany.Location="";
    this.singleCompany.companyName="";
    this.singleCompany.yearOfEstablishment=0;
    this.singleCompany.countOfEmployees=0;
  }
}
