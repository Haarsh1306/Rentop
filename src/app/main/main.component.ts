import { Component } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  items: any[] = [
    { label: 'Report', icon: 'pi pi-file' },
    { label: 'User Progress', icon: 'pi pi-user' }
  ];

  activeItem: any = this.items[0];

  data1: any[]=[
    {value:'1.1K', para:'Total Enrollment' },
    {value:'15', para:'Yet To Start'},
    {value:'50', para:'In Progress'},
    {value:'108', para:'Completed'},
    

  ]
  data2: any[]=[
    {value:'75%', para:'Average Progress'},
    {value:'42 Min', para:'Average Speed Time'},

  ]
}
