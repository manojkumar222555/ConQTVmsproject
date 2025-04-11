export class PRPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    JobManagement:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > svg:nth-child(2)",
    PR: "div[class='d-flex align-items-center justify-content-start link-side '] span[class='p-label']",
    CreatenewPRbtn: ".d-flex.align-items-center.create-new-pr-btn",
    Createbtn: "button[type='submit']",
    project: ".custom-select-field-prefix__input-container.css-19bb58m",
    COA: "select[name='coa']",
    BudgetPeriod: "select[name='bperiod']",
    BudgetLine: "select[name='bline']",
    BillingAddress: "select[name='billingId']",
    DeliveryAddress: "select[name='deliveryId']",
    Item: "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(5) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)",
    Description: "textarea[placeholder='Enter Here']",
    Quantity: "input[value='1']",
    LeadTime: "input[placeholder='Enter In Digits']",
    NeedBy: "input[placeholder='Select Delivery Date']",
    Supplier: "tbody tr td:nth-child(11)",
    Select_Supplier: "input[name='Satyam Company']",
    Select_Supplierbtn: "button[class='supplier-pop-up-select-btn']",
    ShippingMethod:
      "div[class='react-select__value-container css-hlgwow'] div[class='react-select__input-container css-19bb58m']",
    AddMorebtn: "button[class='btn btn-primary']",
    Checkboxbtn:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(5) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(1) > input:nth-child(1)",
    Delete_selected: "button[type='button'] h6",
    TCcheckbox:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)",
    Shipping: ".form-select",
    Newtab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='0']",
    Quotedtab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='3']",
    Awardedtab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='4']",
    Alltab: ".new-pr-table-tab-label-active.nav-link.active",
    Searchfilter: "input[placeholder='Search is valid for PR No. & Title']",
    Showentries: ".new-type-table-show-filter",
    TableData: "div[id='cell-1-2494'] div[class='table-div-tool-tip']",
    VendorInvited:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='Vendors Invited']",
    VendorInvitedSearchfilter: "input[placeholder='Search by Vendor name']",
    VendorInvitedShowentries: ".new-type-table-show-filter",
    VendorInvitedResendbtn: "div[id='row-1'] button[class='pr-Resend-btn btn']",
    VendorResponsetab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='Vendor Response']",
    VendorResponseSearchfilter: "input[placeholder='Search by Vendor name']",
    Export: ".line-level-export",
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

  clickonJobManagement() {
    cy.get(this.weblocators.JobManagement).click();
  }

  ClickonPR() {
    cy.get(this.weblocators.PR).click();
  }

  clickonCreatenewPRbtn() {
    cy.get(this.weblocators.CreatenewPRbtn).click();
  }

  project(project) {
    cy.get(this.weblocators.project).type(`${project}{enter}`);
  }

  COA(COA) {
    cy.get(this.weblocators.COA).select(COA);
  }

  BudgetPeriod(BudgetPeriod) {
    cy.get(this.weblocators.BudgetPeriod).select(BudgetPeriod);
  }

  BudgetLine(BudgetLine) {
    cy.get(this.weblocators.BudgetLine).select(BudgetLine);
  }

  BillingAddress(BillingAddress) {
    cy.get(this.weblocators.BillingAddress).select(BillingAddress);
  }

  DeliveryAddress(DeliveryAddress) {
    cy.get(this.weblocators.DeliveryAddress).select(DeliveryAddress);
  }

  Item(Item) {
    cy.get(this.weblocators.Item).type(`${Item}{enter}`);
  }

  Description(Description) {
    cy.get(this.weblocators.Description).type(Description);
  }

  Quantity(Quantity) {
    cy.get(this.weblocators.Quantity).clear().type(`${Quantity}{enter}`);
  }

  LeadTime(LeadTime) {
    cy.get(this.weblocators.LeadTime).type(LeadTime);
  }

  NeedBy(NeedBy) {
    cy.get(this.weblocators.NeedBy).type(NeedBy);
  }

  Supplier() {
    cy.get(this.weblocators.Supplier).click();
  }

  Select_Supplier() {
    cy.get(this.weblocators.Select_Supplier).check();
  }

  Select_Supplierbtn() {
    cy.get(this.weblocators.Select_Supplierbtn).click();
  }

  ShippingMethod(ShippingMethod) {
    cy.get(this.weblocators.ShippingMethod).type(`${ShippingMethod}{enter}`);
  }

  AddMorebtn() {
    cy.get(this.weblocators.AddMorebtn).click();
  }

  Checkboxbtn() {
    cy.get(this.weblocators.Checkboxbtn).click();
  }

  Delete_selected() {
    cy.get(this.weblocators.Delete_selected).click();
  }

  TCcheckbox() {
    cy.get(this.weblocators.TCcheckbox).check();
  }

  Shipping(Shipping) {
    cy.get(this.weblocators.Shipping).select(Shipping);
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

  Alltab() {
    cy.get(this.weblocators.Alltab).click();
  }

  Searchfilter(Searchfilter) {
    cy.get(this.weblocators.Searchfilter).type(Searchfilter);
  }

  // DueDate() {
  //   cy.get(this.weblocators.DueDate).then(($input) => {
  //     const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  //       window.HTMLInputElement.prototype,
  //       "value"
  //     ).set;
  //     nativeInputValueSetter.call($input[0], "2025-01-02");
  //     $input[0].dispatchEvent(new Event("input", { bubbles: true }));
  //   });
  // }

  Createbtn() {
    cy.get(this.weblocators.Createbtn).click({ force: true });
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
    for (let p = 2; p <= totalPages2; p++) {
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

    let totalPages3 = 7;
    for (let p = 2; p <= totalPages3; p++) {
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

    let totalPages4 = 7;
    for (let p = 2; p <= totalPages4; p++) {
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

    let totalPages5 = 7;
    for (let p = 2; p <= totalPages5; p++) {
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

  TableData() {
    cy.get(this.weblocators.TableData).click();
  }

  VendorInvited() {
    cy.get(this.weblocators.VendorInvited).click();
  }

  VendorInvitedSearchfilter(VendorInvitedSearchfilter) {
    cy.get(this.weblocators.VendorInvitedSearchfilter).type(
      VendorInvitedSearchfilter
    );
  }

  VendorInvitedShowentries(VendorInvitedShowentries) {
    cy.get(this.weblocators.VendorInvitedShowentries).select(
      VendorInvitedShowentries
    );
  }

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

  VendorInvitedResendbtn() {
    cy.get(this.weblocators.VendorInvitedResendbtn).click();
  }

  VendorResponsetab() {
    cy.get(this.weblocators.VendorResponsetab).click();
  }

  VendorResponseSearchfilter(VendorResponseSearchfilter) {
    cy.get(this.weblocators.VendorResponseSearchfilter).type(
      VendorResponseSearchfilter
    );
  }

  Export() {
    cy.get(this.weblocators.Export).click();
  }

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
