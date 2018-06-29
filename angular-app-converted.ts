import { Component } from '@angular/core';

@Component({
    selector: 'app-shopping-list',
    template:
    `<div  class="w3-card-2 w3-margin" style="max-width:400px;">
        <header class="w3-container w3-light-grey w3-padding-16">
            <h3>My Shopping List</h3>
        </header>
        <ul class="w3-ul">
            <li *ngFor="let x of products; index as $index" class="w3-padding-16">{{x}}<span (click)="removeItem($index)" style="cursor:pointer;" class="w3-right w3-margin-right">×</span></li>
        </ul>
        <div class="w3-container w3-light-grey w3-padding-16">
            <div class="w3-row w3-margin-top">
            <div class="w3-col s10">
                <input placeholder="Add shopping items here" [(ngModel)]="addMe" class="w3-input w3-border w3-padding">
            </div>
            <div class="w3-col s2">
                <button (click)="addItem()" class="w3-btn w3-padding w3-green">Add</button>
            </div>
            </div>
            <p class="w3-text-red">{{errortext}}</p>
        </div>
    </div>`

})

export class MyShoppingList {
    products = ["Milk", "Bread", "Cheese", "Avocado"];
    errortext;
    addMe;

    addItem() {
        this.errortext = "";
        if (!this.addMe) { return; }
        if (this.products.indexOf(this.addMe) == -1) {
            this.products.push(this.addMe);
        } else {
            this.errortext = "The item has already been added to the shopping list.";
        }
    };
    removeItem(x) {
        this.errortext = "";
        this.products.splice(x, 1);
    };
}