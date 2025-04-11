///<reference types="cypress"/>

// import { registerPage } from "./Pages/register";
// import registerData from "../fixtures/register.json";
import { settingsPage } from "./Pages/settings";
import settingsData from "../fixtures/settings.json";
import { categoryPage } from "./Pages/categorysystem";
import categoryData from "../fixtures/categorysystem.json";
import { productPage } from "./Pages/productsystem";
import productData from "../fixtures/productsystem.json";
import { COAPage } from "./Pages/COA";
import COAData from "../fixtures/COA.json";
import { UOMPage } from "./Pages/UOM";
import UOMData from "../fixtures/UOM.json";
import { TCPage } from "./Pages/T&C";
import TCData from "../fixtures/T&C.json";
import { ShippingMethodPage } from "./Pages/shipping_method";
import ShippingData from "../fixtures/shippingmethod.json";
import { TypesPage } from "./Pages/types";
import TypeData from "../fixtures/types.json";
import { BudgetPeriodPage } from "./Pages/BudgetPeriod";
import BudgetPeriodData from "../fixtures/BudgetPeriod.json";
import { EvaluationCriteriaPage } from "./Pages/EvaluationCriteria";
import EvaluationCriteriaData from "../fixtures/EvaluationCriteria.json";
import { PurchasingGroupPage } from "./Pages/PurchasingGroup";
import PurchasingGroupData from "../fixtures/PurchasingGroup.json";
import { VendorEvaluationPage } from "./Pages/VendorEvaluation";
import VendorEvaluationData from "../fixtures/VendorEvaluation.json";
import { PRPage } from "./Pages/PR";
import PRData from "../fixtures/PR.json";
import { CataloguePage } from "./Pages/Catalogue";
import CatalogueData from "../fixtures/Catalogue.json";
import { SourcingPage } from "./Pages/Sourcing";
import SourcingData from "../fixtures/Sourcing.json";
import { RoleManagementPage } from "./Pages/Role_Management";
import RoleManagementData from "../fixtures/Role_Management.json";
import { UserManagementPage } from "./Pages/UserManagement";
import UserManagementData from "../fixtures/UserManagement.json";
import { VendorsPage } from "./Pages/VM-Vendors";
import VendorData from "../fixtures/VM-Vendors.json";
import { ContactPage } from "./Pages/Contact";
import ContactData from "../fixtures/Contact.json";
import { CommercialEvalPage } from "./Pages/CommercialEval";
import CommercialEvalData from "../fixtures/CommercialEval.json";
import { BankdetailsPage } from "./Pages/Bankdetails";
import BankdetailsData from "../fixtures/Bankdetails.json";
import { FinancialinformationPage } from "./Pages/Financialinformation";
import FinancialinformationData from "../fixtures/Financialinformation.json";
import { DocumentPage } from "./Pages/Document";
import DocumentData from "../fixtures/Document.json";
import { DashboardPage } from "./Pages/Dashboard";
// import DashboardData from "../fixtures/Dashboard.json";
import { LogoutPage } from "./Pages/Logout";

// const registerobj = new registerPage();
const settingsobj = new settingsPage();
const categoryobj = new categoryPage();
const productobj = new productPage();
const COAobj = new COAPage();
const UOMobj = new UOMPage();
const TCobj = new TCPage();
const shippingobj = new ShippingMethodPage();
const Typeobj = new TypesPage();
const BudgetPeriodobj = new BudgetPeriodPage();
const EvaluationCriteriaobj = new EvaluationCriteriaPage();
const PurchasingGroupobj = new PurchasingGroupPage();
const VendorEvaluationobj = new VendorEvaluationPage();
const PRobj = new PRPage();
const Catalogueobj = new CataloguePage();
const Sourcingobj = new SourcingPage();
const RoleManagementobj = new RoleManagementPage();
const UserManagementobj = new UserManagementPage();
const Vendorobj = new VendorsPage();
const Contactobj = new ContactPage();
const CommercialEvalobj = new CommercialEvalPage();
const Bankdetailsobj = new BankdetailsPage();
const Financialinformationobj = new FinancialinformationPage();
const Documentobj = new DocumentPage();
const Dashboardobj = new DashboardPage();
const Logoutobj = new LogoutPage();

