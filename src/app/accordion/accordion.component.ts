import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  isInflowExpanded = false;
  isAssetsExpanded = false;
  isOutflowExpanded = false;
  isLiabilityExpanded = false;
  isActualExpanded = false;

  toggleAccordion(type: string) {
    if (type === 'inflow') {
      this.isInflowExpanded = !this.isInflowExpanded;
      if (this.isInflowExpanded) {
        this.isAssetsExpanded = false;
        this.isOutflowExpanded = false;
        this.isLiabilityExpanded = false;
        this.isActualExpanded = false;
      }
    } else if (type === 'assets') {
      this.isAssetsExpanded = !this.isAssetsExpanded;
      if (this.isAssetsExpanded) {
        this.isInflowExpanded = false;
        this.isOutflowExpanded = false;
        this.isLiabilityExpanded = false;
        this.isActualExpanded = false;
      }
    } else if (type === 'outflow') {
      this.isOutflowExpanded = !this.isOutflowExpanded;
      if (this.isOutflowExpanded) {
        this.isInflowExpanded = false;
        this.isAssetsExpanded = false;
        this.isLiabilityExpanded = false;
        this.isActualExpanded = false;
      }
    } else if (type === 'liability') {
      this.isLiabilityExpanded = !this.isLiabilityExpanded;
      if (this.isLiabilityExpanded) {
        this.isInflowExpanded = false;
        this.isAssetsExpanded = false;
        this.isOutflowExpanded = false;
        this.isActualExpanded = false;
      }
    } else if (type === 'actual') {
      this.isActualExpanded = !this.isActualExpanded;
      if (this.isActualExpanded) {
        this.isInflowExpanded = false;
        this.isAssetsExpanded = false;
        this.isOutflowExpanded = false;
        this.isLiabilityExpanded = false;
      }
    }
  }
}
