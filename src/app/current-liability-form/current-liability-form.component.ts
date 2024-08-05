import { Component } from '@angular/core';

@Component({
  selector: 'app-current-liability-form',
  templateUrl: './current-liability-form.component.html',
  styleUrls: ['./current-liability-form.component.css']
})
export class CurrentLiabilityFormComponent {
  categories = ['Home Loan', 'Car Loan', 'Credit Card', 'Personal Loan', 'Education Loan', 'Other Liabilities'];
  subcategories = ['-', '-', '-', '-', '-', '-'];
  inflowItems = ['EMI Payment', 'EMI Payment', 'Monthly Payment', 'EMI Payment', 'EMI Payment', 'Miscellaneous'];
  currentOutstandingValues = [0, 0, 0, 0, 0, 0];
  emiPerMonth = [0, 0, 0, 0, 0, 0];
  rateOfInterest = [0, 0, 0, 0, 0, 0];
  liabilityHolderNames = ['', '', '', '', '', ''];
  lastInstallmentDates = ['', '', '', '', '', ''];
  additionalRemarks = ['', '', '', '', '', ''];

  addCategory() {
    this.categories.push('New Category');
  }

  addSubCategory() {
    this.subcategories.push('New SubCategory');
  }

  addInflowItem() {
    this.inflowItems.push('New Inflow Item');
  }
}

