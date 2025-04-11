export class VendorEvaluationPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    VendorEvaluation:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > svg:nth-child(2)",
    Assignments: "span[class='p-label']",
    CreatenewAssignmentsbtn: ".d-flex.align-items-center.create-btn",
    Createbtn: "button[type='submit']",
    Assignment_Name: "input[placeholder='Type here...'][name='name']",
    PO: "input[placeholder='Type here...'][name='poNo']",
    Vendor: "select[name='vendorOrgId']",
    Priority: ".custom-selector-prefix__input-container.css-19bb58m",
    Status: "select[name='status']",
    DueDate: "input[name='dueDate']",
    Searchfilter:
      "input[placeholder='Search for assignment name or vendor name']",
    Showentries: ".new-type-table-show-filter",
    Checkbox: "input[name='select-row-127']",
    DeleteSelected: ".vendor-evaluation-ass-del-btn",
    Editiconbtn: "div[id='row-124'] button:nth-child(2) svg",
    Cancelbtn: "button[class='vendor-evalution-cancel']",
    Deleteiconbtn: "div[id='row-121'] button:nth-child(1) svg",
    Cancel_deletebtn: ".d-btn.inner-cancel-btn",
    ConfirmDeletebtn: ".d-btn.inner-reject-btn",
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

  clickonVendorEvaluation() {
    cy.get(this.weblocators.VendorEvaluation).click();
  }

  ClickonAssignments() {
    cy.get(this.weblocators.Assignments).click();
  }

  clickonCreatenewAssignmentsbtn() {
    cy.get(this.weblocators.CreatenewAssignmentsbtn).click();
  }

  Assignment_Name(AssignmentName) {
    cy.get(this.weblocators.Assignment_Name).type(AssignmentName);
  }

  PO(PO) {
    cy.get(this.weblocators.PO).type(PO);
  }

  Vendor(Vendor) {
    cy.get(this.weblocators.Vendor).select(Vendor);
  }

  Priority(Priority) {
    cy.get(this.weblocators.Priority).type(`${Priority}{enter}`);
  }

  Status(Status) {
    cy.get(this.weblocators.Status).select(Status);
  }

  DueDate() {
    cy.get(this.weblocators.DueDate).then(($input) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      ).set;
      nativeInputValueSetter.call($input[0], "2025-01-02");
      $input[0].dispatchEvent(new Event("input", { bubbles: true }));
    });
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

    let totalPages1 = 7;
    for (let p = 2; p <= totalPages1; p++) {
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

    let totalPages2 = 6;
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

    cy.reload();
  }

  Checkbox() {
    cy.get(this.weblocators.Checkbox).click();
  }

  DeleteSelected() {
    cy.get(this.weblocators.DeleteSelected).click();
  }

  Cancel_deletebtn() {
    cy.get(this.weblocators.Cancel_deletebtn).click();
  }

  Deleteiconbtn() {
    cy.get(this.weblocators.Deleteiconbtn).click();
  }

  Confirmdeletebtn() {
    cy.get(this.weblocators.ConfirmDeletebtn).click();
  }

  Editiconbtn() {
    cy.get(this.weblocators.Editiconbtn).click();
  }

  EditCancelbtn() {
    cy.get(this.weblocators.Cancelbtn).click();
  }
}
