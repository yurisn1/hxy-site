import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-colaborator',
  templateUrl: './colaborators.component.html',
  styleUrls: ['./colaborators.component.css']
})
export class ColaboratorsComponent {
  colaborators:any = [];
  dtOptions: DataTables.Settings = {};
  
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
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

