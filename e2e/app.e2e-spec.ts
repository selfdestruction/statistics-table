import { StatisticsTablePage } from './app.po';

describe('statistics-table App', function() {
  let page: StatisticsTablePage;

  beforeEach(() => {
    page = new StatisticsTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
