import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit {

  departmentDetails = [
    { "name": "Sales", "completionPercentage": 50 },
    { "name": "Marketing", "completionPercentage": 57 },
    { "name": "Design", "completionPercentage": 83 },
    { "name": "HR", "completionPercentage": 78 },
    { "name": "Legal", "completionPercentage": 92 },
    { "name": "IT", "completionPercentage": 23 },
    { "name": "OPS", "completionPercentage": 43 }
];
constructor(){

}
ngOnInit(): void {
  
  new Chart('myChart', {
    type: 'bar',
    data: {
      labels: ['Sales', 'Marketing', 'Design', 'HR', 'Legal', 'IT', "OPS"],
      datasets: [{
        label: 'Percentage',
        data: [50, 57, 83, 78, 92, 23,43],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
}
