describe('simple HTML visual diff testing', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'HTML Test',
      testName: 'Angie is helping us write our first HTML test!',
      browser: [
        { width: 800, height: 600, name: 'firefox' },
        { width: 1024, height: 768, name: 'chrome' },
        {
          deviceName: 'iPhone X',
          screenOrientation: 'landscape'
        }
      ]
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('checks the HTML', () => {
    cy.visit('/');

    cy.eyesCheckWindow();
  });
});
