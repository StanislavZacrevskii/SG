import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Defaults} from "../../../shared/settings/defaults";

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public registerCreateForm: FormGroup;
    public regexp = Defaults.regexp;

    constructor(private formBuilder: FormBuilder,
                private router: Router) { }

    ngOnInit() {
        this.createRegisterCreateForm();
    }

    createRegisterCreateForm() {
        this.registerCreateForm = this.formBuilder.group({
            'registerName': ['', [Validators.required]],
            'registerEmail': ['', [Validators.required, Validators.email]],
            'registerTelephone': ['', [Validators.required, Validators.pattern(this.regexp.telephoneRegexp)]],
            'registerPassword': ['', [Validators.required, Validators.pattern(this.regexp.registerPassword)]]
        })
    }

    registerUser() {
        Object.keys(this.registerCreateForm.controls).forEach(field => {
            const control = this.registerCreateForm.get(field);
            control.markAsTouched({onlySelf: true});
        });

        if (this.registerCreateForm.valid) {
            setTimeout(() => {
                this.router.navigate(['/']);
            },1000)
        }
    }

}
