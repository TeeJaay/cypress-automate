export class checkClassSection {
  //Page Objects within the section
  get title() {
    return cy.xpath('//*[@id="checkbox-example"]/fieldset/legend')
  }

  get check1() {
    return cy.xpath('//*[@id="checkBoxOption1"]')
  }

  get check2() {
    return cy.xpath('//*[@id="checkBoxOption2"]')
  }

  get check3() {
    return cy.xpath('//*[@id="checkBoxOption3"]')
  }

  //Test Scripts
  readTitle(title) {
    this.title.should('be.visible').should('have.text', title)
  }

  boxCheck1(check1) {
    this.check1.should('be.visible').check()
  }

  boxCheck2(check2) {
    this.check2.should('be.visible').check()
  }

  boxCheck3(check3) {
    this.check3.should('be.visible').check()
  }
}
