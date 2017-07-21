import { RedditPage } from './app.po';

describe('reddit App', () => {
  let page: RedditPage;

  beforeEach(() => {
    page = new RedditPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
