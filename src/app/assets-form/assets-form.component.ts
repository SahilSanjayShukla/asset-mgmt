import { Component } from '@angular/core';

@Component({
  selector: 'app-assets-form',
  templateUrl: './assets-form.component.html',
  styleUrls: ['./assets-form.component.css']
})
export class AssetsFormComponent {
  categories = ['Stock', 'Mutual Fund', 'Bank FD', 'Property', 'Gold', 'Public Provident Fund (PPF)', 'LIC', 'Other Assets'];
  subcategories = ['-', '-', 'Min 5 Year', '-', '-', 'Self Contribution', 'Policy Amount', 'Cars'];
  inflowItems = ['Stock amount', 'Non ELLS', '-', 'Amount', '-', 'Employer contribution', '-', 'Plant'];
  currentValues = [0, 0, 0, 0, 0, 0, 0, 0];
  amountsYearly = [0, 0, 0, 0, 0, 0, 0, 0];
  assetItems = [0, 0, 0, 0, 0, 0, 0, 0];

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
