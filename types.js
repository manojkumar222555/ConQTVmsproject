export class TypesPage {
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
    Types: "div[class='contract-dropdown'] div:nth-child(7) span:nth-child(1)",
    CreatenewTypesbtn: ".d-flex.align-items-center.create-btn",
    Createbtn: "button[type='submit']",
    TitleofType: "input[placeholder='Type here...']",
    Description: "textarea[placeholder='Enter a description']",
    Relatedto: "select[name='moduleType']",
    Searchfilter: "input[placeholder='Search']",
    Showentries: ".new-type-table-show-filter",
    Deleteiconbtn: "div[id='row-0'] button:nth-child(1) svg",
    confirmdeletebtn: ".d-btn.inner-reject-btn",
    Editiconbtn: "div[id='row-0'] button:nth-child(2) svg",
    Cancelbtn: "button[class='pop-up-btn cancel']",
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

  clickonTypes() {
    cy.get(this.weblocators.Types).click();
  }

  clickonCreatenewTypesbtn() {
    cy.get(this.weblocators.CreatenewTypesbtn).click();
  }

  TitleofType(TitleofType) {
    cy.get(this.weblocators.TitleofType).type(TitleofType);
  }

  Relatedto(Relatedto) {
    cy.get(this.weblocators.Relatedto).select(Relatedto);
  }

  DescriptionofTypes(DescriptionofTypes) {
    cy.get(this.weblocators.Description).type(DescriptionofTypes);
  }

  Createbtn() {
    cy.get(this.weblocators.Createbtn).click();
  }

  Searchfilter(Searchfilter) {
    cy.get(this.weblocators.Searchfilter).type(Searchfilter);
  }

  Showentries(Showentries) {
    cy.get(this.weblocators.Showentries).select(Showentries);
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

    let totalPages2 = 7;
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

    let totalPages3 = 7;
    for (let p = 3; p <= totalPages3; p++) {
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

    let totalPages4 = 7;
    for (let p = 3; p <= totalPages4; p++) {
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

    let totalPages5 = 3;
    for (let p = 3; p <= totalPages5; p++) {
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
    cy.get(this.weblocators.confirmdeletebtn).click();
  }

  Editiconbtn() {
    cy.get(this.weblocators.Editiconbtn).click();
  }

  Cancelbtn() {
    cy.get(this.weblocators.Cancelbtn).click();
  }
}
