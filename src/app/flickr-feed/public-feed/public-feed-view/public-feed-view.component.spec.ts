import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, Data, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { FlickrService } from '../../shared/services/flickr/flickr.service';
import { MockFlickrService } from '../../shared/services/flickr/flickr.mock';

import { PublicFeedViewComponent } from './public-feed-view.component';
import { PublicFeedItemComponent } from '../public-feed-item/public-feed-item.component';
import { SearchBoxComponent } from '../../shared/components/search-box/search-box.component';
import { TagSearchPipe } from '../../shared/pipes/tag-search/tag-search.pipe';

describe('PublicFeedViewComponent', () => {
  let component: PublicFeedViewComponent,
        fixture: ComponentFixture<PublicFeedViewComponent>,
        flickrService;

    const id = '25390734567',
          query = 'burger',
          posts = [
            {
                title: 'Recent Uploads tagged potato',
                link: 'https://www.flickr.com/photos/162774889/40217347142',
                id: '40217347142',
                media: { m: 'https://farm5.staticflickr.com/4650/25390734567_68ab26f81c_m.jpg' },
                published: new Date('2018-02-14T12:08:36Z'),
                author: `nobody@flickr.com ("Sarah Hill")`,
                authorName:'Sarah Hill',
                author_id: '162774889@N03',
                tags: 'gold paprika aromatic chips cola cookingoil crisps crunchy deepfry delicoius food grease junkfood potato salt salted salty snack unhealthy'
            },
            {
                title: 'French fries on a old wooden table',
                link: 'https://www.flickr.com/photos/162774889@N03/25390734567/',
                id: '25390734567',
                media: { m: 'https://farm5.staticflickr.com/4650/25390734567_68ab26f81c_m.jpg' },
                published: new Date('2018-02-14T12:08:40Z'),
                author: 'nobody@flickr.com ("Tom Smith")',
                authorName: 'Tom Smith',
                author_id: '162774889@N03',
                tags: 'american bar bbq beverage crunchy cuisine dinner fastfood food french frenchfries fry ketchup potato restaurant salt sauce snack spicy tasty yellow'
            }
          ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                RouterModule
            ],
            declarations: [
                PublicFeedViewComponent,
                PublicFeedItemComponent,
                SearchBoxComponent,
                TagSearchPipe
            ],
            providers: [
                { provide: FlickrService, useClass: MockFlickrService },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        data: {
                            subscribe: (fn: (value: Data) => void) => fn({
                                posts: posts
                            })
                        },
                        queryParams: {
                            subscribe: (fn: (value: Data) => void) => fn({
                                tag: query
                            })
                        }
                    }
                }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicFeedViewComponent);
        component = fixture.debugElement.componentInstance;
        flickrService = fixture.debugElement.injector.get(FlickrService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get posts', async(() => {
        expect(component.posts.length).toBeGreaterThan(0);
    }));

    describe('function: setSearchQuery', () => {
        it('should set the search query', () => {
            component.setSearchQuery(query);
            expect(component.searchQuery).toBe(query);
        });
    });
});
