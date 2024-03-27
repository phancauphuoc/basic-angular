import { Component } from "@angular/core";
import { ChildHomeComponent } from "../child-home/child-home.component";
import { HomeService } from "../homeServices.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { housingLocation } from "../typeProperty";


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ChildHomeComponent, CommonModule, FormsModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {
    homeName = 'App Home';
    dataHomeList: housingLocation[] = [];
    filteredData: housingLocation[] = [];
    homeServices = new HomeService();
    inputtest: any = 'aaa';
    loading: boolean = true;
    constructor() {
        console.log('this is place component home will run');
        this.homeServices.getAllData().then(data => {
            console.log('data ay home ==>', data);
            this.dataHomeList = data;
            this.filteredData = data;
        });
        this.handleLoading();
    }

    handleLoading() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 2000);
    }

    handleInput = () => {
        this.inputtest = 'vvv';
    }

    handleChangeInput(value: any) {

    }

    handleClick(value: any) {
        console.log('first', value);
        this.handleLoading();
        if (!value) {
            this.filteredData = this.dataHomeList;
            return;
        }
        this.filteredData = this.dataHomeList.filter(
            (housingLocation: any) => housingLocation?.city.toLowerCase().includes(value.toLowerCase())
        );
        console.log('this.dataHomeList', this.dataHomeList);
        console.log('this.filteredData', this.filteredData);
    }
}