import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';

@Component({
selector: 'app-search-box',
    template: `
        <input type="text"
               value="{{ query }}"
               class="form-control"
               placeholder="Search..." autofocus>
    `,
    styleUrls: ['./search-box.component.less']
})
export class SearchBoxComponent implements OnInit {

    private querySubject = new Subject<string>();

    @Input() query = '';

    @Output() searchQuery = new EventEmitter<any>();

    constructor(private el: ElementRef) {
        Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map((e: any) => e.target.value)
            .subscribe(query => {
                this.query = query;
                this.searchQuery.emit(this.query);
            });
    }

    ngOnInit() {
    }
}
