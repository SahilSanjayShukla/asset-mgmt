import { Component } from '@angular/core';

@Component({
  selector: 'app-actual-form',
  templateUrl: './actual-form.component.html',
  styleUrls: ['./actual-form.component.css']
})
export class ActualFormComponent {
  goals = [
    { srNo: 1, majorHead: '', minorHead: '', planningDate: '', requiredYear: '', amountRequiredToday: 0, futureCorpusRequired: 0, balanceAmountRequired: 0, perMonthContribution: 0, remarks: '' }
  ];

  addGoal() {
    const newSrNo = this.goals.length + 1;
    this.goals.push({
      srNo: newSrNo,
      majorHead: '',
      minorHead: '',
      planningDate: '',
      requiredYear: '',
      amountRequiredToday: 0,
      futureCorpusRequired: 0,
      balanceAmountRequired: 0,
      perMonthContribution: 0,
      remarks: ''
    });
  }
}
