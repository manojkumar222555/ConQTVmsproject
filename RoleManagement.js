export class RoleManagementPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    Administrator:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > svg:nth-child(2)",
    UserAuthentication:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > span:nth-child(1)",
    AddRolebtn: ".purchase-btn.justify-content-center",
    RoleName: "input[placeholder='Enter role name']",
    Description: "textarea[placeholder='Write description for this role...']",

    Togglebtn:
      "div[class='role-module-container'] div:nth-child(1) div:nth-child(2) label:nth-child(1) span:nth-child(1) span:nth-child(1) input:nth-child(1)",
    Submitbtn: "button[type='submit']",
    Viewiconbtn:
      "div[class='main-table'] div:nth-child(1) div:nth-child(2) button:nth-child(1) svg",
    Editbtn: "button[class='role-cancel-btn role-submit-btn']",
    Cancelbtn: "button[type='button']",
    Editiconbtn:
      "div[class='main-table'] div:nth-child(1) div:nth-child(2) button:nth-child(2) img:nth-child(1)",
    Deleteiconbtn:
      "div[class='main-table'] div:nth-child(1) div:nth-child(2) button:nth-child(3) img:nth-child(1)",
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

  UserAuthentication() {
    cy.get(this.weblocators.UserAuthentication).click();
  }

  AddRolebtn() {
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
    cy.get(this.weblocators.Submitbtn).click();
  }

  Viewiconbtn() {
    cy.get(this.weblocators.Viewiconbtn).click();
  }

  Editbtn() {
    cy.get(this.weblocators.Editbtn).click();
  }

  Cancelbtn() {
    cy.get(this.weblocators.Cancelbtn).click();
  }

  Editiconbtn() {
    cy.get(this.weblocators.Editiconbtn).click();
  }

  Deleteiconbtn() {
    cy.get(this.weblocators.Deleteiconbtn).click();
  }
}
