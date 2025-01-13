describe("RPS Test", () => {
  it("allows the user to select rock and display choice", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("#rock").click();
    cy.get('[data-cy="userOption"]').should("have.text", "Your Option: Rock");
    cy.get('[data-cy="computerOption"]').should("exist");
    cy.get('[data-cy="result"]').should("exist");
  });

  it("allows the user to select scissors and display choice", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("#scissors").click();
    cy.get('[data-cy="userOption"]').should(
      "have.text",
      "Your Option: Scissors"
    );
    cy.get('[data-cy="computerOption"]').should("exist");
    cy.get('[data-cy="result"]').should("exist");
  });

  it("allows the user to select paper and display choice", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("#paper").click();
    cy.get('[data-cy="userOption"]').should("have.text", "Your Option: Paper");
    cy.get('[data-cy="computerOption"]').should("exist");
    cy.get('[data-cy="result"]').should("exist");
  });

  it("correcty displays results", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get("#scissors").click();

    cy.get('[data-cy="computerOption"]').then(($result) => {
      if ($result.text().includes("Computer Option: Scissors")) {
        cy.get('[data-cy="result"]').should("contain", "It's a tie!");
      } else if ($result.text().includes("Computer Option: Paper")) {
        cy.get('[data-cy="result"]').should("contain", "You win!");
      } else {
        cy.get('[data-cy="result"]').should("contain", "You lose!");
      }
    });
  });
});
