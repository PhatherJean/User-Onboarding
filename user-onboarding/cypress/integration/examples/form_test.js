describe("New User", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const inputName = () => cy.get('input[name="name"]');
  const inputEmail = () => cy.get('input[name="email"]');
  const inputPassword = () => cy.get('input[name="password"]');
  const expert = () => cy.get('input[value="expert"]');
  const intermediated = () => cy.get('input[value="intermediated"]');
  const entry = () => cy.get('input[value="entry"]');
  const submit = () => cy.get(".subBtn");

  it("check functionality", () => {
    expect(1 + 1).to.equal(2);
  });

  it("Can accept text into fields", () => {
    inputName()
      .should("have.value", "")
      .type("PapaZoe")
      .should("have.value", "PapaZoe")
      .clear()
      .should("have.value", "");
    inputPassword().should("have.value", "").type("p@D1237hajhfjakf").clear();
    inputEmail()
      .should("have.value", "")
      .type("patrickjean91@yamama.com")
      .should("have.value", "patrickjean91@yamama.com")
      .clear()
      .should("have.value", "");
  });

  it("Able to select expertise level", () => {
    expert().click();
    intermediated().click();
    entry().click();
  });

  it("Select a role", () => {
    cy.get(".jobs").select("enforcer").should("have.value", "enforcer");
    cy.get(".jobs").select("leader").should("have.value", "leader");
    cy.get(".jobs").select("civilian").should("have.value", "civilian");
  });

  it("the term of service checks and unchecks", () => {
    cy.get("[type='checkbox']").check();
    cy.get('[type="checkbox"]').uncheck();
  });

  it("Able to submit ", () => {
    inputName()
      .should("have.value", "")
      .type("PapaZoe")
      .should("have.value", "PapaZoe");
    submit().should("be.disabled");
    inputEmail()
      .should("have.value", "")
      .type("yabbadabbadoo@scooby.com")
      .should("have.value", "yabbadabbadoo@scooby.com");
    submit().should("be.disabled");
    inputPassword()
      .should("have.value", "")
      .type("aBc123!$money")
      .should("not.have.value", "");
    submit().should("be.disabled");
    expert().click();
    submit().should("be.disabled");
    intermediated().click();
    submit().should("be.disabled");
    entry().click();
    submit().should("be.disabled");
    cy.get(".jobs").select("enforcer").should("have.value", "enforcer");
    submit().should("be.disabled");
    cy.get(".jobs").select("leader").should("have.value", "leader");
    submit().should("be.disabled");
    cy.get(".jobs").select("civilian").should("have.value", "civilian");
    submit().should("be.disabled");
    cy.get("[type='checkbox']").check();
    submit().should("not.be.disabled");
    cy.get('[type="checkbox"]').uncheck();
    submit().should("be.disabled");
    cy.get("[type='checkbox']").check();
    submit().should("not.be.disabled").click();
  });
});
