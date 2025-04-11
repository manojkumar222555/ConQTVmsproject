export class settingsPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    Administrator: ":nth-child(8) > .d-flex > .side-bar-contarct-option",
    Settings: ".contract-dropdown > :nth-child(3) > .d-flex",
    Profile: ":nth-child(4) > .p-label",
    edit: ".setting-org-edit.px-2",
    first_name: "input[name='firstName']",
    last_name: "input[name='lastName']",
    profile: "input[name='profile']",
    position: "input[name='position']",
    email: "input[name='email']",
    phone: "input[name='phoneNumber']",
    mobile: "input[name='mobileNumber']",
    department: "input[name='department']",
    Country: "select[name='orgCountry']",
    state: "select[name='orgState']",
    city: "select[name='orgCity']",
    street: "input[name='address']",
    zip_code: "input[name='zipcode']",
    submit_btn: "button[type='submit']",

    // organization tab
    organization_tab:
      ".tab-label.nav-link[data-rr-ui-event-key='Organization']",
    editbtnorg: "h6[class='setting-org-edit']",
    companynameorg: "input[name='orgName']",
    addressline1org: "input[name='orgAddress']",
    countryorg:
      "div[class='d-flex align-items-baseline gap-4'] select[name='country']",
    stateorg:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > select:nth-child(3)",
    cityorg:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > select:nth-child(3)",
    zipcodeorg: "div[class='setting-org-form-input'] input[name='zipcode']",
    currencyorg: "input[name='currency']",
    currencycodeorg: "input[name='currencyCode']",
    phonenumberorg:
      "input[placeholder='Enter Phone number'][value='+91 80000 18857']",
    websiteorg: "input[name='website']",
    tax_gstnoorg: "input[name='orgGST']",
    registerationnumorg: "input[name='registrationNumber']",
    pannumorg: "input[name='pantanNumber']",
    tannumorg: "input[name='tanNumber']",
    savechanges_btn: "button[type='submit']",

    // Billing/Delivery
    edit_bil:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h6:nth-child(2)",
    addressline1_bil: "input[placeholder='Enter Location Name']",
    addressline2_bil: "input[placeholder='Enter Address']",
    country_bil:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > select:nth-child(3)",
    state_bil:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > select:nth-child(3)",
    city_bil:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > select:nth-child(3)",
    zipcode_bil: "input[placeholder='Enter Postal Code']",
    contactperson_bil: "input[placeholder='Enter Contact Person']",
    phonenumber_bil: "div[class='input-border registration PhoneInput']",
    countrycode_bil:
      "div[class='input-border registration PhoneInput'] select[name='phoneNumberCountry']",
    addmoreaddressbtn_bil: ".px-1.create-btn-title",

    //new billing and delivery address
    billingcheckboxbtn:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(23) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)",
    deliverycheckboxbtn:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(23) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)",
    addressline1_del: "input[placeholder='Enter Location Name']",
    addressline2_del: "input[placeholder='Enter Address']",
    country_del:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(23) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > select:nth-child(3)",
    state_del:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(23) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > select:nth-child(3)",
    city_del:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(23) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > select:nth-child(3)",
    zipcode_del: "input[placeholder='Enter Postal Code']",
    contactperson_del: "input[placeholder='Enter Contact Person']",
    phonenumber_del:
      "div[class='input-border registration PhoneInput'] input[placeholder='Enter Phone number']",
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

  clickonAdministrator() {
    cy.get(this.weblocators.Administrator).click();
  }

  clickonSettings() {
    cy.get(this.weblocators.Settings).click();
  }

  clickonProfile() {
    cy.get(this.weblocators.Profile).click();
  }

  clickonEditbtn() {
    cy.get(this.weblocators.edit).click();
  }

  enterfirstname() {
    cy.get(this.weblocators.first_name).clear();
  }

  enterlastname() {
    cy.get(this.weblocators.last_name).clear();
  }

  enterprofile() {
    cy.get(this.weblocators.profile).clear();
  }

  enterposition() {
    cy.get(this.weblocators.position).clear();
  }

  enteremail() {
    cy.get(this.weblocators.email).clear();
  }

  enterphone() {
    cy.get(this.weblocators.phone).clear();
  }

  entermobile() {
    cy.get(this.weblocators.mobile).clear();
  }

  enterdepartment() {
    cy.get(this.weblocators.department).clear();
  }

  entercountry(country) {
    cy.get(this.weblocators.Country).select(country);
  }

  enterstate() {
    cy.get(this.weblocators.state).clear();
  }

  entercity() {
    cy.get(this.weblocators.city).clear();
  }

  enterstreet() {
    cy.get(this.weblocators.street).clear();
  }

  enterzipcode() {
    cy.get(this.weblocators.zip_code).clear();
  }

  clickonSubmitbtn() {
    cy.get(this.weblocators.submit_btn).click();
  }

  typefirstname(firstname) {
    cy.get(this.weblocators.first_name).type(firstname);
  }

  typelastname(lastname) {
    cy.get(this.weblocators.last_name).type(lastname);
  }

  typeprofile(profile) {
    cy.get(this.weblocators.profile).type(profile);
  }

  typeposition(Position) {
    cy.get(this.weblocators.position).type(Position);
  }

  typephone(phone) {
    cy.get(this.weblocators.phone).type(phone);
  }

  typemobile(mobile) {
    cy.get(this.weblocators.mobile).type(mobile);
  }

  typedepartment(department) {
    cy.get(this.weblocators.department).type(department);
  }

  typecountry(country) {
    cy.get(this.weblocators.Country).type(country);
  }

  typestate(state) {
    cy.get(this.weblocators.state).type(state);
  }

  typecity(city) {
    cy.get(this.weblocators.city).type(city);
  }

  typeStreet(Street) {
    cy.get(this.weblocators.street).type(Street);
  }

  typezipcode(zipcode) {
    cy.get(this.weblocators.zip_code).type(zipcode);
  }

  // Organization tab
  clickonOrganizationtab() {
    cy.get(this.weblocators.organization_tab).click();
  }

  clickoneditbtnorg() {
    cy.get(this.weblocators.editbtnorg).click();
  }

  clearcompanyname() {
    cy.get(this.weblocators.companynameorg).clear();
  }

  clearaddressline1() {
    cy.get(this.weblocators.addressline1org).clear();
  }

  clearzipcode() {
    cy.get(this.weblocators.zipcodeorg).clear();
  }

  clearcurrency() {
    cy.get(this.weblocators.currencyorg).clear();
  }

  clearcurrencycode() {
    cy.get(this.weblocators.currencycodeorg).clear();
  }

  clearphonenumber() {
    cy.get(this.weblocators.phonenumberorg).clear();
  }

  clearwebsite() {
    cy.get(this.weblocators.websiteorg).clear();
  }

  cleartaxgstno() {
    cy.get(this.weblocators.tax_gstnoorg).clear();
  }

  clearregisterationno() {
    cy.get(this.weblocators.registerationnumorg).clear();
  }

  clearpanno() {
    cy.get(this.weblocators.pannumorg).clear();
  }

  cleartanno() {
    cy.get(this.weblocators.tannumorg).clear();
  }

  clickonsavechangesbtn() {
    cy.get(this.weblocators.savechanges_btn).click();
  }

  // organization tab - filling form
  entercompanynameorg(companyname_org) {
    cy.get(this.weblocators.companynameorg).type(companyname_org);
  }

  enteraddressline1org(addressline1_org) {
    cy.get(this.weblocators.addressline1org).type(addressline1_org);
  }

  entercityorg(city_org) {
    cy.get(this.weblocators.cityorg).select(city_org);
  }

  enterzipcodeorg(zipcode_org) {
    cy.get(this.weblocators.zipcodeorg).type(zipcode_org);
  }

  entercurrencyorg(currency_org) {
    cy.get(this.weblocators.currencyorg).type(currency_org);
  }

  entercurrencycodeorg(currencycode_org) {
    cy.get(this.weblocators.currencycodeorg).type(currencycode_org);
  }

  enterphonenumberorg(phonenumber_org) {
    cy.get(this.weblocators.phonenumberorg).type(phonenumber_org);
  }

  enterwebsiteorg(website_org) {
    cy.get(this.weblocators.websiteorg).type(website_org);
  }

  entertax_gstnoorg(tax_gstno_org) {
    cy.get(this.weblocators.tax_gstnoorg).type(tax_gstno_org);
  }

  enterregisterationnoorg(registerationno_org) {
    cy.get(this.weblocators.registerationnumorg).type(registerationno_org);
  }

  enterpannoorg(panno_org) {
    cy.get(this.weblocators.pannumorg).type(panno_org);
  }

  enterTannoorg(Tanno_org) {
    cy.get(this.weblocators.tannumorg).type(Tanno_org);
  }

  // Organization tab - billing/delivery
  clickoneditbtnbil() {
    cy.get(this.weblocators.edit_bil).click();
  }

  clearaddressline1bil() {
    cy.get(this.weblocators.addressline1_bil).clear();
  }

  clearaddressline2bil() {
    cy.get(this.weblocators.addressline2_bil).clear();
  }

  clearcountrybil() {
    cy.get(this.weblocators.country_bil).select("");
  }

  clearstatebil() {
    cy.get(this.weblocators.state_bil).select("");
  }

  clearcitybil() {
    cy.get(this.weblocators.city_bil).select("");
  }

  clearzipcodebil() {
    cy.get(this.weblocators.zipcode_bil).clear();
  }

  clearcontactpersonbil() {
    cy.get(this.weblocators.contactperson_bil).clear();
  }

  clearphonenobil() {
    cy.get(this.weblocators.phonenumber_bil).clear();
  }

  enteraddressline1bil(addressline1_bil) {
    cy.get(this.weblocators.addressline1_bil).type(addressline1_bil);
  }

  enteraddressline2bil(addressline2_bil) {
    cy.get(this.weblocators.addressline2_bil).type(addressline2_bil);
  }

  entercountrybil(country_bil) {
    cy.get(this.weblocators.country_bil).select(country_bil);
  }

  enterstatebil(state_bil) {
    cy.get(this.weblocators.state_bil).select(state_bil);
  }

  entercitybil(city_bil) {
    cy.get(this.weblocators.city_bil).select(city_bil);
  }

  enterzipcodebil(zipcode_bil) {
    cy.get(this.weblocators.zipcode_bil).type(zipcode_bil);
  }

  entercontactpersonbil(contactperson_bil) {
    cy.get(this.weblocators.contactperson_bil).type(contactperson_bil);
  }

  enterphonenobil(phonenumber_bil) {
    cy.get(this.weblocators.phonenumber_bil).type(phonenumber_bil);
  }

  entercountrycodebil(countrycode_bil) {
    cy.get(this.weblocators.countrycode_bil).select(countrycode_bil);
  }

  clickonaddmoreaddressbtn_bil() {
    cy.get(this.weblocators.addmoreaddressbtn_bil).click();
  }

  enterbillingcheckbox() {
    cy.get(this.weblocators.billingcheckboxbtn).check();
  }

  enterdeliverycheckbox() {
    cy.get(this.weblocators.deliverycheckboxbtn).check();
  }

  enteraddressline1del(addressline1_del) {
    cy.get(this.weblocators.addressline1_del).type(addressline1_del);
  }

  enteraddressline2del(addressline2_del) {
    cy.get(this.weblocators.addressline2_del).type(addressline2_del);
  }

  entercountrydel(country_del) {
    cy.get(this.weblocators.country_del).select(country_del);
  }

  enterstatedel(state_del) {
    cy.get(this.weblocators.state_del).select(state_del);
  }

  entercitydel(city_del) {
    cy.get(this.weblocators.city_del).select(city_del);
  }

  enterzipcodedel(zipcode_del) {
    cy.get(this.weblocators.zipcode_del).type(zipcode_del);
  }

  entercontactpersondel(contactperson_del) {
    cy.get(this.weblocators.contactperson_del).type(contactperson_del);
  }

  enterphonenodel(phonenumber_del) {
    cy.get(this.weblocators.phonenumber_del).type(phonenumber_del);
  }
}
