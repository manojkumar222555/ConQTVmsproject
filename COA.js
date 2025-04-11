export class COAPage {
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
    COA: "div[class='contract-dropdown'] div:nth-child(3) span:nth-child(1)",
    Createnewcoabtn: ".d-flex.align-items-center.create-btn",
    Createbtn: "button[type='submit']",
    TitleOfCOA: "input[placeholder='Type here...']",
    Description: "textarea[placeholder='Enter a description']",
    Cancelbtn: "button[class='pop-up-btn cancel']",
    Searchfilter: "input[placeholder='Search by COA, description']",
    ShowEntries: ".new-type-table-show-filter",
    Deleteiconbtn: "div[id='row-166'] button:nth-child(1) svg",
    Cancelbtn: ".d-btn.inner-cancel-btn",
    Deletebtn: ".d-btn.inner-reject-btn",
    Editicon: "div[id='row-165'] button:nth-child(2) svg",
    PopCancelbtn: "button[class='pop-up-btn cancel']",
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

  clickonCOA() {
    cy.get(this.weblocators.COA).click();
  }

  clickonCreateNewCoabtn() {
    cy.get(this.weblocators.Createnewcoabtn).click();
  }

  clickonCreatebtn() {
    cy.get(this.weblocators.Createbtn).click();
  }

  clickonTitleofCOA(TitleOfCOA) {
    cy.get(this.weblocators.TitleOfCOA).type(TitleOfCOA);
  }

  clickonDescription(Description) {
    cy.get(this.weblocators.Description).type(Description);
  }

  clickonCancelbtn() {
    cy.get(this.weblocators.Cancelbtn).click();
  }

  clickonSearchfilter(Searchfilter) {
    cy.get(this.weblocators.Searchfilter).type(Searchfilter);
  }

  clearSearchfilter() {
    cy.get(this.weblocators.Searchfilter).clear();
  }

  clickonShowEntries(Showentries) {
    cy.get(this.weblocators.ShowEntries).type(Showentries);
  }

  clickonDeleteiconbtn() {
    cy.get(this.weblocators.Deleteiconbtn).click();
  }

  clickonCancelbtn() {
    cy.get(this.weblocators.Cancelbtn).click();
  }

  clickonDeletebtn() {
    cy.get(this.weblocators.Deletebtn).click();
  }

  clickonEditicon() {
    cy.get(this.weblocators.Editicon).click();
  }

  clickonPopCancelbtn() {
    cy.get(this.weblocators.PopCancelbtn).click();
  }
}
