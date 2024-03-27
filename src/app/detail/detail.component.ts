import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { housingLocation } from "../typeProperty";
import { HomeService } from "../homeServices.service";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-detail',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    template: `
    <div class="loading-overlay" *ngIf="true">
        <img src="../assets/loading-cat.svg" alt="Loading...">
    </div>
  <article class="content">
    <img class="listing-photo" [src]="dataItem?.photo"
      alt="Exterior photo of {{dataItem?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{dataItem?.name}}</h2>
      <p class="listing-location">{{dataItem?.city}}, {{dataItem?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{dataItem?.availableUnits}}</li>
        <li>Does this location have wifi: {{dataItem?.wifi}}</li>
        <li>Does this location have laundry: {{dataItem?.laundry}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
    `,
    styleUrl: './detail.component.css'
})
export class detailComponent {
    NamePage = 'Detail Page';
    baseUrl = 'http://localhost:3000/locations'
    dataItem: housingLocation | undefined;
    // homeServices = new HomeService;
    homeServices = inject(HomeService);
    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    });

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const id: any = this.route.snapshot.paramMap.get('id');
        console.log('id', id);
        this.homeServices.getDataById(id).then((data: housingLocation | undefined) => {
            this.dataItem = data;
            console.log('first', this.dataItem);
        });
    }

    submitApplication() {
        this.homeServices.submitApplication(
            this.applyForm.value.firstName ?? '',
            this.applyForm.value.lastName ?? '',
            this.applyForm.value.email ?? ''
        )
    }
}