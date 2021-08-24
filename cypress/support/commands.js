// remove white space

function removeWhiteSpace(text) {
    return text.trim();
}

Cypress.Commands.add('removeWhiteSpaces', (selector) => {
      cy.get(selector)
        .invoke('text') // get text
        .then(removeWhiteSpace)
    });


// convert string to float

function removeString(value) {
    let a = value.replace((/[a-zA-Z$ ]/g), "").trim();
    a = a.replace(",", ".")

    return parseFloat(a).toFixed(2)
}


Cypress.Commands.add('removeString', (selector) => {
    cy.get(selector)
      .invoke('text') // get text
      .then(removeString)
  });

  Cypress.Commands.add('removeStringXpath', (selector) => {
    cy.xpath(selector)
      .invoke('text') // get text
      .then(removeString)
  });