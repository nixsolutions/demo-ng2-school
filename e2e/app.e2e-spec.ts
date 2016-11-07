import { DemoSchoolPage } from './app.po';

describe('demo-school App', function() {
  let page: DemoSchoolPage;

  beforeEach(() => {
    page = new DemoSchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
