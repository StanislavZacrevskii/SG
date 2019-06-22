import {Component, OnInit, ViewChild} from '@angular/core';
import {
    MatDialog,
    MatTable
} from '@angular/material';
import { RecordDialogComponent } from './record-dialog/record-dialog.component';

@Component({
    selector: 'app-records',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    @ViewChild(MatTable, null) table: MatTable<any>;

    public displayedColumns: string[] = ["id", "title", "description", "createOn", "button"];
    public records: any[] = [
        {
            id: 1,
            title: "Some title",
            description: "Some description",
            createOn: "2018-12-19T13:23:25.000Z"
        },
        {
            id: 2,
            title: "Some title",
            description: "Some description",
            createOn: "2018-12-19T13:23:25.000Z"
        }
    ];

    addNewRecord() {
        let dialogRef = this.dialog.open(RecordDialogComponent, {
            width: '30vw'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && result.title && result.description) {
                this.records.push({
                    id: this.records.length + 1,
                    title: result.title,
                    description: result.description,
                    createOn: Date()
                });
                this.table.renderRows();
            }
        });
    }

    editRecord(element) {
        let dialogRef = this.dialog.open(RecordDialogComponent, {
            width: '30vw',
            data: {
                title: element.title,
                description: element.description
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && result.title && result.description) {
                let i = this.records.indexOf(element);
                this.records[i].title = result.title;
                this.records[i].description = result.description;
                this.table.renderRows();
            }
        })
    }

    deleteRecord(element) {
        this.records.splice(this.records.indexOf(element), 1);
        this.table.renderRows();
    }

}
