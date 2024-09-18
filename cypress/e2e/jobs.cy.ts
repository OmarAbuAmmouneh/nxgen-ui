describe("Jobs Page", () => {
    beforeEach(() => {
      cy.signIn();
      cy.visit("http://localhost:3000/jobs");
    });
  
    it("should call a certain GET API", () => {
      // Define the mock response data
      const mockResponse = [
        { id: 1, title: "Job 1" },
        { id: 2, title: "Job 2" },
      ];
  
      // Mock the API call
      cy.intercept("GET", "http://localhost:4000/jobs", (req) => {
        console.log("Intercepted request:", req);
        req.reply({
          statusCode: 200,
          body: mockResponse,
        });
      }).as("getJobs");
  
      // Perform the action or trigger the request
      cy.wait("@getJobs").then((interception: any) => {
        console.log("Intercepted response:", interception);
  
        expect(interception.response.statusCode).to.equal(200);
        const responseBody = interception.response.body;
        
        // Assert that the response body is an array
        expect(responseBody).to.be.an("array");
        expect(responseBody).to.have.length(2);
  
        // Check that the number of rows in the data grid matches the length of the array
        cy.get(".MuiDataGrid-row").should("have.length", responseBody.length);
      });
    });
  });
  