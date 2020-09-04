import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  candidateList: any[] = [];
  isAscending = false;

  constructor() {
    this.candidateList = [
      { id: 11, name: 'Ash', department: 'Finance', joining_date: '8/10/2016' },
      { id: 12, name: 'John', department: 'HR', joining_date: '18/1/2011' },
      {
        id: 13,
        name: 'Zuri',
        department: 'Operations',
        joining_date: '28/11/2019',
      },
      {
        id: 14,
        name: 'Vish',
        department: 'Development',
        joining_date: '7/7/2017',
      },
      {
        id: 15,
        name: 'Barry',
        department: 'Operations',
        joining_date: '19/8/2018',
      },
      { id: 16, name: 'Ady', department: 'Finance', joining_date: '5/10/2014' },
      {
        id: 17,
        name: 'Gare',
        department: 'Development',
        joining_date: '6/4/2014',
      },
      {
        id: 18,
        name: 'Hola',
        department: 'Development',
        joining_date: '8/12/2010',
      },
      { id: 19, name: 'Ola', department: 'HR', joining_date: '7/5/2011' },
      {
        id: 20,
        name: 'Kim',
        department: 'Finance',
        joining_date: '20/10/2010',
      },
    ];
  }

  ngOnInit(): void {}

  sortCandiates(key: string) {
    this.isAscending = !this.isAscending;
    this.candidateList = this.candidateList.sort((a, b) => {
      if (key === 'joining_date') {
        const firstDate = a[key].split('/');
        const secondDate = b[key].split('/');
        const newFirstDate = new Date(
          Number(firstDate[2]),
          Number(firstDate[1]),
          Number(firstDate[0])
        );
        const newSecondDate = new Date(
          Number(secondDate[2]),
          Number(secondDate[1]),
          Number(secondDate[0])
        );
        return newFirstDate.getTime() > newSecondDate.getTime()
          ? this.isAscending
            ? 1
            : -1
          : newFirstDate.getTime() < newSecondDate.getTime()
          ? this.isAscending
            ? -1
            : 1
          : 0;
      }
      return a[key] > b[key]
        ? this.isAscending
          ? 1
          : -1
        : a[key] < b[key]
        ? this.isAscending
          ? -1
          : 1
        : 0;
    });
  }
}
