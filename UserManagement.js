export class UserManagementPage {
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
    UserManagementtab: ".tab-label.nav-link",
    Addnewuserbtn: ".purchase-btn",
    Submitbtn: "button[type='submit']",
    Firstname: "input[placeholder='Enter First Name']",
    Lastname: "input[placeholder='Enter Last Name']",
    Email: "input[placeholder='Enter Email']",
    Phonenumber: "input[placeholder='Enter Phone Number']",
    Password: "input[placeholder='Enter Password']",
    Usertype: "#UserType",
    Role: "#roleId",
    PopupCreatebtn: ".approve-popup-approve-btn",
    Continuebtn: ".admin-delete-continue-btn",
    Viewiconbtn:
      "div[id='row-0'] div[class='d-flex align-items-center action-btns gap-1'] div:nth-child(1) svg",
    View_Cancelbtn: "button[class='admin-edit-cancel-button']",
    Editiconbtn: "div[id='row-0'] img[alt='edit']",
    Deleteiconbtn:
      "div[id='row-1'] div[id='cell-6-undefined'] div:nth-child(3) svg path",
    Delete_Cancelbtn: "button[class='admin-cancel-btn']",
    Confirmdeletebtn: ".admin-cancel-btn.admin-delete-btn",
    Searchfilter: "input[placeholder='Search by name, email, number']",
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

  UserManagementtab() {
    cy.get(this.weblocators.UserManagementtab).click();
  }

  Addnewuserbtn() {
    cy.get(this.weblocators.Addnewuserbtn).click();
  }

  Submitbtn() {
    cy.get(this.weblocators.Submitbtn).click();
  }

  Firstname(Firstname) {
    cy.get(this.weblocators.Firstname).type(Firstname);
  }

  Lastname(Lastname) {
    cy.get(this.weblocators.Lastname).type(Lastname);
  }

  Email(Email) {
    cy.get(this.weblocators.Email).type(Email);
  }

  Phonenumber(Phonenumber) {
    cy.get(this.weblocators.Phonenumber).type(Phonenumber);
  }

  Password(Password) {
    cy.get(this.weblocators.Password).type(Password);
  }

  Usertype(Usertype) {
    cy.get(this.weblocators.Usertype).select(Usertype);
  }

  Role(Role) {
    cy.get(this.weblocators.Role).select(Role);
  }

  PopupCreatebtn() {
    cy.get(this.weblocators.PopupCreatebtn).click();
  }

  Continuebtn() {
    cy.get(this.weblocators.Continuebtn).click();
  }

  Viewiconbtn() {
    cy.get(this.weblocators.Viewiconbtn).click();
  }

  View_Cancelbtn() {
    cy.get(this.weblocators.View_Cancelbtn).click();
  }

  Editiconbtn() {
    cy.get(this.weblocators.Editiconbtn).click();
  }

  Deleteiconbtn() {
    cy.get(this.weblocators.Deleteiconbtn).click({ force: true });
  }

  Delete_Cancelbtn() {
    cy.get(this.weblocators.Delete_Cancelbtn).click();
  }

  Confirmdeletebtn() {
    cy.get(this.weblocators.Confirmdeletebtn).click();
  }

  Searchfilter(Searchfilter) {
    cy.get(this.weblocators.Searchfilter).type(Searchfilter);
  }

  // RoleName(RoleName) {
  //   cy.get(this.weblocators.RoleName).type(RoleName);
  // }

  // Description(Description) {
  //   cy.get(this.weblocators.Description).type(Description);
  // }

  // Togglebtn() {
  //   cy.get(this.weblocators.Togglebtn).click();
  // }

  // Submitbtn() {
  //   cy.get(this.weblocators.Submitbtn).click();
  // }

  // Viewiconbtn() {
  //   cy.get(this.weblocators.Viewiconbtn).click();
  // }

  // Editbtn() {
  //   cy.get(this.weblocators.Editbtn).click();
  // }

  // Cancelbtn() {
  //   cy.get(this.weblocators.Cancelbtn).click();
  // }

  // Editiconbtn() {
  //   cy.get(this.weblocators.Editiconbtn).click();
  // }

  // Deleteiconbtn() {
  //   cy.get(this.weblocators.Deleteiconbtn).click();
  // }

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
