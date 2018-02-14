import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PublicFeedItemComponent } from './public-feed-item.component';

describe('PublicFeedItemComponent', () => {
    let component: PublicFeedItemComponent,
        fixture: ComponentFixture<PublicFeedItemComponent>;

    const post = {
        title: 'French fries on a old wooden table',
        link: 'https://www.flickr.com/photos/162774889@N03/25390734567/',
        id: '25390734567',
        media: { m: 'https://farm5.staticflickr.com/4650/25390734567_68ab26f81c_m.jpg' },
        published: new Date('2018-02-14T12:08:40Z'),
        author: 'nobody@flickr.com ("Tom Smith")',
        authorName: 'Tom Smith',
        author_id: '162774889@N03',
        tags: 'american bar bbq beverage crunchy cuisine dinner fastfood food french frenchfries fry ketchup potato restaurant salt sauce snack spicy tasty yellow'
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule ],
            declarations: [ PublicFeedItemComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicFeedItemComponent);
        component = fixture.componentInstance;
        component.post = post;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});


