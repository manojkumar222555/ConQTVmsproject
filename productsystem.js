export class productPage {
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
    productsystem: "div:nth-child(12) span:nth-child(1)",
    addproductbtn: ".d-flex.align-items-center.create-btn",
    cancelbtn: "button[class='discard-btn']",
    submitbtn: "button[type='submit']",
    category_name:
      "div[class='select-field-div'] div div[class='custom-select-field css-b62m3t-container'] div[class='custom-select-field-prefix__indicator custom-select-field-prefix__dropdown-indicator css-1xc3v61-indicatorContainer'] svg path",
    category_name1:
      "div[class='select-field-div'] div div[class='custom-select-field-prefix__input-container css-19bb58m']",
    subcategory_name:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > svg:nth-child(1)",
    subcategory_name1:
      "div[class='select-field-div'] div div[class='custom-select-field-prefix__value-container css-hlgwow'] div[class='custom-select-field-prefix__input-container css-19bb58m']",
    productname: "input[placeholder='Enter'][name='productName']",
    brandname: "input[placeholder='Enter'][name='brandName']",
    description: ".ck-placeholder",
    item_type:
      "div[class='d-flex my-2 align-items-baseline'] div[class='d-flex flex-column select-product-child-select'] div[class='select-field-system-div'] div div[class='custom-select-field-prefix__control css-1ol9fc2-control'] div[class='custom-select-field-prefix__indicator custom-select-field-prefix__dropdown-indicator css-1xc3v61-indicatorContainer'] svg",
    item_type1:
      "div[class='d-flex my-2 align-items-baseline'] div[class='d-flex flex-column select-product-child-select'] div[class='select-field-system-div'] div div[class='custom-select-field-prefix__control css-1ol9fc2-control'] div[class='custom-select-field-prefix__input-container css-19bb58m']",
    UOM: "div[class='d-flex my-2 align-items-baseline'] div[class='d-flex flex-column select-product-child-select'] div[class='select-field-system-div'] div div[class='custom-select-field-prefix__control css-1mx2ytj-control'] div[class='custom-select-field-prefix__input-container css-19bb58m']",
    sale_amount: "input[placeholder='1,000.00']",
    shipping_terms:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)",
    payment_terms:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)",
    shipping_methods:
      "div[class='d-flex'] div[class='d-flex flex-column select-product-child-select'] div[class='select-field-system-div'] div div[class='custom-select-field-prefix__control css-1mx2ytj-control'] div[class='custom-select-field-prefix__input-container css-19bb58m']",
    vendor: ".dropdown-heading-value",
    vendor_search: "input[placeholder='Search']",
    vendoritemclick:
      ".multi-select-option-label.d-flex.align-items-center.quoatation-check-box-div",
    submitbtn1: "button[type='submit']",
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

  clickonproductsystem() {
    cy.get(this.weblocators.productsystem).click();
  }

  clickonaddproductbtn() {
    cy.get(this.weblocators.addproductbtn).click();
  }

  clickoncancelbtn() {
    cy.get(this.weblocators.cancelbtn).click();
  }

  clickonsubmitbtn() {
    cy.get(this.weblocators.submitbtn).click();
  }

  entercategoryname() {
    cy.get(this.weblocators.category_name).click();
  }

  entercategoryname1(category) {
    cy.get(this.weblocators.category_name1).type(`category{enter}`);
  }

  entersubcategoryname() {
    cy.get(this.weblocators.subcategory_name).click();
  }

  entersubcategoryname1() {
    cy.get(this.weblocators.subcategory_name1).type(`{downarrow}{enter}`);
  }

  enterproductname(productname) {
    cy.get(this.weblocators.productname).type(productname);
  }

  enterbrandname(brandname) {
    cy.get(this.weblocators.brandname).type(brandname);
  }

  enterdescription(description) {
    cy.get(this.weblocators.description).type(description);
  }

  enteritemtype() {
    cy.get(this.weblocators.item_type).click();
  }

  enteritemtype1(itemtype) {
    cy.get(this.weblocators.item_type1).type(`${itemtype}{enter}`);
  }

  enterUOM(UOM) {
    cy.get(this.weblocators.UOM).type(`${UOM}{enter}`);
  }

  entersaleamount(sale_amount) {
    cy.get(this.weblocators.sale_amount).type(sale_amount);
  }

  entershippingterms(shipping_terms) {
    cy.get(this.weblocators.shipping_terms).type(`${shipping_terms}{enter}`);
  }

  enterpaymentterms(payment_terms) {
    cy.get(this.weblocators.payment_terms).type(`${payment_terms}{enter}`);
  }

  entershippingmethods(shipping_methods) {
    cy.get(this.weblocators.shipping_methods).type(
      `${shipping_methods}{enter}`
    );
  }

  entervendor() {
    cy.get(this.weblocators.vendor).click();
  }

  entervendorsearch() {
    cy.get(this.weblocators.vendor_search).type("Everest Polymers");
  }

  entervendoritemclick() {
    cy.get(this.weblocators.vendoritemclick).check();
  }

  // entersubmitbtn1() {
  //   cy.get(this.weblocators.submitbtn1).click();
  // }
}
