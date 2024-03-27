import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ButtonModule } from "primeng/button"
import { CardModule } from "primeng/card";

@Component({
    selector: 'pass-value-children',
    standalone: true,
    imports: [ButtonModule, CardModule],
    template: `
    <div class="flex justify-content-between flex-wrap">
        <p-card header="data from parent">
            <p>data from parent => {{dataFormParent}}</p>
        </p-card>
        <p-card header="handle at children">
            <div>
                <p-button icon="pi pi-plus" severity="success" [style]="{'margin-right': '10px'}" (onClick)="handleBtnPlus()">
                </p-button>
                <p-button icon="pi pi-minus" severity="success" (onClick)="handleBtnMinus()"></p-button>
            </div>
        </p-card>
    </div>
    <label for="item-input">Add an item:</label>
    <input type="text" id="item-input" #newItem/>
    <button type="button" (click)="addNewItem(newItem.value)">Add to parent's list</button>
    `
})
export class PassValueChild {
    @Input() dataFormParent!: number;
    @Output() newItemEvent = new EventEmitter<string>();
    @Output() newItemEvent01 = new EventEmitter<number>();
    dataAtChild: number = 10;

    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }

    handleBtnPlus() {
        this.dataAtChild += 1;
        this.newItemEvent01.emit(this.dataAtChild);
    }
    handleBtnMinus() {
        this.dataAtChild -= 1;
        this.newItemEvent01.emit(this.dataAtChild);
        console.log('dataAtChild', this.dataAtChild);
    }
    // addNewItem01() {
    //     console.log('nanana')
    //     this.newItemEvent01.emit(this.dataAtChild);
    // }

    constructor() {

    }

    ngOnInit(): void {
        this.newItemEvent01.emit(this.dataAtChild);
    }

}