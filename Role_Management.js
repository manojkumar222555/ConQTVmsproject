export class RoleManagementPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    Administrator:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8) > div:nth-child(2) > svg:nth-child(2)",
    UserAuthentication:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > span:nth-child(1)",
    AddRolebtn: ".justify-content-center.create-btn",
    RoleName: "input[placeholder='Enter role name']",
    Description: "textarea[placeholder='Write description for this role...']",
    Togglebtn:
      "div[class='role-module-container'] div:nth-child(1) div:nth-child(2) label:nth-child(1) span:nth-child(1) span:nth-child(1) input:nth-child(1)",
    Submitbtn: "button[type='submit']",
    Crossiconbtn: "svg[stroke='currentColor'][fill='none'][stroke-width='0']",
    Viewiconbtn:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > button:nth-child(1) > svg:nth-child(1) > g:nth-child(1) > path:nth-child(1)",
    Editiconbtn: "button[class='role-cancel-btn role-submit-btn']",
    Cancelbtn: "button[type='button']",
    Editbtn:
      "div:nth-child(5) div:nth-child(2) button:nth-child(2) img:nth-child(1)",
    Deleteiconbtn:
      "div:nth-child(5) div:nth-child(2) button:nth-child(2) img:nth-child(1)",
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

  ClickonUserAuthentication() {
    cy.get(this.weblocators.UserAuthentication).click();
  }

  ClickonAddRolebtn() {
    cy.get(this.weblocators.AddRolebtn).click();
  }

  RoleName(RoleName) {
    cy.get(this.weblocators.RoleName).type(RoleName);
  }

  Description(Description) {
    cy.get(this.weblocators.Description).type(Description);
  }

  Togglebtn() {
    cy.get(this.weblocators.Togglebtn).click();
  }

  Submitbtn() {
    cy.get(this.weblocators.Submitbtn).click({ force: true });
  }

  Crossiconbtn() {
    cy.get(this.weblocators.Crossiconbtn).click();
  }

  Viewiconbtn() {
    cy.get(this.weblocators.Viewiconbtn).click({ force: true });
  }

  Editiconbtn() {
    cy.get(this.weblocators.Editiconbtn).click({ force: true });
  }

  Cancelbtn() {
    cy.get(this.weblocators.Cancelbtn).click({ force: true });
  }

  Editbtn() {
    cy.get(this.weblocators.Editbtn).click({ force: true });
  }

  Deleteiconbtn() {
    cy.get(this.weblocators.Deleteiconbtn).click();
  }

  // Submitbtn() {
  //   cy.get(this.weblocators.Submitbtn).click();
  // }

  // Editbtn() {
  //   cy.get(this.weblocators.Editbtn).click();
  // }

  // PurchaseinfoSearchfilter(PurchaseinfoSearchfilter) {
  //   cy.get(this.weblocators.PurchaseinfoSearchfilter).type(
  //     PurchaseinfoSearchfilter
  //   );
  // }

  // PurinfoShowentries(PurinfoShowentries) {
  //   cy.get(this.weblocators.PurinfoShowentries).click(PurinfoShowentries);
  // }

  // Date1(Date1) {
  //   cy.get(this.weblocators.Date1).type(Date1);
  // }

  // Dateicon() {
  //   cy.get(this.weblocators.Dateicon).click();
  // }

  // Datebackarrow() {
  //   cy.get(this.weblocators.Datebackarrow).click();
  // }

  // March5() {
  //   cy.get(this.weblocators.March5).click();
  // }

  // Apr20() {
  //   cy.get(this.weblocators.Apr20).click();
  // }

  // OKbtn() {
  //   cy.get(this.weblocators.OKbtn).click();
  // }

  // Status() {
  //   cy.get(this.weblocators.Status).click();
  // }

  // Status1(Status1) {
  //   cy.get(this.weblocators.Status1).type(`${Status1}{enter}`);
  // }

  // Createdby() {
  //   cy.get(this.weblocators.Createdby).click();
  // }

  // Createdby1(Createdby1) {
  //   cy.get(this.weblocators.Createdby1).type(`${Createdby1}{enter}`);
  // }

  // Sortby() {
  //   cy.get(this.weblocators.Sortby).click();
  // }

  // SelectSortby(SelectSortby) {
  //   cy.get(this.weblocators.SelectSortby).type(`${SelectSortby}{enter}`);
  // }

  // Selectorder() {
  //   cy.get(this.weblocators.Selectorder).click();
  // }

  // Showentries(Showentries) {
  //   cy.get(this.weblocators.Showentries).select(Showentries);
  // }

  // // Date1() {
  // //   cy.get(this.weblocators.Date1).then(($input) => {
  // //     const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  // //       window.HTMLInputElement.prototype,
  // //       "value"
  // //     ).set;
  // //     nativeInputValueSetter.call($input[0], "2024-01-02 ~ 2025-02-20");
  // //     $input[0].dispatchEvent(new Event("input", { bubbles: true }));
  // //   });
  // // }

  // // Createbtn() {
  // //   cy.get(this.weblocators.Createbtn).click({ force: true });
  // // }

  // // Showentries(Showentries) {
  // //   cy.get(this.weblocators.Showentries).select(Showentries);
  // // }

  // TableData() {
  //   let totalPages = 4;
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

  //   cy.reload();
  // }

  // TableData1() {
  //   let totalPages = 7;
  //   for (let p = 2; p <= totalPages; p++) {
  //     if (totalPages > 2) {
  //       cy.log("Active page is>>>" + p);
  //       cy.get(".new-pagination-container>p:nth-child(" + p + ")").click();
  //       // cy.wait(1000);

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

  //   let totalPages1 = 7;
  //   for (let p = 2; p <= totalPages1; p++) {
  //     if (totalPages > 2) {
  //       cy.log("Active page is>>>" + p);
  //       cy.get(".new-pagination-container>p:nth-child(" + p + ")").click();
  //       // cy.wait(1000);

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

  //   // cy.reload();
  // }

  // Savebtn() {
  //   cy.get(this.weblocators.Savebtn).click();
  // }

  // PurinfoCheckbox() {
  //   cy.get(this.weblocators.PurinfoCheckbox).check();
  // }

  // SendRFQbtn() {
  //   cy.get(this.weblocators.SendRFQbtn).click();
  // }

  // Searchfilter(Searchfilter) {
  //   cy.get(this.weblocators.Searchfilter).type(Searchfilter);
  // }

  // Filterbtn() {
  //   cy.get(this.weblocators.Filterbtn).click();
  // }

  // Date() {
  //   cy.get(this.weblocators.Date).click();
  // }
}
