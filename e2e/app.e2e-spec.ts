import { Angular2CoursePage } from './app.po';

describe('angular2-course App', () => {
  let page: Angular2CoursePage;

  beforeEach(() => {
    page = new Angular2CoursePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
