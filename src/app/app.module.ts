import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AddUserDialogComponent } from './components/add-user-diag/add-user-diag.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFilterComponent,
    UserTableComponent,
    AddUserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginator,
    MatTable,
    FormsModule, 
    ReactiveFormsModule,    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
