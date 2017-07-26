import { SeedPage } from './app.po';

describe('seed App', () => {
  let page: SeedPage;

  beforeEach(() => {
    page = new SeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
