///<reference types="cypress" />
require('dotenv').config();

describe('filtering todo items', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'Bookstore',
      testName: 'Angie is helping us write our second JavaScript test!',
      browser: [
        { width: 800, height: 600, name: 'firefox' },
        { width: 1024, height: 768, name: 'chrome' },
        {
          deviceName: 'iPhone X',
          screenOrientation: 'portrait'
        }
      ]
    });
  });

  it('adds a todo item', () => {
    cy.visit('https://automationbookstore.dev/');
    cy.eyesCheckWindow();
  });

  afterEach(() => {
    cy.eyesClose();
  });
});
