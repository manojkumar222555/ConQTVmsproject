export class MyQuotationPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    JobManagement:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > svg:nth-child(2)",
    MyQuotation:
      "div[class='contract-dropdown'] div:nth-child(2) span:nth-child(1)",
    InReviewtab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='0']",
    Awardedtab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='1']",

    Alltab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='all']",
    Searchfilter: "input[placeholder='Search Quotation No']",
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

  MyQuotation() {
    cy.get(this.weblocators.MyQuotation).click();
  }

  InReviewtab() {
    cy.get(this.weblocators.InReviewtab).click();
  }

  Awardedtab() {
    cy.get(this.weblocators.Awardedtab).click();
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
    let totalPages1 = 4;
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
