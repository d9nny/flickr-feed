import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Post } from '../../interfaces/post';

const posts: Post[] = [
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

export class MockFlickrService {
    resolve(): Observable<Post[]> {
        return Observable.of(posts);
    }

    getPost(id): Post {
        return posts.find(post => Number(post.id) === Number(id));
    }

    getAuthorName(author: string): string {
       return author.substring(2, author.length - 2);
    }

    getId(link: string): string {
        link = link.match(/\/(.*?)\//g)[0]
        link = link[link.length - 1];
        return link.substring(1, link.length - 1);
    }
};
