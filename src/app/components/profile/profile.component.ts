import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Defaults} from "../../shared/settings/defaults";
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    public regexp = Defaults.regexp;
    public currentUserAva: string = "http://placekitten.com/g/100/100";
    public createProfileForm: FormGroup;


    constructor(private formBuilder: FormBuilder,
                private router: Router) { }

    ngOnInit() {
        this.createProfileCreateForm();
        this.setProfileInfo();
    }

    createProfileCreateForm() {
        this.createProfileForm = this.formBuilder.group({
            'name': ['', [Validators.required]],
            'email': [{value: '', disabled: true}, [Validators.required, Validators.email]],
            'telephone': ['', [Validators.required, Validators.pattern(this.regexp.telephoneRegexp)]],
        })
    }

    setProfileInfo() {
        this.createProfileForm.setValue({
            name: 'Johan',
            email: 'test@gmail.com',
            telephone: '0976880625'
        })
    }

    saveProfile() {
        setTimeout(() => {
            this.goToHomePage();
        },2000)
    }

    goToHomePage() {
        this.router.navigate(['/']);
    }
}
