export class JobRequestPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    JobManagement:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > svg:nth-child(2)",
    JobRequest:
      "div[class='contract-dropdown'] div:nth-child(1) span:nth-child(1)",
    NewData:
      "div[id='row-0'] div[id='cell-2-undefined'] div[data-tag='allowRowEvents']",
    Qty: "input[placeholder='0.00'][name='packSizeQuantity']",
    UOM: ".css-uji2k5-control",
    Newtab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='0']",
    Quotedtab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='3']",
    Awardedtab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='4']",
    Closedtab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='2']",
    Alltab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='all']",
    Searchfilter: "input[placeholder='Search is valid for PR No. & Title']",
    Showentries: ".new-type-table-show-filter",
  };

  openurl() {
    cy.visit("https://vendor-test.conqt.com/");
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

  clickonJobManagement() {
    cy.get(this.weblocators.JobManagement).click();
  }

  JobRequest() {
    cy.get(this.weblocators.JobRequest).click();
  }

  NewData() {
    cy.get(this.weblocators.NewData).click();
  }

  Qty(packSizeQuantity) {
    cy.get(this.weblocators.Qty).type(packSizeQuantity);
  }

  UOM() {
    cy.get(this.weblocators.UOM).click();
  }

  Newtab() {
    cy.get(this.weblocators.Newtab).click();
  }

  Quotedtab() {
    cy.get(this.weblocators.Quotedtab).click();
  }

  Awardedtab() {
    cy.get(this.weblocators.Awardedtab).click();
  }

  Closedtab() {
    cy.get(this.weblocators.Closedtab).click();
  }

  Alltab() {
    cy.get(this.weblocators.Alltab).click();
  }

  Searchfilter(Searchfilter) {
    cy.get(this.weblocators.Searchfilter).type(Searchfilter);
  }

  Showentries(Showentries) {
    cy.get(this.weblocators.Showentries).select(Showentries);
  }

  TableData() {
    let totalPages1 = 7;
    for (let p = 2; p <= totalPages1; p++) {
      if (totalPages1 > 2) {
        cy.log("Active page is>>>" + p);
        cy.get(".new-pagination-container>p:nth-child(" + p + ")").click();
        cy.wait(1000);

        cy.get("div[class='sc-hIPBNq eXWrwD rdt_TableBody']>div").each(
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
