export class LogoutPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    Logout:
      "body div[id='root'] div[class='App'] div div[class='d-none d-sm-block col-lg-2'] div[id='side-bar-dynamic'] div[class='dashboardMenu'] div:nth-child(2) div:nth-child(1)",
    Cancelbtn: ".d-btn.inner-cancel-btn",
    Logoutbtn: ".d-btn.inner-reject-btn",
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

  Logout() {
    cy.get(this.weblocators.Logout).click();
  }

  Cancelbtn() {
    cy.get(this.weblocators.Cancelbtn).click();
  }

  Logoutbtn() {
    cy.get(this.weblocators.Logoutbtn).click();
  }
}
