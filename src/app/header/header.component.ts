import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    @Output() pageChanged = new EventEmitter<string>();

    constructor () { }

    ngOnInit() {
        
    }

    onPageChange(page: string) {
        this.pageChanged.emit(page);
    }
    
}