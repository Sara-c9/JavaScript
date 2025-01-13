describe("Calculator Test", () => {
  it("should display all values correctly when clicking a button", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get("#display").should("be.visible");

    cy.get("#0").contains("0").click();

    cy.get("#display").should("have.value", "0");

    cy.get("#clear").click();

    cy.get("#1").contains("1").click();

    cy.get("#display").should("have.value", "1");

    cy.get("#clear").click();

    cy.get("#2").contains("2").click();

    cy.get("#display").should("have.value", "2");

    cy.get("#clear").click();

    cy.get("#3").contains("3").click();

    cy.get("#display").should("have.value", "3");

    cy.get("#clear").click();

    cy.get("#4").contains("4").click();

    cy.get("#display").should("have.value", "4");

    cy.get("#clear").click();

    cy.get("#5").contains("5").click();

    cy.get("#display").should("have.value", "5");

    cy.get("#clear").click();

    cy.get("#6").contains("6").click();

    cy.get("#display").should("have.value", "6");

    cy.get("#clear").click();

    cy.get("#7").contains("7").click();

    cy.get("#display").should("have.value", "7");

    cy.get("#clear").click();

    cy.get("#8").contains("8").click();

    cy.get("#display").should("have.value", "8");

    cy.get("#clear").click();

    cy.get("#9").contains("9").click();

    cy.get("#display").should("have.value", "9");

    cy.get("#clear").click();

    cy.get("#plus").contains("+").click();

    cy.get("#display").should("have.value", "+");

    cy.get("#clear").click();

    cy.get("#minus").contains("-").click();

    cy.get("#display").should("have.value", "-");

    cy.get("#clear").click();

    cy.get("#divide").contains("/").click();

    cy.get("#display").should("have.value", "/");

    cy.get("#clear").click();

    cy.get("#multiply").contains("*").click();

    cy.get("#display").should("have.value", "*");
  });

  it("should correctly complete addition", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get("#5").click();
    cy.get("#plus").click();
    cy.get("#2").click();
    cy.get("#result").click();

    cy.get("#display").should("have.value", "7");
  });

  it("should correctly complete division", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get("#5").click();
    cy.get("#minus").click();
    cy.get("#2").click();
    cy.get("#result").click();

    cy.get("#display").should("have.value", "3");
  });

  it("should correctly complete multiplication", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get("#5").click();
    cy.get("#multiply").click();
    cy.get("#2").click();
    cy.get("#result").click();

    cy.get("#display").should("have.value", "10");
  });

  it("should correctly complete division", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get("#5").click();
    cy.get("#divide").click();
    cy.get("#2").click();
    cy.get("#result").click();

    cy.get("#display").should("have.value", "2.5");
  });

  it("should clear display when click on clear button", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get("#clear").should("exist").contains("C");

    cy.get("#clear").click();

    cy.get("#display").should("have.value", "");
  });
});
