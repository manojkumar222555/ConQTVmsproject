export class CataloguePage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    Catalogue:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > svg:nth-child(2)",
    Product: "span[class='p-label']",
    Location:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)",
    Seller:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)",
    Category:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)",
    Rating: "#rating4",
    MinPrice: "input[placeholder='Min Price']",
    MaxPrice: "input[placeholder='Max Price']",
    Searchfilter: "input[placeholder='Search for product name, brand name']",
    Slidechange:
      "div[class='col-lg-12'] button:nth-child(1) div:nth-child(1) div:nth-child(1) svg",
    CreatePRbtn:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > button:nth-child(2)",
  };

  openurl() {
    cy.visit("https://test.conqt.com/");
  }

  enterusername(username) {
    cy.get(this.weblocators.Username).type(username);
  }

  enterpassword(password) {
    cy.get(this.weblocators.Password).type(password);
  }

  clickonSignin() {
    cy.get(this.weblocators.Signin).click();
  }

  clickonDashboard() {
    cy.get(this.weblocators.Dashboard).click();
  }

  clickonToastmsg() {
    cy.get(this.weblocators.toastmsg).click();
  }

  clickonCatalogue() {
    cy.get(this.weblocators.Catalogue).click();
  }

  ClickonProduct() {
    cy.get(this.weblocators.Product).click();
  }

  Location(Location) {
    cy.get(this.weblocators.Location).type(Location).click();
  }

  Seller(Seller) {
    cy.get(this.weblocators.Seller).type(Seller).click();
  }

  Category(Category) {
    cy.get(this.weblocators.Category).type(Category).click();
  }

  Rating() {
    cy.get(this.weblocators.Rating).check();
  }

  MinPrice(MinPrice) {
    cy.get(this.weblocators.MinPrice).type(MinPrice);
  }

  MaxPrice(MaxPrice) {
    cy.get(this.weblocators.MaxPrice).type(MaxPrice);
  }

  Searchfilter(Searchfilter) {
    cy.get(this.weblocators.Searchfilter).type(Searchfilter);
  }

  Slidechange() {
    cy.get(this.weblocators.Slidechange).click();
  }

  TableData() {
    let totalPages = 7;
    for (let p = 2; p <= totalPages; p++) {
      if (totalPages > 2) {
        cy.log("Active page is>>>" + p);
        cy.get(".new-pagination-container>p:nth-child(" + p + ")").click();
        cy.wait(1000);
      }
    }

    let totalPages2 = 4;
    for (let p = 2; p <= totalPages2; p++) {
      if (totalPages > 2) {
        cy.log("Active page is>>>" + p);
        cy.get(".new-pagination-container>p:nth-child(" + p + ")").click();
        cy.wait(1000);
      }
    }

    cy.reload();
  }

  CreatePRbtn() {
    cy.get(this.weblocators.CreatePRbtn).click();
  }
}
