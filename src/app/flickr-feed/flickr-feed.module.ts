import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FlickrService } from './shared/services/flickr/flickr.service';

import { PublicFeedViewComponent } from './public-feed/public-feed-view/public-feed-view.component';
import { PublicFeedItemComponent } from './public-feed/public-feed-item/public-feed-item.component';
import { PostViewComponent } from './post-view/post-view.component';
import { SearchBoxComponent } from './shared/components/search-box/search-box.component';

import { TagSearchPipe } from './shared/pipes/tag-search/tag-search.pipe';

const routes: Routes = [
    {
        path: '',
        component: PublicFeedViewComponent,
        resolve: {
            posts: FlickrService
        }
    },
    {
        path: 'posts/:id',
        component: PostViewComponent,
        resolve: {
            posts: FlickrService
        }
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        FlickrService
    ],
    declarations: [
        PublicFeedViewComponent,
        PublicFeedItemComponent,
        PostViewComponent,
        SearchBoxComponent,
        TagSearchPipe,
        PostViewComponent
    ]
})
export class FlickrFeedModule { }
