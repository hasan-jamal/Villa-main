import { VilaOnlineTemplatePage } from './app.po';

describe('VilaOnline App', function() {
  let page: VilaOnlineTemplatePage;

  beforeEach(() => {
    page = new VilaOnlineTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
