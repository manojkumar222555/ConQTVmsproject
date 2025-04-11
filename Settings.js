export class SettingsPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    Settings:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > svg:nth-child(2)",
    Profile: "span[class='p-label']",
    edit: ".setting-org-edit.px-2",
    first_name: "input[name='firstName']",
    last_name: "input[name='lastName']",
    profile: "input[name='profile']",
    position: "input[name='position']",
    email: "input[name='email']",
    phone: "input[name='phoneNumber']",
    mobile: "input[name='mobileNumber']",
    department: "input[name='department']",
    Country: "select[name='country']",
    state: "select[name='state']",
    city: "select[name='city']",
    street: "input[name='street']",
    zip_code: "input[name='zipcode']",
    submit_btn: "button[type='submit']",
    Cancel_btn: "button[type='button']",

    Organization_tab:
      ".tab-label.nav-link[data-rr-ui-event-key='Organization']",
    EditOrg_btn: ".new-vendor-profile-edit-btn",
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
    Nextbtn1: "button[type='submit']",

    firstname: "input[placeholder='Enter your first name']",
    lastname: "input[placeholder='Enter your last name']",
    Email: "input[placeholder='Enter email address']",
    Phoneno:
      "input[placeholder='Enter your mobile number'][value='+91'][name='PhoneNumber']",
    Department: "select[name='Department']",
    Position: "select[name='Position']",
    Whatsappno:
      "input[placeholder='Enter your mobile number'][value='+91'][name='WhatsAppNumber']",
    Alternateno:
      "input[placeholder='Enter your mobile number'][value='+91'][name='AlterNativePhoneNumber']",
    Nextbtn2: "button[type='submit']",

    TypeofBusiness: "select[name='TypeOfBusiness']",
    Experience: "select[name='Experience']",
    Workingday: "select[name='WorkingDays']",
    Workingtime: "select[name='WorkingTime']",
    BiddingCategories: "select[name='BiddingCategory']",
    Nameoftop3cust: "input[placeholder='Enter customer name']",
    Radiobtn: "input[value='No']",
    Nextbtn3: "button[type='submit']",

    Bankname: "select[name='BankName']",
    BankAccNo: "input[placeholder='Enter Your Bank Account Number']",
    AccountType: "select[name='BankAccountType']",
    BranchLocation: "input[placeholder='Enter Your Branch Location']",
    IFSCswiftcode: "input[placeholder='Enter Your IFSC/Swift Code']",
    Nextbtn4: "button[type='submit']",

    AnnualRevenue: "input[placeholder='Enter your company’s annual revenue']",
    Nameofparent:
      "input[placeholder='Enter names of parent, affiliate, and subsidiary companies']",
    Paymentterm: "select[name='CreditTerm']",
    Nextbtn5: "button[type='submit']",

    Minimum: "input[placeholder='₹ 00.00'][name='Mini']",
    Maximum: "input[placeholder='₹ 00.00'][name='Maxi']",
    Companylimit:
      "input[placeholder='₹ 00.00'][name='LimitWorkSizeStatusSpecify']",
    DeliveryTracking: "input[name='TrackingProcessStatusSpecify']",
    ProjectReference: "input[name='ProjectpreferenceSpecify']",
    Nextbtn6: "button[type='submit']",
    SupplierQuality: "select[name='CertifiedForQualityStatusSelect']",
    Nextbtn7: "button[type='submit']",
    Savechanges_btn: ".new-ven-pro-sve-chgs-btn",
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

  Settings() {
    cy.get(this.weblocators.Settings).click();
  }

  Profile() {
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
    cy.get(this.weblocators.city).select(city);
  }

  typeStreet(Street) {
    cy.get(this.weblocators.street).type(Street);
  }

  typezipcode(zipcode) {
    cy.get(this.weblocators.zip_code).type(zipcode);
  }

  Cancel_btn() {
    cy.get(this.weblocators.Cancel_btn).click({ multiple: true });
  }

  // Organization page --------------------------------------------
  Organization_tab() {
    cy.get(this.weblocators.Organization_tab).click();
  }

  EditOrg_btn() {
    cy.get(this.weblocators.EditOrg_btn).click();
  }

  ClickonRegistered_Country() {
    cy.get(this.weblocators.Registered_Country).select("");
  }

  ClickonVendor_Type() {
    cy.get(this.weblocators.Vendor_Type).select("");
  }

  ClickonCompany_Type() {
    cy.get(this.weblocators.Company_Type).select("");
  }

  ClickonAuthorized_Capital() {
    cy.get(this.weblocators.Authorized_Capital).clear();
  }

  ClickonEstablished_Date() {
    cy.get(this.weblocators.Established_Date).clear();
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

  ClickonCompany_Name() {
    cy.get(this.weblocators.Company_Name).clear();
  }

  ClickonWebsite() {
    cy.get(this.weblocators.Website).clear();
  }

  ClickonPhone_Number() {
    cy.get(this.weblocators.Phone_Number).clear();
  }

  ClickonMobile_Number() {
    cy.get(this.weblocators.Mobile_Number).clear();
  }

  ClickonAddress_Line1() {
    cy.get(this.weblocators.Address_Line1).clear();
  }

  ClickonAddress_Line2() {
    cy.get(this.weblocators.Address_Line2).clear();
  }

  ClickonState() {
    cy.get(this.weblocators.State).select("2442,Rajasthan,undefined,undefined");
  }

  ClickonCity() {
    cy.get(this.weblocators.City).select("Bikaner");
  }

  ClickonPostal_Code() {
    cy.get(this.weblocators.Postal_Code).clear();
  }

  nextbtn1() {
    cy.get(this.weblocators.Nextbtn1).click();
  }

  // filling data
  EnterRegistered_Country(Registeredcountry) {
    cy.get(this.weblocators.Registered_Country).select(Registeredcountry);
  }

  EnterVendor_Type(vendorType) {
    cy.get(this.weblocators.Vendor_Type).select(vendorType);
  }

  EnterCompany_Type(companyType) {
    cy.get(this.weblocators.Company_Type).select(companyType);
  }

  EnterAuthorized_Capital(capital) {
    cy.get(this.weblocators.Authorized_Capital).type(capital);
  }

  EnterEstablished_Date(Date) {
    cy.get(this.weblocators.Established_Date).type(Date);
  }

  EnterCompany_Name(companyname1) {
    cy.get(this.weblocators.Company_Name).type(companyname1);
  }

  EnterWebsite(website) {
    cy.get(this.weblocators.Website).type(website);
  }

  EnterPhone_Number(phonenumber1) {
    cy.get(this.weblocators.Phone_Number).type(phonenumber1);
  }

  EnterMobile_Number(mobilenumber1) {
    cy.get(this.weblocators.Mobile_Number).type(mobilenumber1);
  }

  EnterAddress_Line1(addr1) {
    cy.get(this.weblocators.Address_Line1).type(addr1);
  }

  EnterAddress_Line2(addr2) {
    cy.get(this.weblocators.Address_Line2).type(addr2);
  }

  EnterState(orgstate) {
    cy.get(this.weblocators.State).select(orgstate);
  }

  EnterCity(orgcity) {
    cy.get(this.weblocators.City).select(orgcity);
  }

  EnterPostal_Code(postalcode) {
    cy.get(this.weblocators.Postal_Code).type(postalcode);
  }

  clickonSavechanges_btn() {
    cy.get(this.weblocators.Savechanges_btn).click();
  }

  firstname(firstname) {
    cy.get(this.weblocators.firstname).type(firstname);
  }

  lastname(lastname) {
    cy.get(this.weblocators.lastname).type(lastname);
  }

  Email(email) {
    cy.get(this.weblocators.Email).type(email);
  }

  phoneno(phoneno) {
    cy.get(this.weblocators.Phoneno).type(phoneno);
  }

  department(department) {
    cy.get(this.weblocators.Department).select(department);
  }

  position(position) {
    cy.get(this.weblocators.Position).select(position);
  }

  whatsappno(whatsappno) {
    cy.get(this.weblocators.Whatsappno).type(whatsappno);
  }

  alternateno(alternateno) {
    cy.get(this.weblocators.Alternateno).type(alternateno);
  }

  nextbtn2() {
    cy.get(this.weblocators.Nextbtn2).click();
  }

  TypeofBusiness(TypeofBusiness) {
    cy.get(this.weblocators.TypeofBusiness).select(TypeofBusiness);
  }

  Experience(Experience) {
    cy.get(this.weblocators.Experience).select(Experience);
  }

  Workingday(Workingday) {
    cy.get(this.weblocators.Workingday).select(Workingday);
  }

  Workingtime(Workingtime) {
    cy.get(this.weblocators.Workingtime).select(Workingtime);
  }

  BiddingCategories(Biddingcategories) {
    cy.get(this.weblocators.BiddingCategories).select(Biddingcategories);
  }

  Nameoftop3cust(top3cust) {
    cy.get(this.weblocators.Nameoftop3cust).type(top3cust);
  }

  Radiobtn() {
    cy.get(this.weblocators.Radiobtn).check();
  }

  Nextbtn3() {
    cy.get(this.weblocators.Nextbtn3).click();
  }

  Bankname(BankName) {
    cy.get(this.weblocators.Bankname).select(BankName);
  }

  BankAccNo(BankAccountNo) {
    cy.get(this.weblocators.BankAccNo).type(BankAccountNo);
  }

  AccountType(AccountType) {
    cy.get(this.weblocators.AccountType).select(AccountType);
  }

  BranchLocation(BranchLocation) {
    cy.get(this.weblocators.BranchLocation).type(BranchLocation);
  }

  IFSCswiftcode(IFSCSwiftcode) {
    cy.get(this.weblocators.IFSCswiftcode).type(IFSCSwiftcode);
  }

  Nextbtn4() {
    cy.get(this.weblocators.Nextbtn4).click();
  }

  AnnualRevenue(AnnualRevenue) {
    cy.get(this.weblocators.AnnualRevenue).type(AnnualRevenue);
  }

  Nameofparent(Nameofparent) {
    cy.get(this.weblocators.Nameofparent).type(Nameofparent);
  }

  Paymentterm(Paymentterm) {
    cy.get(this.weblocators.Paymentterm).select(Paymentterm);
  }

  Nextbtn5() {
    cy.get(this.weblocators.Nextbtn5).click();
  }

  Minimum(Minimum) {
    cy.get(this.weblocators.Minimum).type(Minimum);
  }

  Maximum(Maximum) {
    cy.get(this.weblocators.Maximum).type(Maximum);
  }

  Companylimit(Doescompanylimit) {
    cy.get(this.weblocators.Companylimit).type(Doescompanylimit);
  }

  DeliveryTracking(Doescompanydelivered) {
    cy.get(this.weblocators.DeliveryTracking).type(Doescompanydelivered);
  }

  ProjectReference(Projectreference) {
    cy.get(this.weblocators.ProjectReference).type(Projectreference);
  }

  Nextbtn6() {
    cy.get(this.weblocators.Nextbtn6).click();
  }

  SupplierQuality(SupplierQuality) {
    cy.get(this.weblocators.SupplierQuality).select(SupplierQuality);
  }

  Nextbtn7() {
    cy.get(this.weblocators.Nextbtn7).click();
  }
}
