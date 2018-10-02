import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatGridListModule} from '@angular/material/grid-list';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatFormFieldModule,MatInputModule,MatGridListModule],
  exports: [MatFormFieldModule, MatInputModule,MatGridListModule]
})
export class MaterialModule { }