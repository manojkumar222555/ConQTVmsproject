export class registerPage {
  weblocators = {
    RegisterNow: ".vendor-registration-text",
    Checkbox: "input[name='consent1']",
    Checkbox2: "input[name='consent2']",
    Accept_btn: ".accept-btn",
    Registered_Country: "select[name='selectedCountry']",
    Vendor_Type: "select[name='VendorType']",
    Company_Type: "select[name='CompanyType']",
    Authorized_Capital: "input[placeholder='Enter registered capital']",
    Established_Date: '[name="EstablishedDate"]',
    Username: "input[placeholder='Enter email address']",
    Password: "input[placeholder='Enter Password']",
    Confirm_Password: "input[placeholder='Enter Confirm Password']",
    Company_Name: "input[placeholder='Enter your company name']",
    Website: "input[placeholder='https://www.example.com']",
    Phone_Number: '[name="PhoneNumber"]',
    Mobile_Number: '[name="MobileNumber"]',
    Address_Line1:
      "input[placeholder='Add address details here'][name='Address1']",
    Address_Line2:
      "input[placeholder='Add address details here'][name='Address2']",
    State: "select[name='selectedState']",
    City: "select[name='City']",
    Postal_Code: "input[placeholder='Enter Postal Code']",
  };
  openurl() {
    cy.visit("https://vendor-test.conqt.com/");
  }

  clickRegisternowbtn() {
    cy.get(this.weblocators.RegisterNow).click();
  }

  clickOnConstentcheckbox() {
    cy.get(this.weblocators.Checkbox).check();
  }

  clickOnConstentcheckbox2() {
    cy.get(this.weblocators.Checkbox2).check();
  }

  clickOnAcceptbtn() {
    cy.get(this.weblocators.Accept_btn).click();
  }

  ClickonRegistered_Country() {
    cy.get(this.weblocators.Registered_Country).select("132,India,IN,+91");
  }

  ClickonVendor_Type() {
    cy.get(this.weblocators.Vendor_Type).select("Domestic");
  }

  ClickonCompany_Type() {
    cy.get(this.weblocators.Company_Type).select(
      "Private Limited Company (Pvt Ltd)"
    );
  }

  ClickonAuthorized_Capital(capital) {
    cy.get(this.weblocators.Authorized_Capital).type(capital);
  }

  ClickonEstablished_Date() {
    cy.get(this.weblocators.Established_Date).click();
  }

  ClickonUsername(exist_username) {
    cy.get(this.weblocators.Username).type(exist_username);
  }

  ClickonPassword(v_password) {
    cy.get(this.weblocators.Password).type(v_password);
  }

  ClickonConfirm_Password(confirmpass) {
    cy.get(this.weblocators.Confirm_Password).type(confirmpass);
  }

  ClickonCompany_Name(companyname1) {
    cy.get(this.weblocators.Company_Name).type(companyname1);
  }

  ClickonWebsite(website) {
    cy.get(this.weblocators.Website).type(website);
  }

  ClickonPhone_Number(phonenumber1) {
    cy.get(this.weblocators.Phone_Number).type(phonenumber1);
  }

  ClickonMobile_Number(mobilenumber1) {
    cy.get(this.weblocators.Mobile_Number).type(mobilenumber1);
  }

  ClickonAddress_Line1(addr1) {
    cy.get(this.weblocators.Address_Line1).type(addr1);
  }

  ClickonAddress_Line2(addr2) {
    cy.get(this.weblocators.Address_Line2).type(addr2);
  }

  ClickonState() {
    cy.get(this.weblocators.State).select("2442,Rajasthan,undefined,undefined");
  }

  ClickonCity() {
    cy.get(this.weblocators.City).select("Bikaner");
  }

  ClickonPostal_Code(postalcode) {
    cy.get(this.weblocators.Postal_Code).type(postalcode);
  }
}
