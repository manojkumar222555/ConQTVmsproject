export class TypesPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    Administrator:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > svg:nth-child(2)",
    System:
      "div[class='contract-dropdown'] div[class='d-flex align-items-center justify-content-between'] svg",
    Types:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(4) > span:nth-child(1)",
    CreatenewTypesbtn: ".d-flex.align-items-center.create-btn",
    Createbtn: "button[type='submit']",
    TitleofType: "input[placeholder='Type here...']",
    DescriptionTypes: "textarea[placeholder='Enter a description']",
    Searchfilter: "input[placeholder='search by name,description']",
    Showentries: ".new-type-table-show-filter",
    Editiconbtn: "div[id='row-0'] button:nth-child(2) svg",
    PopupCancelbtn: "button[class='pop-up-btn cancel']",
    Deleteiconbtn: "div[id='row-1'] button:nth-child(1) svg",
    Popupdelete_cancelbtn: ".d-btn.inner-cancel-btn",
    PopupDeletebtn: ".d-btn.inner-reject-btn",
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

  clickonAdministrator() {
    cy.get(this.weblocators.Administrator).click();
  }

  System() {
    cy.get(this.weblocators.System).click();
  }

  Types() {
    cy.get(this.weblocators.Types).click();
  }

  CreatenewTypesbtn() {
    cy.get(this.weblocators.CreatenewTypesbtn).click();
  }

  Createbtn() {
    cy.get(this.weblocators.Createbtn).click();
  }

  TitleofType(TitleofType) {
    cy.get(this.weblocators.TitleofType).type(TitleofType);
  }

  DescriptionTypes(DescriptionTypes) {
    cy.get(this.weblocators.DescriptionTypes).type(DescriptionTypes);
  }

  // TermsandConditionTC(Text) {
  //   cy.get(this.weblocators.TermsConditionTC)
  //     .click()
  //     .find('[contenteditable="true"]')
  //     .clear({ force: true })
  //     .type(Text, { force: true });
  // }

  // Cancelbtn() {
  //   cy.get(this.weblocators.Cancelbtn).click();
  // }

  Searchfilter(Searchfilter) {
    cy.get(this.weblocators.Searchfilter).type(Searchfilter);
  }

  Showentries(Showentries) {
    cy.get(this.weblocators.Showentries).select(Showentries);
  }

  TableData() {
    let totalPages1 = 3;
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

  Editiconbtn() {
    cy.get(this.weblocators.Editiconbtn).click();
  }

  PopupCancelbtn() {
    cy.get(this.weblocators.PopupCancelbtn).click();
  }

  Deleteiconbtn() {
    cy.get(this.weblocators.Deleteiconbtn).click();
  }

  Popupdelete_cancelbtn() {
    cy.get(this.weblocators.Popupdelete_cancelbtn).click();
  }

  PopupDeletebtn() {
    cy.get(this.weblocators.PopupDeletebtn).click();
  }
}
