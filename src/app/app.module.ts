import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { HomePageComponent } from './components/home-page/home-page.component';
import {
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatTableModule
} from "@angular/material";
import { RecordDialogComponent } from './components/home-page/record-dialog/record-dialog.component';
import {
    FormsModule,
    ReactiveFormsModule
} from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        RecordDialogComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [RecordDialogComponent]
})
export class AppModule { }
