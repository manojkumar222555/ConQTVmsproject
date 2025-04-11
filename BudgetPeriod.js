export class BudgetPeriodPage {
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
    BudgetPeriod:
      "div[class='contract-dropdown'] div:nth-child(8) span:nth-child(1)",
    CreatenewBudPeriodbtn: ".d-flex.align-items-center.create-btn",
    Createbtn: "button[type='submit']",
    Type: "select[name='typeId']",
    TitleofBudPeriod: "input[placeholder='Type here...']",
    Description: "textarea[placeholder='Enter a description']",
    Cancelbtn: "button[class='pop-up-btn cancel']",
    Searchfilter: "input[placeholder='Search']",
    Showentries: ".new-type-table-show-filter",
    Editiconbtn: "div[id='row-154'] button:nth-child(2) svg",
    Deleteiconbtn: "div[id='row-154'] button:nth-child(1) svg",
    ConfirmCancelbtn: ".d-btn.inner-cancel-btn",
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

  clickonAdministrator() {
    cy.get(this.weblocators.Administrator).click();
  }

  clickonSystem() {
    cy.get(this.weblocators.System).click();
  }

  clickonBudgetPeriod() {
    cy.get(this.weblocators.BudgetPeriod).click();
  }

  clickonCreatenewBudPeriodbtn() {
    cy.get(this.weblocators.CreatenewBudPeriodbtn).click();
  }

  Type(Type) {
    cy.get(this.weblocators.Type).select(Type);
  }

  TitleofBudPeriod(TitleofBudgetPeriod) {
    cy.get(this.weblocators.TitleofBudPeriod).type(TitleofBudgetPeriod);
  }

  Description(Description) {
    cy.get(this.weblocators.Description).type(Description);
  }

  Createbtn() {
    cy.get(this.weblocators.Createbtn).click();
  }

  Cancelbtn() {
    cy.get(this.weblocators.Cancelbtn).click();
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

    let totalPages2 = 6;
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

  ConfirmCancelbtn() {
    cy.get(this.weblocators.ConfirmCancelbtn).click();
  }

  Confirmdeletebtn() {
    cy.get(this.weblocators.ConfirmDeletebtn).click();
  }

  Editiconbtn() {
    cy.get(this.weblocators.Editiconbtn).click();
  }
}
