import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { DividerModule } from 'primeng/divider';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphComponent } from './graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    GraphComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    DividerModule,
    TableModule,
    DropdownModule,
    ChartModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
