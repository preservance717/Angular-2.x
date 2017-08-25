import { MusicPage } from './app.po';

describe('music App', () => {
  let page: MusicPage;

  beforeEach(() => {
    page = new MusicPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
