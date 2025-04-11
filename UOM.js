export class UOMPage {
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
    UOM: "div[class='contract-dropdown'] div:nth-child(4) span:nth-child(1)",
    CreatenewUombtn: ".d-flex.align-items-center.create-btn",
    PopupCreatebtn: "button[type='submit']",
    Type_search: ".custom-select-field-prefix__input-container.css-19bb58m",
    Type: ".css-8mmkcg",
    TitleofUOM: "input[placeholder='Type here...']",
    Description: "textarea[placeholder='Enter a description']",
    PopCancelbtn: "button[class='pop-up-btn cancel']",
    Createbtn: "button[type='submit']",
    Searchfilter: "input[placeholder='Search by UOM, description or type']",
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

  clickonUOM() {
    cy.get(this.weblocators.UOM).click();
  }

  clickonCreatenewUombtn() {
    cy.get(this.weblocators.CreatenewUombtn).click();
  }

  clickonPopupCreatebtn() {
    cy.get(this.weblocators.PopupCreatebtn).click();
  }

  Type_search(Type) {
    cy.get(this.weblocators.Type_search).type(`${Type}{enter}`);
  }

  Type() {
    cy.get(this.weblocators.Type).click();
  }

  TitleofUOM(TitleofUOM) {
    cy.get(this.weblocators.TitleofUOM).type(TitleofUOM);
  }

  DescriptionofUOM(DescriptionofUOM) {
    cy.get(this.weblocators.Description).type(DescriptionofUOM);
  }

  PopCancelbtn() {
    cy.get(this.weblocators.PopCancelbtn).click();
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

    let totalPages3 = 5;
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

    // let totalPages4 = 5;
    // for (let p = 5; p >= totalPages4; p--) {
    //   if (totalPages < 5) {
    //     cy.log("Active page is>>>" + p);
    //     cy.get(".new-pagination-container>p:nth-child(" + p + ")").click();
    //     cy.wait(1000);

    //     cy.get("div[class='sc-fLseNd goIziV rdt_TableBody']>div").each(
    //       ($row, index, $rows) => {
    //         cy.wrap($row).within(() => {
    //           cy.get("div").each(($col, index, $cols) => {
    //             cy.log($col.text());
    //           });
    //         });
    //       }
    //     );
    //   }
    // }

    cy.reload();
  }
}
