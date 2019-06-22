import {
    Component,
    Inject,
    OnInit} from '@angular/core';
import {
    MatDialogRef,
    MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { Defaults } from '../../../shared/settings/defaults';

@Component({
  selector: 'app-record-dialog',
  templateUrl: './record-dialog.component.html',
  styleUrls: ['./record-dialog.component.scss']
})
export class RecordDialogComponent implements OnInit {

    public createRecordForm: FormGroup;
    public limit = Defaults.limit;
    public dialogTitle:string = "Add new record";
    public editMode: boolean = false;

    constructor(private formBuilder: FormBuilder,
                @Inject(MAT_DIALOG_DATA) public dataRecord: any,
                private dialogRef: MatDialogRef<RecordDialogComponent>) {
        if (dataRecord) {
            this.editMode = true;
        }
    }

    ngOnInit() {
        this.createRecordCreateForm();
        if (this.editMode) {
            this.setRecordInfo();
        }
    }

    createRecordCreateForm() {
        this.createRecordForm = this.formBuilder.group({
            'title': ['', [Validators.required, Validators.maxLength(this.limit.titleRecordMax)]],
            'description': ['', [Validators.required, Validators.maxLength(this.limit.recordDescMax)]],
        })
    }

    setRecordInfo() {
        this.createRecordForm.setValue({
            title: this.dataRecord.title,
            description: this.dataRecord.description
        })
    }

    saveRecord() {
        this.dialogRef.close(this.createRecordForm.value);
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }

}
