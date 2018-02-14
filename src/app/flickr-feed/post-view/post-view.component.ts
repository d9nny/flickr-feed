import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlickrService } from '../shared/services/flickr/flickr.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.less']
})
export class PostViewComponent implements OnInit {

    public post: any;

    constructor(private route: ActivatedRoute,
                private flickrService: FlickrService) { }

    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.post = this.flickrService.getPost(id);
    }

}
