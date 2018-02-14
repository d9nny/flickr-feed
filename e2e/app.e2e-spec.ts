import { FlickrFeedPage } from './app.po';

describe('flickr-feed App', () => {
  let page: FlickrFeedPage;

  beforeEach(() => {
    page = new FlickrFeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
