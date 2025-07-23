describe("Homepage", () => {
  it("should display the Next.js logo and docs link", () => {
    cy.visit("/");
    cy.get('img[alt="Next.js logo"]').should("exist");
    cy.contains("Read our docs")
      .should("have.attr", "href")
      .and("include", "nextjs.org/docs");
  });
});
