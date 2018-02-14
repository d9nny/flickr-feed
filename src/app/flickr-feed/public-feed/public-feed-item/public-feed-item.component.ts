import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-public-feed-item',
    templateUrl: './public-feed-item.component.html',
    styleUrls: ['./public-feed-item.component.less']
})
export class PublicFeedItemComponent implements OnInit {

    @Input() post: any;

    constructor() { }

    ngOnInit() {
    }

}
