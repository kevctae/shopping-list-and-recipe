import { Component, OnInit, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit {
    @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
    @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
    @Output() shoppingListAdded = new EventEmitter<Ingredient>();

    constructor () { }

    ngOnInit() {
        
    }

    onAddShoppingList() {
        this.shoppingListAdded.emit(
            new Ingredient(
                this.nameInput.nativeElement.value, 
                this.amountInput.nativeElement.value
            )
        );
    }
}