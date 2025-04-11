export class DashboardPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    Spendbypurgricon:
      "div[class='my-2 d-flex justify-content-between align-items-center'] span[class='rs-input-group-addon'] svg",
    March2025:
      "div[data-testid='calendar-start'] button[aria-label='Select month']",
    Oct2023:
      "div[aria-label='Oct 2023'] span[class='rs-calendar-month-dropdown-cell-content']",
    Oct20: "div[title='20 Oct 2023'] span[class='rs-calendar-table-cell-day']",

    Rmarch2025:
      "div[data-testid='calendar-end'] button[aria-label='Select month']",
    RCmarch2025:
      "div[aria-label='Mar 2025'] span[class='rs-calendar-month-dropdown-cell-content']",
    RCMarch25:
      "div[title='25 Mar 2025'] span[class='rs-calendar-table-cell-day']",
    OKbtn: ".rs-btn.rs-btn-primary.rs-btn-sm",
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

  Spendbypurgricon() {
    cy.get(this.weblocators.Spendbypurgricon).click();
  }

  March2025() {
    cy.get(this.weblocators.March2025).click();
  }

  Oct2023() {
    cy.get(this.weblocators.Oct2023).click({ force: true });
  }

  Oct20() {
    cy.get(this.weblocators.Oct20).click();
  }

  Rmarch2025() {
    cy.get(this.weblocators.Rmarch2025).click();
  }

  RCmarch2025() {
    cy.get(this.weblocators.RCmarch2025).click();
  }

  RCMarch25() {
    cy.get(this.weblocators.RCMarch25).click();
  }

  OKbtn() {
    cy.get(this.weblocators.OKbtn).click();
  }

  TableData() {
    let totalPages1 = 7;
    for (let p = 2; p <= totalPages1; p++) {
      if (totalPages1 > 2) {
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
    for (let p = 2; p <= totalPages2; p++) {
      if (totalPages2 > 2) {
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

    let totalPages3 = 2;
    for (let p = 2; p <= totalPages3; p++) {
      if (totalPages2 > 2) {
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
}
