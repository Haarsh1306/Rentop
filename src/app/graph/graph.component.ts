import { Component } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent {
  departmentDetails :any[]=[
  { "name": "Sales", "completionPercentage": 50 },
  { "name": "Marketing", "completionPercentage": 57 },
  { "name": "Design", "completionPercentage": 83 },
  { "name": "HR", "completionPercentage": 78 },
  { "name": "Legal", "completionPercentage": 92 },
  { "name": "IT", "completionPercentage": 23 },
  { "name": "OPS", "completionPercentage": 43 }
  ]

  graphs: any[] = [{ name: "Bar Chart" }, {name: 'Pie Chart'}];
  
  
}
