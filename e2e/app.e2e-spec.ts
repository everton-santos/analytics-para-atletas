import { AnalyticsParaAtletasPage } from './app.po';

describe('analytics-para-atletas App', () => {
  let page: AnalyticsParaAtletasPage;

  beforeEach(() => {
    page = new AnalyticsParaAtletasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
