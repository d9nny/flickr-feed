import { TestBed, inject, fakeAsync, async, getTestBed, tick } from '@angular/core/testing';
import { HttpModule, Http, ConnectionBackend, XHRBackend, RequestOptions,
         Response, BaseRequestOptions, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FlickrService } from './flickr.service';

import { Post } from '../../interfaces/post';

describe('FlickrService', () => {
    let injector: TestBed,
        service: FlickrService,
        mockBackend,
        lastConnection;

    const id = '40217347142',
          posts: Post[] = [
            {
                title: 'Recent Uploads tagged potato',
                link: 'https://www.flickr.com/photos/162774889@N03/40217347142/',
                id: '40217347142',
                media: { m: 'https://farm5.staticflickr.com/4650/25390734567_68ab26f81c_m.jpg' },
                published: new Date('2018-02-14T12:08:36Z'),
                author: `nobody@flickr.com ("Sarah Hill")`,
                authorName: 'Sarah Hill',
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

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                RouterModule,
                RouterTestingModule
            ],
            providers: [
                FlickrService,
                Http,
                { provide: ConnectionBackend, useClass: MockBackend},
                { provide: RequestOptions, useClass: BaseRequestOptions},
            ]
        });
    });

    beforeEach(() => {
        injector = getTestBed();
        service = injector.get(FlickrService);
        mockBackend = injector.get(ConnectionBackend) as MockBackend;
        mockBackend.connections.subscribe((connection: any) => lastConnection = connection);
    });


    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('function: resolve', () => {
        it('should return an Observable<any>', fakeAsync(() => {
            let result: any;

            service.resolve().subscribe(res => {
                result = res;
            });

            lastConnection.mockRespond(new Response(new ResponseOptions({
                body: posts,
            })));

            tick();
            expect(result).toEqual(posts);
        }));
    });

    describe('function: getPost', () => {
        it('should find a post with a given id', () => {
            service.response = posts;
            const post = service.getPost(id);
            expect(post).toEqual(posts[0]);
        });
    });

    describe('function: getAuthorName', () => {
        it('should get the authors name', () => {
            const authorName = service.getAuthorName(posts[0].author);
            expect(authorName).toEqual(posts[0].authorName);
        });
    });

    describe('function: getId', () => {
        it('should get the post id fom the link', () => {
            const postId = service.getId(posts[0].link);
            expect(postId).toEqual(posts[0].id);
        });
    });
});
