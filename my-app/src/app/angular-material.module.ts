import {MdButtonModule, MdCheckboxModule, MdIconModule, MdCardModule, MdInputModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdIconModule, MdCardModule, MdInputModule],
  exports: [MdButtonModule, MdCheckboxModule, MdIconModule, MdCardModule, MdInputModule]
})
export class MyMaterialModule { }