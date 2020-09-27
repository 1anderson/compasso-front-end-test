import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './interceptor/interceptor.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap/alert/alert.module';


@NgModule({
  declarations: [InputSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InterceptorModule,
    HttpClientModule
  ],
  exports: [InputSearchComponent]
})
export class SharedModule { }
