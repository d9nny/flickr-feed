import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { PostViewComponent } from './post-view.component';

import { FlickrService } from '../shared/services/flickr/flickr.service';
import { MockFlickrService } from '../shared/services/flickr/flickr.mock';

describe('PostViewComponent', () => {
    let component: PostViewComponent,
        fixture: ComponentFixture<PostViewComponent>,
        flickrService,
        spy;

    const id = '25390734567';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            declarations: [
                PostViewComponent
            ],
            providers: [
                { provide: FlickrService, useClass: MockFlickrService },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: { paramMap: {
                            get: () => {
                                return id;
                            }
                        } }
                    }
                }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostViewComponent);
        component = fixture.debugElement.componentInstance;
        flickrService = fixture.debugElement.injector.get(FlickrService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get the post', () => {
        spy = spyOn(flickrService, 'getPost');
        // expect(flickrService.getPost).toHaveBeenCalledWith(id);
        expect(component.post).toBeDefined();
    });
});
