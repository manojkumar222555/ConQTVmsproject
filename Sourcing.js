export class SourcingPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    Sourcing:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > svg:nth-child(2)",
    SourcingEvent: "span[class='p-label']",
    CreateEventbtn: ".d-flex.align-items-center.create-new-pr-btn",
    GenerateRFQbtn:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(3) > div:nth-child(1) > button:nth-child(2)",
    Project_RFQ: ".custom-select-field-prefix__input-container.css-19bb58m",
    GenerateRFQbtn1: "button[type='submit']",
    TermsandConditions:
      "div[class='ai-terms-checkboxs-div'] div:nth-child(1) input:nth-child(1)",
    TCShipping: ".form-select",
    Submitbtn: "button[type='submit']",
    Editbtn: "button[class='rfq-edit-btn d-flex align-items-center']",
    PurchaseinfoSearchfilter:
      "input[placeholder='Search by pr number or pr title']",
    PurinfoShowentries: ".new-type-table-show-filter",
    Savebtn: "button[type='submit']",
    PurinfoCheckbox: "input[name='select-row-2495']",
    SendRFQbtn: "button[type='submit']",
    Searchfilter: "input[placeholder='Search by rfq-title or rfq-number']",
    Filterbtn: ".type-table-filter-btn",
    Date: "div[class='new-filter-popup-dropdown'] div:nth-child(3) div:nth-child(1) svg",
    Date1: "input[id='rs-:rao:']",
    Dateicon: ".rs-input-group-addon",
    Datebackarrow:
      "div[data-testid='calendar-start'] button[aria-label='Previous month'] svg",
    March5:
      "div[title='05 Mar 2025'] div[class='rs-calendar-table-cell-content']",
    Apr20:
      "div[title='20 Apr 2025'] div[class='rs-calendar-table-cell-content']",
    OKbtn: ".rs-btn.rs-btn-primary.rs-btn-sm",
    Status:
      "div[class='new-filter-popup-dropdown'] div:nth-child(4) div:nth-child(1) svg",
    Status1: ".css-19bb58m",
    Createdby:
      "div[class='d-flex align-items-center justify-content-between my-2 '] div:nth-child(5) div:nth-child(1) svg",
    Createdby1: ".css-19bb58m",
    Sortby: ".sort-btn",
    SelectSortby: ".css-19bb58m",
    Selectorder:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > svg:nth-child(1)",
    Showentries: ".new-type-table-show-filter",
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

  clickonSourcing() {
    cy.get(this.weblocators.Sourcing).click();
  }

  ClickonSourcingevent() {
    cy.get(this.weblocators.SourcingEvent).click();
  }

  ClickonCreateEventbtn() {
    cy.get(this.weblocators.CreateEventbtn).click();
  }

  GenerateRFQbtn() {
    cy.get(this.weblocators.GenerateRFQbtn).click();
  }

  Project_RFQ(Project_RFQ) {
    cy.get(this.weblocators.Project_RFQ).type(`${Project_RFQ}{enter}`);
  }

  GenerateRFQbtn1() {
    cy.get(this.weblocators.GenerateRFQbtn1).click();
  }

  TermsandConditions() {
    cy.get(this.weblocators.TermsandConditions).check();
  }

  TCShipping(TCShipping) {
    cy.get(this.weblocators.TCShipping).type(`${TCShipping}{enter}`);
  }

  Submitbtn() {
    cy.get(this.weblocators.Submitbtn).click();
  }

  Editbtn() {
    cy.get(this.weblocators.Editbtn).click();
  }

  PurchaseinfoSearchfilter(PurchaseinfoSearchfilter) {
    cy.get(this.weblocators.PurchaseinfoSearchfilter).type(
      PurchaseinfoSearchfilter
    );
  }

  PurinfoShowentries(PurinfoShowentries) {
    cy.get(this.weblocators.PurinfoShowentries).click(PurinfoShowentries);
  }

  Date1(Date1) {
    cy.get(this.weblocators.Date1).type(Date1);
  }

  Dateicon() {
    cy.get(this.weblocators.Dateicon).click();
  }

  Datebackarrow() {
    cy.get(this.weblocators.Datebackarrow).click();
  }

  March5() {
    cy.get(this.weblocators.March5).click();
  }

  Apr20() {
    cy.get(this.weblocators.Apr20).click();
  }

  OKbtn() {
    cy.get(this.weblocators.OKbtn).click();
  }

  Status() {
    cy.get(this.weblocators.Status).click();
  }

  Status1(Status1) {
    cy.get(this.weblocators.Status1).type(`${Status1}{enter}`);
  }

  Createdby() {
    cy.get(this.weblocators.Createdby).click();
  }

  Createdby1(Createdby1) {
    cy.get(this.weblocators.Createdby1).type(`${Createdby1}{enter}`);
  }

  Sortby() {
    cy.get(this.weblocators.Sortby).click();
  }

  SelectSortby(SelectSortby) {
    cy.get(this.weblocators.SelectSortby).type(`${SelectSortby}{enter}`);
  }

  Selectorder() {
    cy.get(this.weblocators.Selectorder).click();
  }

  Showentries(Showentries) {
    cy.get(this.weblocators.Showentries).select(Showentries);
  }

  // Date1() {
  //   cy.get(this.weblocators.Date1).then(($input) => {
  //     const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  //       window.HTMLInputElement.prototype,
  //       "value"
  //     ).set;
  //     nativeInputValueSetter.call($input[0], "2024-01-02 ~ 2025-02-20");
  //     $input[0].dispatchEvent(new Event("input", { bubbles: true }));
  //   });
  // }

  // Createbtn() {
  //   cy.get(this.weblocators.Createbtn).click({ force: true });
  // }

  // Showentries(Showentries) {
  //   cy.get(this.weblocators.Showentries).select(Showentries);
  // }

  TableData() {
    let totalPages = 4;
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

    cy.reload();
  }

  TableData1() {
    let totalPages = 7;
    for (let p = 2; p <= totalPages; p++) {
      if (totalPages > 2) {
        cy.log("Active page is>>>" + p);
        cy.get(".new-pagination-container>p:nth-child(" + p + ")").click();
        // cy.wait(1000);

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

    let totalPages1 = 7;
    for (let p = 2; p <= totalPages1; p++) {
      if (totalPages > 2) {
        cy.log("Active page is>>>" + p);
        cy.get(".new-pagination-container>p:nth-child(" + p + ")").click();
        // cy.wait(1000);

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

    // cy.reload();
  }

  Savebtn() {
    cy.get(this.weblocators.Savebtn).click();
  }

  PurinfoCheckbox() {
    cy.get(this.weblocators.PurinfoCheckbox).check();
  }

  SendRFQbtn() {
    cy.get(this.weblocators.SendRFQbtn).click();
  }

  Searchfilter(Searchfilter) {
    cy.get(this.weblocators.Searchfilter).type(Searchfilter);
  }

  Filterbtn() {
    cy.get(this.weblocators.Filterbtn).click();
  }

  Date() {
    cy.get(this.weblocators.Date).click();
  }

  // VendorInvitedSearchfilter(VendorInvitedSearchfilter) {
  //   cy.get(this.weblocators.VendorInvitedSearchfilter).type(
  //     VendorInvitedSearchfilter
  //   );
  // }

  // VendorInvitedShowentries(VendorInvitedShowentries) {
  //   cy.get(this.weblocators.VendorInvitedShowentries).select(
  //     VendorInvitedShowentries
  //   );
  // }

  // VendorInvitedTableData() {
  //   let totalPages = 1;
  //   for (let p = 2; p <= totalPages; p++) {
  //     if (totalPages > 2) {
  //       cy.log("Active page is>>>" + p);
  //       cy.get(".new-pagination-container>p:nth-child(" + p + ")").click();
  //       cy.wait(1000);

  //       cy.get("div[class='sc-fLseNd goIziV rdt_TableBody']>div").each(
  //         ($row, index, $rows) => {
  //           cy.wrap($row).within(() => {
  //             cy.get("div").each(($col, index, $cols) => {
  //               cy.log($col.text());
  //             });
  //           });
  //         }
  //       );
  //     }
  //   }
  // }

  // VendorInvitedResendbtn() {
  //   cy.get(this.weblocators.VendorInvitedResendbtn).click();
  // }

  // VendorResponsetab() {
  //   cy.get(this.weblocators.VendorResponsetab).click();
  // }

  // VendorResponseSearchfilter(VendorResponseSearchfilter) {
  //   cy.get(this.weblocators.VendorResponseSearchfilter).type(
  //     VendorResponseSearchfilter
  //   );
  // }

  // Export() {
  //   cy.get(this.weblocators.Export).click();
  // }

  // DeleteSelected() {
  //   cy.get(this.weblocators.DeleteSelected).click();
  // }

  // Cancel_deletebtn() {
  //   cy.get(this.weblocators.Cancel_deletebtn).click();
  // }

  // Deleteiconbtn() {
  //   cy.get(this.weblocators.Deleteiconbtn).click();
  // }

  // Confirmdeletebtn() {
  //   cy.get(this.weblocators.ConfirmDeletebtn).click();
  // }

  // Editiconbtn() {
  //   cy.get(this.weblocators.Editiconbtn).click();
  // }

  // EditCancelbtn() {
  //   cy.get(this.weblocators.Cancelbtn).click();
  // }
}
