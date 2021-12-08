import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  
  count = 0;
  previousIndex :number=0;
  studentData: any;
  type: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData() {
    this.http.get('./../../assets/json/user.json').subscribe((res) => {
      this.studentData = res;
      console.log(this.studentData);
    });
  }

  sortingName(type: string,index:number) {
    console.log(type);
   
    if(this.previousIndex !==index){
      this.count = 0;
    }
    this.previousIndex = index;
    this.count++;
    if (type == 'name') {
      if (this.count == 1) {
        this.studentData = this.studentData.sort((a: any, b: any) => {
          if (a.name < b.name) {
            return -1;
          }
        });
      }

      if (this.count == 2) {
        this.studentData = this.studentData.reverse();
      }

      if (this.count == 3) {
        this.getStudentData();
        this.count = 0;
      }
    }
  }

  sortingClass(type:string,index:number){

    this.type = type;

    if(this.previousIndex !==index){
      this.count = 0;
    }
    this.previousIndex = index;
    
    if(this.type == 'class'){
      this.count++;
      if(this.count == 1){
        this.studentData.sort((a: any, b: any) => {
          return a.class-b.class;
        });
      }

      if (this.count == 2) {
       this.studentData.sort((a: any, b: any) => {
          return b.class-a.class;
        });
      }

      if (this.count == 3) {
        this.getStudentData();
        this.count = 0;
      }
    }
  }

  sortingSub1(type:string,index:number){

    this.type = type;

    if(this.previousIndex !==index){
      this.count = 0;
    }
    this.previousIndex = index;
    
    if(this.type == 'sub1'){
      this.count++;
      if(this.count == 1){
        this.studentData.sort((a: any, b: any) => {
          return a.sub1-b.sub1;
        });
      }

      if (this.count == 2) {
       this.studentData.sort((a: any, b: any) => {
          return b.sub1-a.sub1;
        });
      }

      if (this.count == 3) {
        this.getStudentData();
        this.count = 0;
      }
    }
  }
  sortingSub2(type:string,index:number){

    this.type = type;

    if(this.previousIndex !==index){
      this.count = 0;
    }
    this.previousIndex = index;
    
    if(this.type == 'sub2'){
      this.count++;
      if(this.count == 1){
        this.studentData.sort((a: any, b: any) => {
          return a.sub2-b.sub2;
        });
      }

      if (this.count == 2) {
       this.studentData.sort((a: any, b: any) => {
          return b.sub2-a.sub2;
        });
      }

      if (this.count == 3) {
        this.getStudentData();
        this.count = 0;
      }
    }
  }

  sortingSub3(type:string,index:number){

    this.type = type;

    if(this.previousIndex !==index){
      this.count = 0;
    }
    this.previousIndex = index;
    
    if(this.type == 'sub3'){
      this.count++;
      if(this.count == 1){
        this.studentData.sort((a: any, b: any) => {
          return a.sub3-b.sub3;
        });
      }

      if (this.count == 2) {
       this.studentData.sort((a: any, b: any) => {
          return b.sub3-a.sub3;
        });
      }

      if (this.count == 3) {
        this.getStudentData();
        this.count = 0;
      }
    }
  }
}
