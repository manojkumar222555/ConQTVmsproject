///<reference types="cypress"/>

import { JobRequestPage } from "./Pages2/JobRequest";
import JobRequestData from "../fixtures2/JobRequest.json";
import { MyQuotationPage } from "./Pages2/MyQuotation";
import MyQuotationData from "../fixtures2/MyQuotation.json";
import { RoleManagementPage } from "./Pages2/RoleManagement";
import RoleManagementData from "../fixtures2/RoleManagement.json";
import { UserManagementPage } from "./Pages2/UserManagement";
import UserManagementData from "../fixtures2/UserManagement.json";
import { TermsConditionPage } from "./Pages2/TandC";
import TermsConditionData from "../fixtures2/TandC.json";
import { TypesPage } from "./Pages2/Types";
import TypesData from "../fixtures2/Types.json";
import { SettingsPage } from "./Pages2/Settings";
import SettingsData from "../fixtures2/Settings.json";

const JobRequestobj = new JobRequestPage();
const MyQuotationobj = new MyQuotationPage();
const RoleManagementobj = new RoleManagementPage();
const UserManagementobj = new UserManagementPage();
const TermsConditionobj = new TermsConditionPage();
const Typesobj = new TypesPage();
const Settingsobj = new SettingsPage();

describe(" Vendor Registration", () => {
  beforeEach(() => {
    JobRequestobj.openurl();
    JobRequestobj.enterusername(JobRequestData.username);
    JobRequestobj.enterpassword(JobRequestData.password);
    JobRequestobj.clickonSignin();
  });

  it("Job Request Page", () => {
    JobRequestobj.clickonDashboard();
    JobRequestobj.clickonJobManagement();
    JobRequestobj.JobRequest();
    JobRequestobj.clickonToastmsg();
    // JobRequestobj.NewData();
    // JobRequestobj.Qty(JobRequestData.packSizeQuantity);
    // JobRequestobj.UOM();
    JobRequestobj.Newtab();
    JobRequestobj.Quotedtab();
    JobRequestobj.Awardedtab();
    JobRequestobj.Closedtab();
    JobRequestobj.Alltab();
    JobRequestobj.Searchfilter(JobRequestData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    JobRequestobj.Showentries(JobRequestData.Showentries);
    JobRequestobj.TableData();
  });

  it("My Quotation Page", () => {
    MyQuotationobj.clickonDashboard();
    MyQuotationobj.clickonJobManagement();
    MyQuotationobj.MyQuotation();
    MyQuotationobj.clickonToastmsg();
    MyQuotationobj.InReviewtab();
    MyQuotationobj.Awardedtab();
    MyQuotationobj.Alltab();
    MyQuotationobj.Searchfilter(MyQuotationData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    MyQuotationobj.Showentries(MyQuotationData.Showentries);
    MyQuotationobj.TableData();
  });

  it("Role Management Page", () => {
    RoleManagementobj.clickonDashboard();
    RoleManagementobj.clickonAdministrator();
    RoleManagementobj.UserAuthentication();
    RoleManagementobj.clickonToastmsg();
    RoleManagementobj.AddRolebtn();
    RoleManagementobj.Submitbtn();
    RoleManagementobj.RoleName(RoleManagementData.RoleName);
    RoleManagementobj.Description(RoleManagementData.Description);
    RoleManagementobj.Togglebtn();
    RoleManagementobj.Submitbtn();
    RoleManagementobj.Viewiconbtn();
    RoleManagementobj.Editbtn();
    RoleManagementobj.Cancelbtn();
    RoleManagementobj.Editiconbtn();
    cy.wait(3000);
    RoleManagementobj.Cancelbtn();
    RoleManagementobj.Deleteiconbtn();
  });

  it("User Management Page", () => {
    UserManagementobj.clickonDashboard();
    UserManagementobj.clickonAdministrator();
    UserManagementobj.UserAuthentication();
    UserManagementobj.clickonToastmsg();
    UserManagementobj.UserManagementtab();
    // UserManagementobj.Addnewuserbtn();
    // UserManagementobj.Submitbtn();
    // UserManagementobj.Firstname(UserManagementData.Firstname);
    // UserManagementobj.Lastname(UserManagementData.Lastname);
    // UserManagementobj.Email(UserManagementData.Email);
    // UserManagementobj.Phonenumber(UserManagementData.Phonenumber);
    // UserManagementobj.Password(UserManagementData.Password);
    // UserManagementobj.Usertype(UserManagementData.Usertype);
    // UserManagementobj.Role(UserManagementData.Role);
    // cy.wait(2000);
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
    // cy.wait(3000);
    // UserManagementobj.Delete_Cancelbtn();
    // UserManagementobj.Deleteiconbtn();
    // cy.wait(3000);
    // UserManagementobj.Confirmdeletebtn();
    // UserManagementobj.Continuebtn();

    UserManagementobj.Searchfilter(UserManagementData.Searchfilter);
    // UserManagementobj.TableData();
  });

  it("Terms and Conditions Page", () => {
    TermsConditionobj.clickonDashboard();
    TermsConditionobj.clickonAdministrator();
    TermsConditionobj.System();
    TermsConditionobj.Termsandcondition();
    TermsConditionobj.clickonToastmsg();
    // TermsConditionobj.CreatenewTCbtn();
    // TermsConditionobj.Createbtn();
    // TermsConditionobj.Type(TermsConditionData.Type);
    // TermsConditionobj.TitleofTC(TermsConditionData.TitleofTC);
    // TermsConditionobj.DescriptionTC(TermsConditionData.DescriptionTC);
    // TermsConditionobj.TermsandConditionTC(TermsConditionData.Text);
    // TermsConditionobj.Cancelbtn();
    TermsConditionobj.Searchfilter(TermsConditionData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    TermsConditionobj.Showentries(TermsConditionData.Showentries);
    TermsConditionobj.TableData();
  });

  it("Types Page", () => {
    Typesobj.clickonDashboard();
    Typesobj.clickonAdministrator();
    Typesobj.System();
    Typesobj.Types();
    Typesobj.clickonToastmsg();
    // Typesobj.CreatenewTypesbtn();
    // Typesobj.Createbtn();
    // Typesobj.TitleofType(TypesData.TitleofType);
    // Typesobj.DescriptionTypes(TypesData.DescriptionTypes);
    // Typesobj.Createbtn();
    Typesobj.Searchfilter(TypesData.Searchfilter);
    cy.wait(3000);
    cy.reload();
    Typesobj.Showentries(TypesData.Showentries);
    Typesobj.TableData();
    Typesobj.Editiconbtn();
    cy.wait(3000);
    Typesobj.PopupCancelbtn();
    Typesobj.Deleteiconbtn();
    cy.wait(3000);
    Typesobj.Popupdelete_cancelbtn();
    Typesobj.Deleteiconbtn();
    cy.wait(3000);
    Typesobj.PopupDeletebtn();
    cy.reload();
  });

  it.only("Settings Page", () => {
    Settingsobj.clickonDashboard();
    Settingsobj.Settings();
    Settingsobj.Profile();
    Settingsobj.clickonEditbtn();
    Settingsobj.enterfirstname();
    Settingsobj.enterlastname();
    Settingsobj.enterdepartment();
    Settingsobj.enterposition();
    // settingsobj.enteremail();
    Settingsobj.enterphone();
    Settingsobj.entermobile();

    // Settingsobj.entercountry(SettingsData.country);
    // Settingsobj.enterstate();
    // Settingsobj.entercity();
    Settingsobj.enterstreet();
    Settingsobj.enterzipcode();

    Settingsobj.clickonSubmitbtn();

    // Settingsobj.typefirstname(SettingsData.firstname);
    // Settingsobj.typelastname(SettingsData.lastname);
    // Settingsobj.typedepartment(SettingsData.department);
    // Settingsobj.typeposition(SettingsData.Position);
    // Settingsobj.typephone(SettingsData.phone);
    // Settingsobj.typemobile(SettingsData.mobile);

    // Settingsobj.typecountry(SettingsData.country);
    // Settingsobj.typestate(SettingsData.state);
    // // Settingsobj.typecity(SettingsData.city);
    // Settingsobj.typeStreet(SettingsData.Street);
    // Settingsobj.typezipcode(SettingsData.zipcode);
    // Settingsobj.clickonSubmitbtn();
    Settingsobj.Cancel_btn();

    // Organization Page -------------------------------------------------
    Settingsobj.Organization_tab();
    Settingsobj.EditOrg_btn();
    Settingsobj.ClickonRegistered_Country();
    Settingsobj.ClickonVendor_Type();
    Settingsobj.ClickonCompany_Type();
    Settingsobj.ClickonAuthorized_Capital();
    Settingsobj.ClickonEstablished_Date();
    // Settingsobj.ClickonUsername();
    // Settingsobj.ClickonPassword();
    // Settingsobj.ClickonConfirm_Password();
    Settingsobj.ClickonCompany_Name();
    Settingsobj.ClickonWebsite();
    Settingsobj.ClickonPhone_Number();
    Settingsobj.ClickonMobile_Number();
    Settingsobj.ClickonAddress_Line1();
    Settingsobj.ClickonAddress_Line2();
    Settingsobj.ClickonState();
    Settingsobj.ClickonCity();
    Settingsobj.ClickonPostal_Code();
    Settingsobj.nextbtn1();

    Settingsobj.EnterRegistered_Country(SettingsData.Registeredcountry);
    Settingsobj.EnterVendor_Type(SettingsData.vendorType);
    Settingsobj.EnterCompany_Type(SettingsData.companyType);
    Settingsobj.EnterAuthorized_Capital(SettingsData.capital);
    Settingsobj.EnterEstablished_Date(SettingsData.Date);
    Settingsobj.EnterCompany_Name(SettingsData.companyname1);
    Settingsobj.EnterWebsite(SettingsData.website);
    Settingsobj.EnterPhone_Number(SettingsData.phonenumber1);
    Settingsobj.EnterMobile_Number(SettingsData.mobilenumber1);
    Settingsobj.EnterAddress_Line1(SettingsData.addr1);
    Settingsobj.EnterAddress_Line2(SettingsData.addr2);
    // Settingsobj.EnterState(SettingsData.orgstate);
    // Settingsobj.EnterCity(SettingsData.orgcity);
    Settingsobj.EnterPostal_Code(SettingsData.postalcode);
    Settingsobj.clickonSavechanges_btn();
  });
});
