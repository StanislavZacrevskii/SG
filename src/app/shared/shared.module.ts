import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import {
    MatIconModule,
    MatButtonModule,
    MatMenuModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        RouterModule
  ],
  exports: [
      NavigationComponent
  ]
})
export class SharedModule { }
