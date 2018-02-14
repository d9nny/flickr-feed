import { TagSearchPipe } from './tag-search.pipe';

const posts = [
    { tags: 'potato cool big sunny' },
    { tags: 'one cool big sunny' }
];

describe('TagSearchPipe', () => {

    let pipe;

    beforeEach(() => {
        pipe = new TagSearchPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should filter out posts with no tags matching the search query', () => {
        const filtered = pipe.transform(posts, 'potato');
        expect(filtered).toEqual([posts[0]]);
        expect(filtered.length).toEqual(1);
    });

    it('should show all posts with a tags matching the search query', () => {
        const filtered = pipe.transform(posts, 'cool');
        expect(filtered).toEqual(posts);
        expect(filtered.length).toEqual(2);
    });
});
