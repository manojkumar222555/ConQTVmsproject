export class ShippingMethodPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    Administrator: ":nth-child(8) > .d-flex > .side-bar-contarct-option",
    System:
      "div[class='contract-dropdown'] div:nth-child(2) div:nth-child(1) span:nth-child(1)",
    ShippingMethod:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > div:nth-child(6) > span:nth-child(1)",
    CreatenewShippMethbtn: ".d-flex.align-items-center.create-btn",
    Type: ".custom-select-field-prefix__input-container.css-19bb58m",
    Title_ShippingMethod: "input[placeholder='Type here...']",
    Description: "textarea[placeholder='Enter a description']",
    Savebtn: "button[type='submit']",
    Searchfilter: "input[placeholder='Search']",
    Showentries: ".new-type-table-show-filter",
    Deleteiconbtn: "div[id='row-0'] button:nth-child(1) svg",
    Confirmdeletebtn: ".d-btn.inner-reject-btn",
    Editiconbtn: "div[id='row-0'] button:nth-child(2) svg",
    Edit_Type: ".custom-select-field-prefix__input-container.css-19bb58m",
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

  clickonAdministrator() {
    cy.get(this.weblocators.Administrator).click();
  }

  clickonSystem() {
    cy.get(this.weblocators.System).click();
  }

  clickonShippingMethod() {
    cy.get(this.weblocators.ShippingMethod).click();
  }

  CreatenewShippMethbtn() {
    cy.get(this.weblocators.CreatenewShippMethbtn).click();
  }

  Type(Type) {
    cy.get(this.weblocators.Type).type(`${Type}{enter}`);
  }

  TitleofTC(TitleofShippMethod) {
    cy.get(this.weblocators.Title_ShippingMethod).type(TitleofShippMethod);
  }

  DescriptionSM(Description_ShippMethod) {
    cy.get(this.weblocators.Description).type(Description_ShippMethod);
  }

  Savebtn() {
    cy.get(this.weblocators.Savebtn).click();
  }

  Searchfilter(Searchfilter) {
    cy.get(this.weblocators.Searchfilter).type(Searchfilter);
  }

  ShowEntries(Showentry) {
    cy.get(this.weblocators.Showentries).select(Showentry);
  }

  TableData() {
    let totalPages = 7;
    for (let p = 2; p <= totalPages; p++) {
      if (totalPages > 2) {
        cy.log("Active page is>>>" + p);
        cy.get(".new-pagination-container>p:nth-child(" + p + ")").click();
        cy.wait(1000);

        cy.get("div[class='sc-fLseNd goIziV rdt_TableBody']>div").each(
          ($row, index, $rows) => {
            cy.wrap($row).within(() => {
              cy.get("div").each(($col, index, $cols) => {
                cy.log($col.text());
              });
            });
          }
        );
      }
    }

    let totalPages2 = 4;
    for (let p = 3; p <= totalPages2; p++) {
      if (totalPages > 3) {
        cy.log("Active page is>>>" + p);
        cy.get(".new-pagination-container>p:nth-child(" + p + ")").click();
        cy.wait(1000);

        cy.get("div[class='sc-fLseNd goIziV rdt_TableBody']>div").each(
          ($row, index, $rows) => {
            cy.wrap($row).within(() => {
              cy.get("div").each(($col, index, $cols) => {
                cy.log($col.text());
              });
            });
          }
        );
      }
    }

    cy.reload();
  }

  Deleteiconbtn() {
    cy.get(this.weblocators.Deleteiconbtn).click();
  }

  Confirmdeleteiconbtn() {
    cy.get(this.weblocators.Confirmdeletebtn).click();
  }

  Editiconbtn() {
    cy.get(this.weblocators.Editiconbtn).click();
  }

  Edit_Type(Edittype) {
    cy.get(this.weblocators.Edit_Type).type(`${Edittype}{enter}`);
  }
}
