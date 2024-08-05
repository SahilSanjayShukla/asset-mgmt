import { Component } from '@angular/core';

@Component({
  selector: 'app-outflow-form',
  templateUrl: './outflow-form.component.html',
  styleUrls: ['./outflow-form.component.css']
})
export class OutflowFormComponent {
  categories = ['Rent', 'Utilities', 'Groceries', 'Transportation', 'Insurance', 'Education', 'Entertainment', 'Other Expenses'];
  subcategories = ['-', '-', '-', '-', '-', '-', '-', '-'];
  inflowItems = ['Rent payment', 'Electricity', 'Groceries', 'Bus fare', 'Health insurance', 'Tuition fees', 'Movies', 'Miscellaneous'];
  amountsPerMonth = [0, 0, 0, 0, 0, 0, 0, 0];
  amountsYearly = [0, 0, 0, 0, 0, 0, 0, 0];
  additionalRemarks = ['', '', '', '', '', '', '', ''];

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
