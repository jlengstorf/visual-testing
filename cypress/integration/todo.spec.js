///<reference types="cypress" />
require('dotenv').config();

describe('filtering todo items', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'TodoMVC',
      testName: 'Angie is helping us write our first JavaScript test!',
      browser: [
        { width: 800, height: 600, name: 'firefox' },
        { width: 1024, height: 768, name: 'chrome' },
        {
          deviceName: 'iPhone X',
          screenOrientation: 'portait'
        }
      ]
    });
  });

  it('adds a todo item', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh/');
    cy.get('.new-todo')
      .type('sry Angie{enter}')
      .type('waddup chat?{enter}');

    // these are assertions — code-based
    // cy.get('.todo-list li:nth-child(1)').should('have.text', 'waddup chat?');
    // cy.get('.todo-list li').should('have.length', 2);

    // this is the new hotness
    cy.eyesCheckWindow();
  });

  afterEach(() => {
    cy.eyesClose();
  });
});
