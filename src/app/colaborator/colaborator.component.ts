import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-colaborator',
  templateUrl: './colaborator.component.html',
  styleUrls: ['./colaborator.component.css']
})
export class ColaboratorComponent {
  colaborators:any;
  constructor(private dataService:DataService) { }
  ngOnInit(): void {
    this.getColaboratorsData();
  }

  getColaboratorsData(){
    this.dataService.getColaborators().subscribe(res => {
      this.colaborators = res;
      this.colaborators.forEach(colaborator => {
        colaborator.stacks = JSON.parse(colaborator.stacks);
        colaborator.stacks.join(',');

      });
    });
  }
}
