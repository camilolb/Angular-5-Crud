import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Crud - Camilo Lopez';

  employees = [
    {'name': 'Cristian', position: 'Fullstack', email: 'clopezb@hotmail.com'},
    {'name': 'Camilo', position: 'Ruby on Rails', email: 'clopezb@hotmail.com'},
    {'name': 'Lopez', position: 'Angular, Vuejs, js, Jquery', email: 'clopezb@hotmail.com'},
    {'name': 'Bedoya', position: 'HTML5, CSS3, Bootstrap, materialize', email: 'clopezb@hotmail.com'}

  ];
      model:any = {};
      model2:any = {};

  addEmployee():void{
    this.employees.push(this.model);
  }

  deleteEmployee(i):void{
    var answer = confirm('¿Desea eliminar el usuario?');
    if (answer){
      this.employees.splice(i, 1);
    }
  }

  myValue;
  editEmployee(i):void{
     this.model2.name = this.employees[i].name;
     this.model2.position = this.employees[i].position;
     this.model2.email = this.employees[i].email;
     this.myValue = i;
  }

  updateEmployee():void{
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++){
      if (i == j){
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }

  }
}
