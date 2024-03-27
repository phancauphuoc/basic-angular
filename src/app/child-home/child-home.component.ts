import { Component, Input } from "@angular/core";
import { HomeService } from "../homeServices.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-child-home',
    imports: [CommonModule, RouterModule],
    standalone: true,
    template: `
    <section class="listing">
        <img class="listing-photo" [src]="dataItem.photo" alt="exterior photo of {{dataItem.name}}"/>
        <h2 class="listing-heading">{{dataItem.name}}</h2>
        <p class="listing-location">{{dataItem.city}},{{dataItem.state}}</p>
        <a [routerLink]="['detail', dataItem.id]">Learn More</a>
    </section>
    `,
    styleUrl: './child-home.component.css'
})

export class ChildHomeComponent {
    titlePage = 'child home component';
    @Input() dataItem!: any;
    constructor() {
    }

    ngOnInit() {
        console.log('dataItem', this.dataItem);
    }
}