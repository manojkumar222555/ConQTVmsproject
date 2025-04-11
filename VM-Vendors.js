export class VendorsPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    toastmsg: "button[aria-label='close'] svg path",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    VendorManagement:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > svg:nth-child(2)",
    Vendors:
      "div[class='contract-dropdown active'] div:nth-child(1) span:nth-child(1)",
    Newtab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='0']",
    Approvedtab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='1']",
    Rejectedtab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='2']",
    Incompletetab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='3']",
    Alltab:
      ".new-pr-table-tab-label.catlogue.nav-link[data-rr-ui-event-key='all']",
    Searchfilter: "input[placeholder='Search by Vendor name']",
    Showentries: ".new-type-table-show-filter",
    Checkbox: "input[name='select-row-711']",
    Deletebtn: ".new-vendor-table-del-btn",
    CreateVendorbtn: ".d-flex.align-items-center.create-new-vendor-btn",
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

  clickonVendorManagement() {
    cy.get(this.weblocators.VendorManagement).click();
  }

  ClickonVendors() {
    cy.get(this.weblocators.Vendors).click();
  }

  Newtab() {
    cy.get(this.weblocators.Newtab).click();
  }

  Approvedtab() {
    cy.get(this.weblocators.Approvedtab).click();
  }

  Rejectedtab() {
    cy.get(this.weblocators.Rejectedtab).click();
  }

  Incompletetab() {
    cy.get(this.weblocators.Incompletetab).click();
  }

  Alltab() {
    cy.get(this.weblocators.Alltab).click();
  }

  Searchfilter(Searchfilter) {
    cy.get(this.weblocators.Searchfilter).type(Searchfilter);
  }

  Showentries(Showentries) {
    cy.get(this.weblocators.Showentries).select(Showentries);
  }

  TableData() {
    let totalPages1 = 7;
    for (let p = 2; p <= totalPages1; p++) {
      if (totalPages1 > 2) {
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
    for (let p = 2; p <= totalPages2; p++) {
      if (totalPages2 > 2) {
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

    let totalPages3 = 7;
    for (let p = 2; p <= totalPages3; p++) {
      if (totalPages3 > 2) {
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

    let totalPages4 = 7;
    for (let p = 2; p <= totalPages4; p++) {
      if (totalPages4 > 2) {
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

    let totalPages5 = 7;
    for (let p = 2; p <= totalPages5; p++) {
      if (totalPages5 > 2) {
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

    let totalPages6 = 4;
    for (let p = 2; p <= totalPages6; p++) {
      if (totalPages6 > 2) {
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

  Checkbox() {
    cy.get(this.weblocators.Checkbox).check();
  }

  Deletebtn() {
    cy.get(this.weblocators.Deletebtn).click();
  }

  CreateVendorbtn() {
    cy.get(this.weblocators.CreateVendorbtn).click();
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
    cy.get(this.weblocators.Established_Date).then(($input) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      ).set;
      nativeInputValueSetter.call($input[0], "2024-01-02");
      $input[0].dispatchEvent(new Event("input", { bubbles: true }));
    });
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

  nextbtn1() {
    cy.get(this.weblocators.Nextbtn1).click();
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
