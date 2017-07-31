import { ExperiencePage } from './app.po';

describe('Angular_program_experience App', () => {
  let page: ExperiencePage;

  beforeEach(() => {
    page = new ExperiencePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
