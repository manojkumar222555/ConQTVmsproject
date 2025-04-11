export class TCPage {
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
    TC: "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > div:nth-child(5) > span:nth-child(1)",
    CreatenewTCbtn: ".d-flex.align-items-center.create-btn",
    Type: "select[name='typeId']",
    TitleofTC: "input[placeholder='Type here...']",
    DescriptionTC: "textarea[placeholder='Enter a description']",
    TermsConditionTC:
      'div>[class="ck ck-reset ck-editor ck-rounded-corners"]>div>[contenteditable="true"]>p',
    Cancelbtn: "button[class='pop-up-btn cancel']",
    Searchfilter:
      "input[placeholder='Search using Code, Name, or Description']",
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

  clickonAdministrator() {
    cy.get(this.weblocators.Administrator).click();
  }

  clickonSystem() {
    cy.get(this.weblocators.System).click();
  }

  clickonTC() {
    cy.get(this.weblocators.TC).click();
  }

  CreatenewTCbtn() {
    cy.get(this.weblocators.CreatenewTCbtn).click();
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

  ShowEntries(Showentry) {
    cy.get(this.weblocators.Showentries).select(Showentry);
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

    let totalPages3 = 7;
    for (let p = 3; p <= totalPages3; p++) {
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

    let totalPages4 = 5;
    for (let p = 3; p <= totalPages4; p++) {
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
}
