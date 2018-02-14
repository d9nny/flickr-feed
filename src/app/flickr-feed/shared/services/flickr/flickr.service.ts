import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Post } from '../../interfaces/post';

@Injectable()
export class FlickrService {

    public response: any;

    constructor(private http: Http,
                private router: Router) { }

    resolve(): Observable<Post[]> {
        if (this.response && this.response.length) {
            return Observable.of(this.response);
        } else {
            return this.http.get('/api/flickr')
                       .map(res => {
                           const response = res.json();
                           if (response.success) {
                               response.data.items.forEach(post => {
                                   post.authorName = this.getAuthorName(post.author);
                                   post.id = this.getId(post.link);
                               });
                               return this.response = response.data.items;
                           } else {
                               return response;
                           }
                       });
        }
    }

    getPost(id): Post {
        return this.response.find(post => Number(post.id) === Number(id));
    }

    getAuthorName(author: string): string {
       author = author.match(/\((.*?)\)/g)[0];
       return author.substring(2, author.length - 2);
    }

    getId(link: string): string {
        const matches = link.match(/\/(.*?)\//g),
              id = matches[matches.length - 1];
        return id.substring(1, id.length - 1);
    }
}
