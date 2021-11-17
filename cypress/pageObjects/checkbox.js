export class checkClassSection {
  //Page Objects within the section
  get title() {
    return cy.xpath('//*[@id="checkbox-example"]/fieldset/legend')
  }

  get check1() {
    return cy.xpath('//*[@id="checkbox-example"]/fieldset/label[2]')
  }

  get check1() {
    return cy.xpath('//*[@id="checkbox-example"]/fieldset/label[1]')
  }

  get check2() {
    return cy.xpath('//*[@id="checkbox-example"]/fieldset/label[2]')
  }

  get check3() {
    return cy.xpath('//*[@id="checkbox-example"]/fieldset/label[3]')
  }

  get county() {
    return cy.xpath('//*[@id="ui-id-2"]')
  }

  //Test Scripts
  readTitle(title) {
    this.title.should('be.visible').should('have.text', title)
  }

  boxCheck1(check1) {
    this.check1.should('be.visible').contains('have.text', check1)
  }

  selectCountry(county) {
    this.county.click()
  }
}
