import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginCreateForm: FormGroup;
    public hide = true;
    public loginEmailTmp: string = "admin@admin.com";
    public loginPasswordTmp: string = "1111";

    constructor(private formBuilder: FormBuilder,
                private router: Router) { }

    ngOnInit() {
        this.createLoginCreateForm()
    }

    createLoginCreateForm() {
        this.loginCreateForm = this.formBuilder.group({
            'loginEmail': ['', [Validators.required, Validators.email]],
            'loginPassword': ['', [Validators.required]]
        })
    }

    login() {
        Object.keys(this.loginCreateForm.controls).forEach(field => {
            const control = this.loginCreateForm.get(field);
            control.markAsTouched({onlySelf: true});
        });

        if (this.loginCreateForm.valid) {
            let formData = this.loginCreateForm.value;
            if (formData.loginEmail === this.loginEmailTmp && formData.loginPassword === this.loginPasswordTmp) {
                setTimeout(() => {
                    this.router.navigate(['/']);
                },1000)
            } else if (formData.loginEmail === this.loginEmailTmp && formData.loginPassword !== this.loginPasswordTmp) {
                this.loginCreateForm.controls['loginPassword'].setErrors({wrong: 'wrong'});
            } else if (formData.loginEmail !== this.loginEmailTmp && formData.loginPassword === this.loginPasswordTmp) {
                this.loginCreateForm.controls['loginEmail'].setErrors({wrong: 'wrong'});
            } else {
                this.loginCreateForm.controls['loginPassword'].setErrors({wrong: 'wrong'});
                this.loginCreateForm.controls['loginEmail'].setErrors({wrong: 'wrong'});
            }
        }
    }

}
