import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { PassValueChild } from '../pass-children/pass-children.component';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'pass-value-parent',
    standalone: true,
    imports: [PassValueChild, ButtonModule, CardModule, CommonModule, FormsModule],
    templateUrl: './pass-parent.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PassValueParent {
    valueStateParent = 1;
    data: number = 0;

    handlePlus() {
        this.valueStateParent += 1;
    }

    handleMinus() {
        this.valueStateParent -= 1;
    }

    items = ['item1', 'item2', 'item3', 'item4'];
    addItem(newItems: string) {
        this.items.push(newItems);
    }

    getDataFromChild(newValue: any) {
        console.log('getDataFromChild()', newValue);
        this.data = newValue;
        // this.changeDetectorRef.detectChanges();
    }

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        // effect(() => {
        //     console.count('reload number');
        //     console.log('pass value parent page asdfasdf');
        // })
        // this.data += 1;
        // setInterval(() => {
        //     this.data += 1;
        //     this.ref.markForCheck();
        // }, 1000);

    }

}