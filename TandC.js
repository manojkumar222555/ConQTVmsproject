export class TermsConditionPage {
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
    Termsandcondition:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > span:nth-child(1)",
    CreatenewTCbtn: ".d-flex.align-items-center.create-btn",
    Createbtn: "button[type='submit']",
    Type: "select[name='typeId']",
    TitleofTC: "input[placeholder='Type here...']",
    DescriptionTC: "textarea[placeholder='Enter a description']",
    TermsConditionTC:
      'div>[class="ck ck-reset ck-editor ck-rounded-corners"]>div>[contenteditable="true"]>p',
    Cancelbtn: "button[class='pop-up-btn cancel']",
    Searchfilter: "input[placeholder='search by name,description,type']",
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

  clickonAdministrator() {
    cy.get(this.weblocators.Administrator).click();
  }

  System() {
    cy.get(this.weblocators.System).click();
  }

  Termsandcondition() {
    cy.get(this.weblocators.Termsandcondition).click();
  }

  CreatenewTCbtn() {
    cy.get(this.weblocators.CreatenewTCbtn).click();
  }

  Createbtn() {
    cy.get(this.weblocators.Createbtn).click();
  }

  Type(Type) {
    cy.get(this.weblocators.Type).select(Type);
  }

  TitleofTC(TitleofTC) {
    cy.get(this.weblocators.TitleofTC).type(TitleofTC);
  }

  DescriptionTC(DescriptionTC) {
    cy.get(this.weblocators.DescriptionTC).type(DescriptionTC);
  }

  TermsandConditionTC(Text) {
    cy.get(this.weblocators.TermsConditionTC)
      .click()
      .find('[contenteditable="true"]')
      .clear({ force: true })
      .type(Text, { force: true });
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
    let totalPages1 = 1;
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

    // cy.reload();
  }
}
