import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Colaborator } from 'src/app/models/colaborator';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register-colaborator',
  templateUrl: './register-colaborator.component.html',
  styleUrls: ['./register-colaborator.component.css']
})
export class RegisterColaboratorComponent implements OnInit {
    colaborator = new Colaborator();
    stacksFormArray: Array<any> = [];
    stacks: Array<any> = [
      {description: 'Git', value: 'Git', id: 1},
      {description: "React", value: 'React', id: 2},
      {description: "PHP", value: 'PHP', id: 3},
      {description: "NodeJS", value: 'NodeJS', id: 4},
      {description: "DevOps", value: 'DevOps', id: 5},
      {description: "Banco de Dados", value: 'db', id: 6},
      {description: "TypeScript", value: 'TypeScript', id: 7},
    ];
    
    constructor(private dataService:DataService, private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.getNamefromURL();
    }

    onCheckChange(stack:any, isChecked:boolean){
        if(isChecked) {
          this.stacksFormArray.push(stack);
        } else {
          let index = this.stacksFormArray.indexOf(stack);
          this.stacksFormArray.splice(index,1);
        }
        this.colaborator.stacks = this.stacksFormArray;
    }

    registerColaborator(){
      this.colaborator.stacks = JSON.stringify(this.stacksFormArray);
      this.dataService.registerColaborator(this.colaborator).subscribe(res => {
        console.log(res);
      });
    }

    getNamefromURL(){
      this.route.params.subscribe(params => {
        this.colaborator.name = params['name'];
      });
    }
  }
