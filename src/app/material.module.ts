import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatGridListModule} from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [MatFormFieldModule,MatInputModule,MatGridListModule,MatToolbarModule,MatMenuModule,MatIconModule,MatButtonModule],
  exports: [MatFormFieldModule, MatInputModule,MatGridListModule,MatToolbarModule,MatMenuModule,MatIconModule,MatButtonModule]
})
export class MaterialModule { }