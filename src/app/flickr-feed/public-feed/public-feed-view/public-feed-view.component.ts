import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-public-feed-view',
    templateUrl: './public-feed-view.component.html',
    styleUrls: ['./public-feed-view.component.less']
})
export class PublicFeedViewComponent implements OnInit {

    public posts: any[];
    public searchQuery = '';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data
            .subscribe((data: { posts: any }) => {
                this.posts = data.posts;
            });

        this.route.queryParams
            .subscribe(params => this.searchQuery = params.tag);
    }

    setSearchQuery(query) {
        this.searchQuery = query;
    }

}
