export class PurchasingGroupPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    PurchasingGroup:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7) > div:nth-child(2) > span:nth-child(1)",
    CreatenewPurchasingGroupbtn: ".d-flex.align-items-center.create-btn",
    Submitbtn: "button[type='submit']",
    EnterTitle: "input[name='prGroup']",
    Meaning: "input[placeholder='Enter Meaning']",
    Category: ".react-select__control.css-1gtlgr4-control",
    Continuebtn: ".purchase-success-continue-btn",
    Searchfilter: "input[placeholder='Search']",
    Showentries: ".new-type-table-show-filter",
    Releasebtn: "div[id='row-0'] button:nth-child(2) div:nth-child(1)",
    ReleaseCancelbtn: "img[alt='CancelBtn']",
    ConfirmReleasebtn: "img[alt='ReleaseBtn']",
    Editiconbtn: "div[id='row-1'] button:nth-child(3) img:nth-child(1)",
    EditCancelbtn: "button[type='button']",
    Deleteiconbtn: "div[id='row-2'] button:nth-child(1) img:nth-child(1)",
    Deleicon_Cancelbtn: "img[alt='cancelRedBtn']",
    Confirmdeletebtn: "img[alt='deleteRedBtn']",
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

  clickonPurchasingGroup() {
    cy.get(this.weblocators.PurchasingGroup).click();
  }

  CreatenewPurchasingGroupbtn() {
    cy.get(this.weblocators.CreatenewPurchasingGroupbtn).click();
  }

  clickonSubmitbtn() {
    cy.get(this.weblocators.Submitbtn).click();
  }

  EnterTitle(EnterTitle) {
    cy.get(this.weblocators.EnterTitle).type(EnterTitle);
  }

  Meaning(Meaning) {
    cy.get(this.weblocators.Meaning).type(Meaning);
  }

  Category(Category) {
    cy.get(this.weblocators.Category).type(`${Category}{downarrow}{enter}`);
  }

  Continuebtn() {
    cy.get(this.weblocators.Continuebtn).click();
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

    cy.reload();
  }

  ConfirmReleasebtn() {
    cy.get(this.weblocators.ConfirmReleasebtn).click();
  }

  Releasebtn() {
    cy.get(this.weblocators.Releasebtn).click();
  }

  ReleaseCancelbtn() {
    cy.get(this.weblocators.ReleaseCancelbtn).click();
  }

  Deleteiconbtn() {
    cy.get(this.weblocators.Deleteiconbtn).click();
  }

  Deleicon_Cancelbtn() {
    cy.get(this.weblocators.Deleicon_Cancelbtn).click();
  }

  Confirmdeletebtn() {
    cy.get(this.weblocators.Confirmdeletebtn).click();
  }

  Editiconbtn() {
    cy.get(this.weblocators.Editiconbtn).click();
  }

  EditCancelbtn() {
    cy.get(this.weblocators.EditCancelbtn).click();
  }

  // Cancelbtn() {
  //   cy.get(this.weblocators.Cancelbtn).click();
  // }
}
