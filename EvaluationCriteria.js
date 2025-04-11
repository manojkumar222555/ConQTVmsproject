export class EvaluationCriteriaPage {
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
    EvaluationCriteria:
      "div[class='contract-dropdown'] div:nth-child(9) span:nth-child(1)",
    CreateFormbtn: ".d-flex.align-items-center.create-btn",
    Savebtn: "button[type='submit']",
    FormName: "input[placeholder='Enter'][name='name']",
    Assignto: ".css-19bb58m",
    Description: "textarea[placeholder='Enter Description']",
    Scale: "select[name='scale']",
    Poor: "input[placeholder='Maximum'][name='maxPoor']",
    Fair: "input[placeholder='Maximum'][name='maxFair']",
    Satisfactory: "input[placeholder='Maximum'][name='maxSatisfactory']",
    Good: "input[placeholder='Maximum'][name='maxGood']",
    Excellent: "input[placeholder='Maximum'][name='maxExcellent']",
    Criteria_Name: "input[placeholder='Enter'][name='criteria[0].name']",
    Criteria_Description:
      "input[placeholder='Enter'][name='criteria[0].description']",
    Weight: "input[placeholder='0 - 100']",
    Plusbtn: "div[class='criteria-border-container'] button[type='button']",
    Criteria_Name1: "input[placeholder='Enter'][name='criteria[1].name']",
    Criteria_Description1:
      "input[placeholder='Enter'][name='criteria[1].description']",
    Weight1:
      "input[placeholder='0 - 100'][value='NaN'][name='criteria[1].weight']",
    Criteria_deletebtn:
      "div[class='criteria-container-row'] button[type='button'] div div svg",
    Searchfilter: "input[placeholder='Search for evaluation criteria name']",
    Showentries: ".new-type-table-show-filter",
    Viewiconbtn:
      "div[id='cell-6-115'] div[data-tag='allowRowEvents'] div button div div svg",
    Editiconbtn: "div[id='row-115'] button:nth-child(3) svg",
    Cancelbtn: "button[class='btn-eval']",
    Deleteiconbtn:
      "div[id='cell-6-114'] div[data-tag='allowRowEvents'] div button[type='button']",
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

  clickonEvaluationCriteria() {
    cy.get(this.weblocators.EvaluationCriteria).click();
  }

  clickonCreateFormbtn() {
    cy.get(this.weblocators.CreateFormbtn).click();
  }

  FormName(FormName) {
    cy.get(this.weblocators.FormName).type(FormName);
  }

  Assignto(AssignTo) {
    cy.get(this.weblocators.Assignto).type(`${AssignTo}{enter}`);
  }

  Description(Description) {
    cy.get(this.weblocators.Description).type(Description);
  }

  Savebtn() {
    cy.get(this.weblocators.Savebtn).click();
  }

  Scale(Scale) {
    cy.get(this.weblocators.Scale).select(Scale);
  }

  Poor(Poor) {
    cy.get(this.weblocators.Poor).type(Poor);
  }

  Fair(Fair) {
    cy.get(this.weblocators.Fair).type(Fair);
  }

  Satisfactory(Satisfactory) {
    cy.get(this.weblocators.Satisfactory).type(Satisfactory);
  }

  Good(Good) {
    cy.get(this.weblocators.Good).type(Good);
  }

  Excellent(Excellent) {
    cy.get(this.weblocators.Excellent).type(Excellent);
  }

  Criteria_Name(CriteriaName) {
    cy.get(this.weblocators.Criteria_Name).type(CriteriaName);
  }

  Criteria_Description(CriteriaDescription) {
    cy.get(this.weblocators.Criteria_Description).type(CriteriaDescription);
  }

  Weight(Weight) {
    cy.get(this.weblocators.Weight).clear().type(Weight);
  }

  // Plusbtn() {
  //   cy.get(this.weblocators.Plusbtn).click();
  // }

  // Criteria_Name1(CriteriaName1) {
  //   cy.get(this.weblocators.Criteria_Name1).type(CriteriaName1);
  // }

  // Criteria_Description1(CriteriaDescription1) {
  //   cy.get(this.weblocators.Criteria_Description1).type(CriteriaDescription1);
  // }

  // Weight1(Weight1) {
  //   cy.get(this.weblocators.Weight1).type(Weight1);
  // }

  Criteria_deletebtn() {
    cy.get(this.weblocators.Criteria_deletebtn).click();
  }

  Searchfilter(Searchfilter) {
    cy.get(this.weblocators.Searchfilter).type(Searchfilter);
  }

  Showentries(Showentries) {
    cy.get(this.weblocators.Showentries).select(Showentries);
  }

  TableData() {
    let totalPages = 7;
    for (let p = 2; p <= totalPages; p++) {
      if (totalPages > 2) {
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

  Viewiconbtn() {
    cy.get(this.weblocators.Viewiconbtn).click();
  }

  Deleteiconbtn() {
    cy.get(this.weblocators.Deleteiconbtn).click();
  }

  // ConfirmCancelbtn() {
  //   cy.get(this.weblocators.ConfirmCancelbtn).click();
  // }

  // Confirmdeletebtn() {
  //   cy.get(this.weblocators.ConfirmDeletebtn).click();
  // }

  Editiconbtn() {
    cy.get(this.weblocators.Editiconbtn).click();
  }

  Cancelbtn() {
    cy.get(this.weblocators.Cancelbtn).click();
  }
}