describe(" Vendor Registration", () => {
  beforeEach(() => {
    // registerobj.openurl();
    // registerobj.clickRegisternowbtn();
    // registerobj.clickOnConstentcheckbox();
    // registerobj.clickOnConstentcheckbox2();
    // registerobj.clickOnAcceptbtn();

    settingsobj.openurl();
    settingsobj.enterusername(settingsData.username);
    settingsobj.enterpassword(settingsData.password);
    settingsobj.clickonSignin();
  });

  it("Registration by entering only required fields", () => {
    registerobj.ClickonRegistered_Country(registerData.country);
    registerobj.ClickonVendor_Type(registerData.vendorType);
    registerobj.ClickonCompany_Type(registerData.companyType);
    registerobj.ClickonAuthorized_Capital(registerData.capital);
    registerobj.ClickonEstablished_Date(registerData.Date);
    registerobj.ClickonUsername(registerData.exist_username);
    registerobj.ClickonPassword(registerData.v_password);
    registerobj.ClickonConfirm_Password(registerData.confirmpass);
    registerobj.ClickonCompany_Name(registerData.companyname1);
    registerobj.ClickonWebsite(registerData.website);
    registerobj.ClickonPhone_Number(registerData.phonenumber1);
    registerobj.ClickonMobile_Number(registerData.mobilenumber1);
    registerobj.ClickonAddress_Line1(registerData.addr1);
    registerobj.ClickonAddress_Line2(registerData.addr2);
    registerobj.ClickonState(registerData.state);
    registerobj.ClickonCity(registerData.city);
    registerobj.ClickonPostal_Code(registerData.postalcode);
  });

  it("setting-Profile- all fields empty", () => {
    settingsobj.clickonAdministrator();
    settingsobj.clickonSettings();
    settingsobj.clickonProfile();
    settingsobj.clickonEditbtn();
    settingsobj.enterfirstname();
    settingsobj.enterlastname();
    settingsobj.enterprofile();
    settingsobj.enterposition();
    // settingsobj.enteremail();
    settingsobj.enterphone();
    settingsobj.entermobile();
    settingsobj.enterdepartment();
    // settingsobj.entercountry(settingsData.country);
    // settingsobj.enterstate();
    // settingsobj.entercity();
    settingsobj.enterstreet();
    settingsobj.enterzipcode();

    settingsobj.clickonSubmitbtn();

    // filling all data
    settingsobj.clickonEditbtn();
    settingsobj.typefirstname(settingsData.firstname);
    settingsobj.typelastname(settingsData.lastname);
    settingsobj.typeprofile(settingsData.profile);
    settingsobj.typeposition(settingsData.Position);
    settingsobj.typephone(settingsData.phone);
    settingsobj.typemobile(settingsData.mobile);
    settingsobj.typedepartment(settingsData.department);
    settingsobj.typecountry(settingsData.country);
    settingsobj.typestate(settingsData.state);
    settingsobj.typecity(settingsData.city);
    settingsobj.typeStreet(settingsData.Street);
    settingsobj.typezipcode(settingsData.zipcode);
    settingsobj.clickonSubmitbtn();

    //Organization tab
    settingsobj.clickonOrganizationtab();
    settingsobj.clickoneditbtnorg();
    settingsobj.clearcompanyname();
    settingsobj.clearaddressline1();
    settingsobj.clearzipcode();
    settingsobj.clearcurrency();
    settingsobj.clearcurrencycode();
    // settingsobj.clearphonenumber();
    settingsobj.clearwebsite();
    settingsobj.cleartaxgstno();
    settingsobj.clearregisterationno();
    settingsobj.clearpanno();
    settingsobj.cleartanno();

    settingsobj.clickonsavechangesbtn();

    settingsobj.entercompanynameorg(settingsData.companyname_org);
    settingsobj.enteraddressline1org(settingsData.addressline1_org);
    settingsobj.entercityorg(settingsData.city_org);
    settingsobj.enterzipcodeorg(settingsData.zipcode_org);
    settingsobj.entercurrencyorg(settingsData.currency_org);
    settingsobj.entercurrencycodeorg(settingsData.currencycode_org);
    // settingsobj.enterphonenumberorg(settingsData.phonenumber_org);
    settingsobj.enterwebsiteorg(settingsData.website_org);
    settingsobj.entertax_gstnoorg(settingsData.tax_gstno_org);
    settingsobj.enterregisterationnoorg(settingsData.registerationno_org);
    settingsobj.enterpannoorg(settingsData.panno_org);
    settingsobj.enterTannoorg(settingsData.Tanno_org);

    settingsobj.clickonsavechangesbtn();

    // billing/delivery
    // settingsobj.clickoneditbtnbil();
    // settingsobj.clearaddressline1bil();
    // settingsobj.clearaddressline2bil();
    // settingsobj.clearcountrybil();
    // settingsobj.clearstatebil();
    // settingsobj.clearcitybil();
    // settingsobj.clearzipcodebil();
    // settingsobj.clearcontactpersonbil();
    // settingsobj.clearphonenobil();

    // settingsobj.clickonSubmitbtn();

    // settingsobj.enteraddressline1bil(settingsData.addressline1_bil);
    // settingsobj.enteraddressline2bil(settingsData.addressline2_bil);
    // settingsobj.entercountrybil(settingsData.country_bil);
    // settingsobj.enterstatebil(settingsData.state_bil);
    // settingsobj.entercitybil(settingsData.city_bil);
    // settingsobj.enterzipcodebil(settingsData.zipcode_bil);
    // settingsobj.entercontactpersonbil(settingsData.contactperson_bil);
    // // settingsobj.entercountrycodebil(settingsData.countrycode_bil);
    // settingsobj.enterphonenobil(settingsData.phonenumber_bil);

    // settingsobj.clickonsavechangesbtn();

    settingsobj.clickonaddmoreaddressbtn_bil();

    settingsobj.enterbillingcheckbox();
    settingsobj.enterdeliverycheckbox();
    settingsobj.enteraddressline1del(settingsData.addressline1_del);
    settingsobj.enteraddressline2del(settingsData.addressline2_del);
    settingsobj.entercountrydel(settingsData.country_del);
    settingsobj.enterstatedel(settingsData.state_del);
    settingsobj.entercitydel(settingsData.city_del);
    settingsobj.enterzipcodedel(settingsData.zipcode_del);
    settingsobj.entercontactpersondel(settingsData.contactperson_del);
    settingsobj.enterphonenodel(settingsData.phonenumber_del);

    settingsobj.clickonsavechangesbtn();
  });

  it("category system", () => {
    categoryobj.clickonDashboard();
    categoryobj.clickonAdministrator();
    categoryobj.clickonSystem();
    categoryobj.clickonCatalogueSetup();
    categoryobj.clickonCategorysystem();
    categoryobj.clickonToastmsg();
    categoryobj.clickonAddcategorybtn();
    categoryobj.enterCategoryname(categoryData.categoryname);
    categoryobj.enterCategorydescription(categoryData.categorydescription);
    // categoryobj.clickonDeleteicon();
    categoryobj.clickonRighttick();
    categoryobj.enterfilteronsearch(categoryData.searchfilterdata);
    categoryobj.clearsearchfilter();
    categoryobj.enterfilteronsearch(categoryData.inv_searchfilterdata);
    categoryobj.clearsearchfilter();
    categoryobj.clickonclosetoastmsg();
    categoryobj.clickonshowentries(categoryData.showentries);
    // categoryobj.clickonviewiconbtn();
    // categoryobj.clickonsub_categorybtn();
    // categoryobj.entersub_categoryname(categoryData.sub_categoryname);
    // categoryobj.entersub_categorydescription(
    //   categoryData.sub_categorydescription
    // );
    // categoryobj.clickonrighttickbtn1();
    // categoryobj.clickonediticonbtn1();
    categoryobj.clickondeleteiconbtn2();
    categoryobj.clickondeleteanywaybtn();
  });

  it("Product System", () => {
    productobj.clickonDashboard();
    productobj.clickonAdministrator();
    productobj.clickonSystem();
    productobj.clickonCatalogueSetup();
    productobj.clickonproductsystem();
    productobj.clickonToastmsg();
    productobj.clickonaddproductbtn();
    // productobj.clickoncancelbtn();
    productobj.clickonsubmitbtn();
    productobj.entercategoryname();
    productobj.entercategoryname1(productData.category);
    productobj.entersubcategoryname();
    productobj.entersubcategoryname1(productData.sub_category);
    productobj.enterproductname(productData.productname);
    productobj.enterbrandname(productData.brandname);
    // productobj.enterdescription(productData.description);
    // productobj.enteritemtype();
    productobj.enteritemtype1(productData.itemtype);
    productobj.enterUOM(productData.UOM);
    productobj.entersaleamount(productData.sale_amount);
    productobj.entershippingterms(productData.shipping_terms);
    productobj.enterpaymentterms(productData.payment_terms);
    productobj.entershippingmethods(productData.shipping_methods);
    productobj.entervendor();
    productobj.entervendorsearch();
    productobj.entervendoritemclick();
    // productobj.entersubmitbtn1();
  });

  it("COA", () => {
    COAobj.clickonDashboard();
    COAobj.clickonAdministrator();
    COAobj.clickonSystem();
    COAobj.clickonCOA();
    COAobj.clickonToastmsg();
    // COAobj.clickonCreateNewCoabtn();
    // COAobj.clickonCreatebtn();
    // COAobj.clickonTitleofCOA(COAData.TitleOfCOA);
    // COAobj.clickonDescription(COAData.Description);
    // COAobj.clickonCreatebtn();
    // COAobj.clickonToastmsg();
    // COAobj.clickonCreateNewCoabtn();
    // COAobj.clickonCancelbtn();
    COAobj.clickonSearchfilter(COAData.Searchfilter);
    COAobj.clearSearchfilter();
    COAobj.clickonShowEntries(COAData.Showentries);
    // COAobj.clickonDeleteiconbtn();
    // COAobj.clickonCancelbtn();
    // COAobj.clickonDeleteiconbtn();
    // COAobj.clickonDeletebtn();
    COAobj.clickonEditicon();
    // COAobj.clickonCancelbtn();
    COAobj.clickonPopCancelbtn();
  });

  it("UOM Page", () => {
    UOMobj.clickonDashboard();
    UOMobj.clickonAdministrator();
    UOMobj.clickonSystem();
    UOMobj.clickonUOM();
    UOMobj.clickonToastmsg();
    // UOMobj.clickonCreatenewUombtn();
    // UOMobj.clickonPopupCreatebtn();
    // UOMobj.Type();
    // UOMobj.Type_search(UOMData.Type);
    // UOMobj.TitleofUOM(UOMData.TitleofUOM);
    // UOMobj.DescriptionofUOM(UOMData.Description);
    // UOMobj.PopCancelbtn();
    // UOMobj.clickonCreatenewUombtn();
    // UOMobj.clickonPopupCreatebtn();
    // UOMobj.Type();
    // UOMobj.Type_search(UOMData.Type);
    // UOMobj.TitleofUOM(UOMData.TitleofUOM);
    // UOMobj.DescriptionofUOM(UOMData.Description);
    // UOMobj.Createbtn();
    // UOMobj.Searchfilter(UOMData.Searchfilter);
    UOMobj.Showentries(UOMData.Showentries);
    UOMobj.TableData();
  });

  it("Terms and Conditions Page", () => {
    TCobj.clickonDashboard();
    TCobj.clickonAdministrator();
    TCobj.clickonSystem();
    TCobj.clickonTC();
    TCobj.clickonToastmsg();
    // TCobj.CreatenewTCbtn();
    // TCobj.Type(TCData.Type);
    // TCobj.TitleofTC(TCData.TitleofTC);
    // TCobj.DescriptionTC(TCData.DescriptionTC);
    // TCobj.TermsandConditionTC(TCData.Text);
    // TCobj.Cancelbtn();
    // TCobj.Searchfilter(TCData.Searchfilter);
    TCobj.ShowEntries(TCData.Showentry);
    TCobj.TableData();
  });

  it("Shipping Method", () => {
    shippingobj.clickonDashboard();
    shippingobj.clickonAdministrator();
    shippingobj.clickonSystem();
    shippingobj.clickonShippingMethod();
    shippingobj.clickonToastmsg();
    // shippingobj.CreatenewShippMethbtn();
    // shippingobj.Savebtn();
    // shippingobj.Type(ShippingData.Type);
    // shippingobj.TitleofTC(ShippingData.TitleofShippMethod);
    // shippingobj.DescriptionSM(ShippingData.Description_ShippMethod);
    // shippingobj.Savebtn();
    // shippingobj.Searchfilter(ShippingData.Searchfilter);
    shippingobj.ShowEntries(ShippingData.Showentry);
    shippingobj.TableData();
    // shippingobj.Deleteiconbtn();
    // shippingobj.Confirmdeleteiconbtn();
    shippingobj.Editiconbtn();
    shippingobj.Edit_Type(ShippingData.Edittype);
    shippingobj.Savebtn();
  });

  it("Types", () => {
    Typeobj.clickonDashboard();
    Typeobj.clickonAdministrator();
    Typeobj.clickonSystem();
    Typeobj.clickonTypes();
    Typeobj.clickonToastmsg();
    // Typeobj.clickonCreatenewTypesbtn();
    // Typeobj.Createbtn();
    // Typeobj.TitleofType(TypeData.TitleofType);
    // Typeobj.DescriptionofTypes(TypeData.DescriptionofTypes);
    // Typeobj.Relatedto(TypeData.Relatedto);
    // Typeobj.Createbtn();
    // Typeobj.Searchfilter(TypeData.Searchfilter);
    Typeobj.Showentries(TypeData.Showentries);
    // Typeobj.TableData();
    // Typeobj.Deleteiconbtn();
    // Typeobj.Confirmdeleteiconbtn();
    Typeobj.Editiconbtn();
    Typeobj.Cancelbtn();
  });

  it("Budget Period Page", () => {
    BudgetPeriodobj.clickonDashboard();
    BudgetPeriodobj.clickonAdministrator();
    BudgetPeriodobj.clickonSystem();
    BudgetPeriodobj.clickonBudgetPeriod();
    BudgetPeriodobj.clickonToastmsg();
    // BudgetPeriodobj.clickonCreatenewBudPeriodbtn();
    // BudgetPeriodobj.Createbtn();
    // BudgetPeriodobj.Type(BudgetPeriodData.Type);
    // BudgetPeriodobj.TitleofBudPeriod(BudgetPeriodData.TitleofBudgetPeriod);
    // BudgetPeriodobj.Description(BudgetPeriodData.Description);
    // BudgetPeriodobj.Createbtn();
    // BudgetPeriodobj.Cancelbtn();
    // BudgetPeriodobj.Searchfilter(BudgetPeriodData.Searchfilter);
    BudgetPeriodobj.Showentries(BudgetPeriodData.Showentries);
    // BudgetPeriodobj.TableData();
    BudgetPeriodobj.Editiconbtn();
    BudgetPeriodobj.Cancelbtn();
    BudgetPeriodobj.Deleteiconbtn();
    BudgetPeriodobj.ConfirmCancelbtn();
    BudgetPeriodobj.Deleteiconbtn();
    BudgetPeriodobj.Confirmdeletebtn(); // Major Bug - record not deleting
  });

  it("Evaluation Criteria Page", () => {
    EvaluationCriteriaobj.clickonDashboard();
    EvaluationCriteriaobj.clickonAdministrator();
    EvaluationCriteriaobj.clickonSystem();
    EvaluationCriteriaobj.clickonEvaluationCriteria();
    EvaluationCriteriaobj.clickonToastmsg();
    // EvaluationCriteriaobj.clickonCreateFormbtn();
    // EvaluationCriteriaobj.Savebtn();
    // EvaluationCriteriaobj.FormName(EvaluationCriteriaData.FormName);
    // EvaluationCriteriaobj.Assignto(EvaluationCriteriaData.AssignTo);
    // EvaluationCriteriaobj.Description(EvaluationCriteriaData.Description); // Description field - text area height is very less
    // EvaluationCriteriaobj.Scale(EvaluationCriteriaData.Scale);
    // EvaluationCriteriaobj.Poor(EvaluationCriteriaData.Poor);
    // EvaluationCriteriaobj.Fair(EvaluationCriteriaData.Fair);
    // EvaluationCriteriaobj.Satisfactory(EvaluationCriteriaData.Satisfactory);
    // EvaluationCriteriaobj.Good(EvaluationCriteriaData.Good);
    // EvaluationCriteriaobj.Excellent(EvaluationCriteriaData.Excellent);
    // EvaluationCriteriaobj.Criteria_Name(EvaluationCriteriaData.CriteriaName);
    // EvaluationCriteriaobj.Criteria_Description(
    //   EvaluationCriteriaData.CriteriaDescription
    // );
    // EvaluationCriteriaobj.Weight(EvaluationCriteriaData.Weight);

    // EvaluationCriteriaobj.Plusbtn();
    // EvaluationCriteriaobj.Criteria_Name1(EvaluationCriteriaData.CriteriaName1);
    // EvaluationCriteriaobj.Criteria_Description1(
    //   EvaluationCriteriaData.CriteriaDescription1
    // );
    // EvaluationCriteriaobj.Weight1(EvaluationCriteriaData.Weight1);
    // EvaluationCriteriaobj.Criteria_deletebtn();
    // EvaluationCriteriaobj.Weight(EvaluationCriteriaData.Weight);
    // EvaluationCriteriaobj.Savebtn();

    // EvaluationCriteriaobj.Searchfilter(EvaluationCriteriaData.Searchfilter);

    EvaluationCriteriaobj.Showentries(EvaluationCriteriaData.Showentries);
    // EvaluationCriteriaobj.TableData();
    EvaluationCriteriaobj.Viewiconbtn();
    cy.wait(3000);
    cy.go("back");
    EvaluationCriteriaobj.Editiconbtn();
    EvaluationCriteriaobj.Cancelbtn();
    EvaluationCriteriaobj.Deleteiconbtn();
  });

  it("Purchasing Group Page", () => {
    PurchasingGroupobj.clickonDashboard();
    PurchasingGroupobj.clickonPurchasingGroup();
    PurchasingGroupobj.clickonToastmsg();
    // PurchasingGroupobj.CreatenewPurchasingGroupbtn();
    // PurchasingGroupobj.clickonSubmitbtn();
    // PurchasingGroupobj.EnterTitle(PurchasingGroupData.EnterTitle);
    // PurchasingGroupobj.Meaning(PurchasingGroupData.Meaning);
    // PurchasingGroupobj.Category(PurchasingGroupData.Category);
    // PurchasingGroupobj.clickonSubmitbtn();
    // PurchasingGroupobj.Continuebtn();
    // PurchasingGroupobj.Searchfilter(PurchasingGroupData.Searchfilter);
    PurchasingGroupobj.Showentries(PurchasingGroupData.Showentries);
    // PurchasingGroupobj.TableData();
    // PurchasingGroupobj.Releasebtn();
    // PurchasingGroupobj.ReleaseCancelbtn();
    // cy.wait(3000);
    // PurchasingGroupobj.Releasebtn();
    // PurchasingGroupobj.ConfirmReleasebtn();
    PurchasingGroupobj.Editiconbtn();
    PurchasingGroupobj.EditCancelbtn();
    PurchasingGroupobj.Deleteiconbtn();
    PurchasingGroupobj.Deleicon_Cancelbtn();
    cy.wait(5000);
    PurchasingGroupobj.Deleteiconbtn();
    PurchasingGroupobj.Confirmdeletebtn();
  });

  it("Vendor Evaluation - Assignments Page", () => {
    VendorEvaluationobj.clickonDashboard();
    VendorEvaluationobj.clickonVendorEvaluation();
    VendorEvaluationobj.ClickonAssignments();
    VendorEvaluationobj.clickonToastmsg();
    // VendorEvaluationobj.clickonCreatenewAssignmentsbtn();
    // VendorEvaluationobj.Createbtn();
    // VendorEvaluationobj.Assignment_Name(VendorEvaluationData.AssignmentName);
    // VendorEvaluationobj.PO(VendorEvaluationData.PO);
    // VendorEvaluationobj.Vendor(VendorEvaluationData.Vendor);
    // VendorEvaluationobj.Priority(VendorEvaluationData.Priority);
    // VendorEvaluationobj.Status(VendorEvaluationData.Status);
    // VendorEvaluationobj.DueDate();
    // VendorEvaluationobj.Createbtn();
    VendorEvaluationobj.Searchfilter(VendorEvaluationData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    VendorEvaluationobj.Showentries(VendorEvaluationData.Showentries);
    // VendorEvaluationobj.TableData();
    // VendorEvaluationobj.Checkbox();
    // VendorEvaluationobj.DeleteSelected();
    VendorEvaluationobj.Editiconbtn();
    cy.wait(3000);
    VendorEvaluationobj.EditCancelbtn();
    VendorEvaluationobj.Deleteiconbtn();
    cy.wait(3000);
    VendorEvaluationobj.Cancel_deletebtn();
    VendorEvaluationobj.Deleteiconbtn();
    VendorEvaluationobj.Confirmdeletebtn();
  });

  it("Purchase Requisition Page - PR", () => {
    PRobj.clickonDashboard();
    PRobj.clickonJobManagement();
    PRobj.ClickonPR();
    PRobj.clickonToastmsg();
    // PRobj.clickonCreatenewPRbtn();
    // PRobj.Createbtn();
    // PRobj.project(PRData.project);
    // PRobj.COA(PRData.COA);
    // PRobj.BudgetPeriod(PRData.BudgetPeriod);
    // PRobj.BudgetLine(PRData.BudgetLine);
    // PRobj.BillingAddress(PRData.BillingAddress);
    // PRobj.DeliveryAddress(PRData.DeliveryAddress);
    // PRobj.Item(PRData.Item);
    // PRobj.Description(PRData.Description);
    // PRobj.Quantity(PRData.Quantity);
    // PRobj.LeadTime(PRData.LeadTime);
    // PRobj.NeedBy(PRData.NeedBy);
    // PRobj.Supplier();
    // PRobj.Select_Supplier();
    // PRobj.Select_Supplierbtn();
    // PRobj.ShippingMethod(PRData.ShippingMethod);
    // PRobj.AddMorebtn();
    // PRobj.Checkboxbtn();
    // PRobj.Delete_selected();
    // PRobj.TCcheckbox();
    // PRobj.Shipping(PRData.Shipping);
    // PRobj.Createbtn();
    // PRobj.Newtab();
    // PRobj.Quotedtab();
    // PRobj.Awardedtab();
    // PRobj.Alltab();
    PRobj.Searchfilter(PRData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    PRobj.Showentries(PRData.Showentries);
    // PRobj.TableData();
    PRobj.TableData();
    PRobj.VendorInvited();
    // PRobj.VendorInvitedSearchfilter(PRData.VendorInvitedSearchfilter);
    PRobj.VendorInvitedShowentries(PRData.VendorInvitedShowentries);
    // PRobj.VendorInvitedTableData();
    // PRobj.VendorInvitedResendbtn();
    PRobj.VendorResponsetab();
    PRobj.VendorResponseSearchfilter(PRData.VendorResponseSearchfilter);
    PRobj.Export();
  });

  it("Catalogue Page", () => {
    Catalogueobj.clickonDashboard();
    Catalogueobj.clickonCatalogue();
    Catalogueobj.ClickonProduct();
    Catalogueobj.clickonToastmsg();
    Catalogueobj.Location(CatalogueData.Location);
    Catalogueobj.Seller(CatalogueData.Seller);
    Catalogueobj.Category(CatalogueData.Category);
    Catalogueobj.Rating();
    Catalogueobj.MinPrice(CatalogueData.MinPrice);
    Catalogueobj.MaxPrice(CatalogueData.MaxPrice);
    cy.wait(3000);
    cy.reload();
    Catalogueobj.Searchfilter(CatalogueData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    Catalogueobj.Slidechange();
    Catalogueobj.TableData();
    Catalogueobj.CreatePRbtn();
  });

  it("Sourcing Page", () => {
    Sourcingobj.clickonDashboard();
    Sourcingobj.clickonSourcing();
    Sourcingobj.ClickonSourcingevent();
    Sourcingobj.clickonToastmsg();
    // Sourcingobj.ClickonCreateEventbtn();
    // Sourcingobj.GenerateRFQbtn();
    // Sourcingobj.Project_RFQ(SourcingData.Project_RFQ);
    // Sourcingobj.GenerateRFQbtn1();
    // Sourcingobj.TermsandConditions();
    // Sourcingobj.TCShipping(SourcingData.TCShipping);
    // Sourcingobj.Submitbtn();
    // Sourcingobj.Editbtn();
    // Sourcingobj.PurchaseinfoSearchfilter(ShippingData.PurchaseinfoSearchfilter);
    // cy.wait(3000);
    // cy.reload();
    // Sourcingobj.PurinfoShowentries(SourcingData.PurinfoShowentries);
    // Sourcingobj.TableData();
    // Sourcingobj.TCShipping(SourcingData.TCShipping);
    // Sourcingobj.PurinfoCheckbox();
    // Sourcingobj.Savebtn();
    // Sourcingobj.SendRFQbtn();
    Sourcingobj.Searchfilter(SourcingData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    Sourcingobj.Filterbtn();
    Sourcingobj.Date();
    // Sourcingobj.Date1(SourcingData.Date1);
    Sourcingobj.Dateicon();
    Sourcingobj.Datebackarrow();
    Sourcingobj.March5();
    Sourcingobj.Apr20();
    Sourcingobj.OKbtn();
    cy.wait(3000);
    cy.reload();
    Sourcingobj.Filterbtn();
    Sourcingobj.Status();
    Sourcingobj.Status1(SourcingData.Status1);
    cy.wait(3000);
    cy.reload();
    Sourcingobj.Filterbtn();
    Sourcingobj.Createdby();
    Sourcingobj.Createdby1(SourcingData.Createdby1);
    cy.wait(3000);
    cy.reload();
    // Sourcingobj.Sortby();
    // Sourcingobj.SelectSortby(SourcingData.SelectSortby);
    // Sourcingobj.Selectorder();
    Sourcingobj.Showentries(SourcingData.Showentries);
    Sourcingobj.TableData1();
  });

  it("Role Management Page", () => {
    RoleManagementobj.clickonDashboard();
    RoleManagementobj.clickonAdministrator();
    RoleManagementobj.ClickonUserAuthentication();
    RoleManagementobj.clickonToastmsg();
    // RoleManagementobj.ClickonAddRolebtn();
    // RoleManagementobj.RoleName(RoleManagementData.RoleName);
    // RoleManagementobj.Description(RoleManagementData.Description);
    // RoleManagementobj.Togglebtn();
    // RoleManagementobj.Crossiconbtn();
    // RoleManagementobj.Submitbtn();
    RoleManagementobj.Viewiconbtn();
    RoleManagementobj.Editiconbtn();
    RoleManagementobj.Cancelbtn();
    RoleManagementobj.Editbtn();
    cy.wait(3000);
    RoleManagementobj.Cancelbtn({ multiple: true });
    // RoleManagementobj.Deleteiconbtn(); // bug
  });

  it("User Management Page", () => {
    UserManagementobj.clickonDashboard();
    UserManagementobj.clickonAdministrator();
    UserManagementobj.ClickonUserAuthentication();
    UserManagementobj.ClickonUserManagement();
    // UserManagementobj.AddnewUserbtn();
    // UserManagementobj.Submitbtn();
    // UserManagementobj.Firstname(UserManagementData.Firstname);
    // UserManagementobj.Lastname(UserManagementData.Lastname);
    // UserManagementobj.Email(UserManagementData.Email);
    // UserManagementobj.Phonenumber(UserManagementData.Phonenumber);
    // UserManagementobj.Password(UserManagementData.Password);
    // UserManagementobj.Showhidebtn();
    // UserManagementobj.Usertype(UserManagementData.Usertype);
    // UserManagementobj.Role(UserManagementData.Role);
    // UserManagementobj.Submitbtn();
    // UserManagementobj.PopupCreatebtn();
    // UserManagementobj.Continuebtn();
    // UserManagementobj.Viewiconbtn();
    // cy.wait(3000);
    // UserManagementobj.View_Cancelbtn();
    // UserManagementobj.Editiconbtn();
    // cy.wait(3000);
    // UserManagementobj.View_Cancelbtn();
    // UserManagementobj.Deleteiconbtn();
    // UserManagementobj.Delete_Cancelbtn();
    // cy.wait(3000);
    // UserManagementobj.Deleteiconbtn();
    // UserManagementobj.Confirmdeletebtn();
    // UserManagementobj.Continuebtn();
    UserManagementobj.Searchfilter(UserManagementData.Searchfilter);
    cy.reload();
    UserManagementobj.TableData();
  });

  it("Vendor Page", () => {
    Vendorobj.clickonDashboard();
    Vendorobj.clickonVendorManagement();
    Vendorobj.ClickonVendors();
    Vendorobj.clickonToastmsg();
    // Vendorobj.Newtab();
    // Vendorobj.Approvedtab();
    // Vendorobj.Rejectedtab();
    // Vendorobj.Incompletetab();
    // Vendorobj.Alltab();
    // Vendorobj.Searchfilter(VendorData.Searchfilter);
    // cy.wait(3000);
    // cy.reload();
    // Vendorobj.Showentries(VendorData.Showentries);
    // Vendorobj.TableData();
    // Vendorobj.Checkbox();
    // Vendorobj.Deletebtn();
    Vendorobj.CreateVendorbtn();
    Vendorobj.ClickonRegistered_Country(VendorData.country);
    Vendorobj.ClickonVendor_Type(VendorData.vendorType);
    Vendorobj.ClickonCompany_Type(VendorData.companyType);
    Vendorobj.ClickonAuthorized_Capital(VendorData.capital);
    Vendorobj.ClickonEstablished_Date(VendorData.Date);
    Vendorobj.ClickonUsername(VendorData.exist_username);
    Vendorobj.ClickonPassword(VendorData.v_password);
    Vendorobj.ClickonConfirm_Password(VendorData.confirmpass);
    Vendorobj.ClickonCompany_Name(VendorData.companyname1);
    Vendorobj.ClickonWebsite(VendorData.website);
    Vendorobj.ClickonPhone_Number(VendorData.phonenumber1);
    Vendorobj.ClickonMobile_Number(VendorData.mobilenumber1);
    Vendorobj.ClickonAddress_Line1(VendorData.addr1);
    Vendorobj.ClickonAddress_Line2(VendorData.addr2);
    Vendorobj.ClickonState(VendorData.state);
    Vendorobj.ClickonCity(VendorData.city);
    Vendorobj.ClickonPostal_Code(VendorData.postalcode);
    Vendorobj.nextbtn1();

    Vendorobj.firstname(VendorData.firstname);
    Vendorobj.lastname(VendorData.lastname);
    Vendorobj.Email(VendorData.email);
    Vendorobj.phoneno(VendorData.phoneno);
    Vendorobj.department(VendorData.department);
    Vendorobj.position(VendorData.position);
    Vendorobj.whatsappno(VendorData.whatsappno);
    Vendorobj.alternateno(VendorData.alternateno);
    Vendorobj.nextbtn2();

    Vendorobj.TypeofBusiness(VendorData.TypeofBusiness);
    Vendorobj.Experience(VendorData.Experience);
    Vendorobj.Workingday(VendorData.Workingday);
    Vendorobj.Workingtime(VendorData.Workingtime);
    Vendorobj.BiddingCategories(VendorData.Biddingcategories);
    Vendorobj.Nameoftop3cust(VendorData.Nameoftop3cust);
    Vendorobj.Radiobtn();
    Vendorobj.Nextbtn3();

    Vendorobj.Bankname(VendorData.BankName);
    Vendorobj.BankAccNo(VendorData.BankAccountNo);
    Vendorobj.AccountType(VendorData.AccountType);
    Vendorobj.BranchLocation(VendorData.BranchLocation);
    Vendorobj.IFSCswiftcode(VendorData.IFSCSwiftcode);
    Vendorobj.Nextbtn4();

    Vendorobj.AnnualRevenue(VendorData.AnnualRevenue);
    Vendorobj.Nameofparent(VendorData.Nameofparent);
    Vendorobj.Paymentterm(VendorData.Paymentterm);
    Vendorobj.Nextbtn5();

    Vendorobj.Maximum(VendorData.Maximum);
    Vendorobj.Minimum(VendorData.Minimum);
    Vendorobj.Companylimit(VendorData.Doescompanylimit);
    Vendorobj.DeliveryTracking(VendorData.Doescompanydelivered);
    Vendorobj.ProjectReference(VendorData.Projectreference);
    Vendorobj.Nextbtn6();

    Vendorobj.SupplierQuality(VendorData.SupplierQuality);
    Vendorobj.Nextbtn7();
  });

  it("Contact Page", () => {
    Contactobj.clickonDashboard();
    Contactobj.clickonVendorManagement();
    Contactobj.Contact();
    Contactobj.Searchfilter(ContactData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    Contactobj.Showentries(ContactData.Showentries);
    Contactobj.TableData();
  });

  it("Commercial Evaluation Page", () => {
    CommercialEvalobj.clickonDashboard();
    CommercialEvalobj.clickonVendorManagement();
    CommercialEvalobj.CommercialEval();
    CommercialEvalobj.Searchfilter(CommercialEvalData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    CommercialEvalobj.Showentries(CommercialEvalData.Showentries);
    CommercialEvalobj.TableData();
  });

  it("Bank Details Page", () => {
    Bankdetailsobj.clickonDashboard();
    Bankdetailsobj.clickonVendorManagement();
    Bankdetailsobj.Bankdetails();
    Bankdetailsobj.Searchfilter(BankdetailsData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    Bankdetailsobj.Showentries(BankdetailsData.Showentries);
    Bankdetailsobj.TableData();
  });

  it("Financial Information Page", () => {
    Financialinformationobj.clickonDashboard();
    Financialinformationobj.clickonVendorManagement();
    Financialinformationobj.Financialinformation();
    Financialinformationobj.clickonToastmsg();
    Financialinformationobj.Searchfilter(FinancialinformationData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    Financialinformationobj.Showentries(FinancialinformationData.Showentries);
    Financialinformationobj.TableData();
  });

  it("Document Page", () => {
    Documentobj.clickonDashboard();
    Documentobj.clickonVendorManagement();
    Documentobj.Document();
    Documentobj.clickonToastmsg();
    Documentobj.Searchfilter(DocumentData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    Documentobj.Showentries(DocumentData.Showentries);
    Documentobj.TableData();
  });

  it("Dashboard Page", () => {
    Dashboardobj.clickonDashboard();
    Dashboardobj.clickonToastmsg();
    Dashboardobj.Spendbypurgricon();
    Dashboardobj.March2025();
    Dashboardobj.Oct2023();
    Dashboardobj.Oct20();
    Dashboardobj.Rmarch2025();
    Dashboardobj.RCmarch2025();
    Dashboardobj.RCMarch25();
    Dashboardobj.OKbtn();
  });

  it.only("Logout Page", () => {
    Logoutobj.clickonDashboard();
    Logoutobj.clickonToastmsg();
    Logoutobj.Logout();
    cy.wait(3000);
    Logoutobj.Cancelbtn();
    Logoutobj.Logout();
    Logoutobj.Logoutbtn();
  });
});
