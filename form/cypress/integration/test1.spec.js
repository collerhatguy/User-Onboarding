

describe("form test", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })
    it("inputs exist", () => {
        nameInput().should("exist");
        passwordInput().should("exist");
        emailInput().should("exist");
        termsInput().should("exist");
        submitInput().should("exist");
    })

    it("name check", () => {
        checkInput(nameInput());
    })

    it("password check", () => {
        checkInput(passwordInput());
    })

    it("email check", () => {
       checkInput(emailInput());
    })

    it("terms check", () => {
        termsInput()
            .check()
            .should("be.checked");
    })

    it("submit check", () => {
        checkInput(nameInput());
        checkInput(passwordInput());
        emailInput()
            .type("asjkdfkjf@kfjanwfkljwn.com");

        termsInput().check();

        submitInput()
            .should("not.be.disabled")
            .click()
            .should("be.disabled")
    })

})
const checkInput = input => {
    const value = "someStuff";
    input
        .should("have.value", "")
        .type(value)
        .should("have.value", value)
}

const nameInput = () => cy.get("[data-cy='name']");
const passwordInput = () => cy.get("[data-cy='password']");
const emailInput = () => cy.get("[data-cy='email']");
const termsInput = () => cy.get("[data-cy='terms']");
const submitInput = () => cy.get("[data-cy='submit']");
