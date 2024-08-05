import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  categories = ['Employment Income', 'Freelance', 'Stock Investment', 'Other Income'];
  subcategories = ['Full Time Income', 'Part Time Income', 'Dividend', 'Royalties'];
  inflowItems = ['Salary', 'Commission', 'Fees', 'Interest Income'];
  amountsPerMonth = [0, 0, 0, 0];
  amountsYearly = [0, 0, 0, 0];

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
