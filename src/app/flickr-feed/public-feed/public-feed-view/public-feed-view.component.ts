import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-public-feed-view',
    templateUrl: './public-feed-view.component.html',
    styleUrls: ['./public-feed-view.component.less'],
    animations: [
        trigger('fadeIn', [
            state('hidden', style({
                opacity: 0,
                top: '200px'
            })),
            state('show' , style({
                opacity: 1,
                top: '0px'
            })),
            transition('hidden => show', animate('450ms linear', keyframes([
              style({ top: '200px', opacity: 0, offset: 0 }),
              style({ top: '0px', opacity: .6, offset: .75 }),
              style({ top: '0px', opacity: 1, offset: 1 })
            ]))),
        ])
    ]
})

export class PublicFeedViewComponent implements OnInit {

    public posts: any[];
    private postIndex = 0;
    public searchQuery = '';

    constructor(private route: ActivatedRoute) { }

    setSearchQuery(query) {
        this.searchQuery = query;
    }

    triggerFeedItemAnimationCallback(that) {
        setTimeout(() => {
            that.posts[that.postIndex].state = 'show';
            that.postIndex += 1;
            if (that.postIndex !== that.posts.length) {
                that.triggerFeedItemAnimationCallback(that);
            }
        }, 200);
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { posts: any }) => {
                this.posts = data.posts;
                this.triggerFeedItemAnimationCallback(this);
            });

        this.route.queryParams
            .subscribe(params => this.searchQuery = params.tag);

    }

}
