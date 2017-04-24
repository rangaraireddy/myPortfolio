import {MdButtonModule, MdCheckboxModule, MdIconModule, MdGridListModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdIconModule, MdGridListModule],
  exports: [MdButtonModule, MdCheckboxModule, MdIconModule, MdGridListModule],
})
export class MyMaterialModule { }