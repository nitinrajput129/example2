import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { ChipModule } from 'primeng/chip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { FXModule } from '../../../@fx/components/fx.module';
import { SkeltonModule } from '../../../@ui/skelton/skelton.module';
import { DataProviderApiListComponent } from './pages/data-provider-api-list/data-provider-api-list.component';
import {DataProviderAPIRoutingModule} from './data-provider-api-routing.module';
import { DataProviderCrudComponent } from './pages/data-provider-crud/data-provider-crud.component';
import {MatToolbarModule} from '@angular/material/toolbar';





@NgModule({
  declarations: [

  
    DataProviderApiListComponent,
          DataProviderCrudComponent,
  ],
  imports: [
    CommonModule,
    DataProviderAPIRoutingModule,
    MatCardModule,
    DialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    ChipModule,
    MatListModule,
    MatCheckboxModule,
    SkeltonModule,
    MatTableModule,
    MatDatepickerModule,
    CalendarModule,
    MatPaginatorModule,
    MatSortModule,
    ConfirmDialogModule,
    BreadcrumbModule,
    FXModule,
    MatMenuModule,
    MatDialogModule,
    SelectButtonModule,
    MatChipsModule,
    MatAutocompleteModule,
    ToastModule,
    MatToolbarModule
  
    
  ],
  providers: [],
})
export class DataProviderAPIModule { }
