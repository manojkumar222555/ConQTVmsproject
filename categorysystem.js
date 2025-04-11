export class categoryPage {
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
    Catalogue_setup: "div:nth-child(10) div:nth-child(1) svg",
    Categorysystem:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > div:nth-child(11) > span:nth-child(1)",
    addcategorybtn: ".d-flex.align-items-center.create-btn",
    categoryname:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)",
    categorydescription:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > input:nth-child(1)",
    deleteicon: "div[id='row-0'] button[type='button'] svg",
    righttickbtn: "button[type='submit'] div div svg",
    searchbar: "input[placeholder='Search for category name']",
    showentries: ".new-type-table-show-filter",
    closetoastmsg: "button[aria-label='close'] svg",
    viewiconbtn: "div[id='row-1'] button:nth-child(1) svg",
    sub_categorybtn: ".d-flex.align-items-center.create-btn",
    sub_categoryname:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)",
    sub_categorydescription:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > input:nth-child(1)",
    righttickbtn1: "button[type='submit'] div div svg",
    editiconbtn1: "button:nth-child(2)",
    deleteiconbtn2: "div[id='row-1'] button:nth-child(2)",
    deleteanywaybtn: ".cat-d-btn.inner-reject-btn",
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

  clickonCatalogueSetup() {
    cy.get(this.weblocators.Catalogue_setup).click();
  }

  clickonCategorysystem() {
    cy.get(this.weblocators.Categorysystem).click();
  }

  clickonAddcategorybtn() {
    cy.get(this.weblocators.addcategorybtn).click({ force: true });
  }

  enterCategoryname(categoryname) {
    cy.get(this.weblocators.categoryname).type(categoryname);
  }

  enterCategorydescription(categorydescription) {
    cy.get(this.weblocators.categorydescription).type(categorydescription);
  }

  clickonDeleteicon() {
    cy.get(this.weblocators.deleteicon).click();
  }

  clickonRighttick() {
    cy.get(this.weblocators.righttickbtn).click();
  }

  enterfilteronsearch(searchfilterdata) {
    cy.get(this.weblocators.searchbar).type(searchfilterdata);
  }

  clickonclosetoastmsg() {
    cy.get(this.weblocators.closetoastmsg).click();
  }

  clearsearchfilter() {
    cy.get(this.weblocators.searchbar).clear();
  }

  enterinv_filteronsearch(inv_searchfilterdata) {
    cy.get(this.weblocators.searchbar).type(inv_searchfilterdata);
  }

  clickonshowentries(showentries) {
    cy.get(this.weblocators.showentries).select(showentries);
  }

  clickonviewiconbtn() {
    cy.get(this.weblocators.viewiconbtn).click();
  }

  clickonsub_categorybtn() {
    cy.get(this.weblocators.sub_categorybtn).click();
  }

  entersub_categoryname(sub_categoryname) {
    cy.get(this.weblocators.sub_categoryname).type(sub_categoryname);
  }

  entersub_categorydescription(sub_categorydescription) {
    cy.get(this.weblocators.sub_categorydescription).type(
      sub_categorydescription
    );
  }

  clickonrighttickbtn1() {
    cy.get(this.weblocators.righttickbtn1).click();
  }

  clickonediticonbtn1() {
    cy.get(this.weblocators.editiconbtn1).click({ multiple: true });
  }

  clickondeleteiconbtn2() {
    cy.get(this.weblocators.deleteiconbtn2).click();
  }

  clickondeleteanywaybtn() {
    cy.get(this.weblocators.deleteanywaybtn).click();
  }
}
