import { InventoryPage } from './app.po';

describe('inventory App', () => {
  let page: InventoryPage;

  beforeEach(() => {
    page = new InventoryPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
