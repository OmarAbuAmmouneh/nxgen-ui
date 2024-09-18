describe("Applications Page", () => {
    beforeEach(() => {
      cy.signIn();
  
      cy.visit("http://localhost:3000/applications");
    });
    it("should call a certain GET API", () => {
      const validCredentials = {
        baseUrl: "http://localhost:4000",
      };
  
      // Intercept the GET API call
      // cy.intercept("GET", `${validCredentials.baseUrl}/jobs?*`).as("getJobs");
  
      cy.intercept("GET", `${validCredentials.baseUrl}/applications?*`, (req) => {
        delete req.headers["if-none-match"];
      }).as("getApplications");
  
      cy.wait("@getApplications").then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
        expect(interception.response.body).to.be.an('array');
      });
    });
  });
  