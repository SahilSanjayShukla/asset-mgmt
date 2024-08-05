import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AssetsFormComponent } from './assets-form/assets-form.component';
import { OutflowFormComponent } from './outflow-form/outflow-form.component';
import { CurrentLiabilityFormComponent } from './current-liability-form/current-liability-form.component';
import { ActualFormComponent } from './actual-form/actual-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FormComponent,
    AccordionComponent,
    AssetsFormComponent,
    OutflowFormComponent,
    CurrentLiabilityFormComponent,
    ActualFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
