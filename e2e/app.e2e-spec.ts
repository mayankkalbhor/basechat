import { BasechatPage } from './app.po';

describe('basechat App', () => {
  let page: BasechatPage;

  beforeEach(() => {
    page = new BasechatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
