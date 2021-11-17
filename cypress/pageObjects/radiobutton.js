export class radioButtonSection {
  //Page Objects within the section
  get title() {
    return cy.xpath('//*[@id="radio-btn-example"]/fieldset/legend')
  }
  get option1() {
    return cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[1]')
  }
  get option2() {
    return cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[2]')
  }
  get option3() {
    return cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[3]')
  }
  get checkOp() {
    return cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[2]/input')
  }

  //Test Scripts
  readTitle(title) {
    this.title.should('be.visible').should('have.text', title)
  }

  readOption1(option1) {
    this.option1.should('be.visible').contains(option1)
  }

  readOption2(option2) {
    this.option2.should('be.visible').contains(option2)
  }

  readOption3(option3) {
    this.option3.should('be.visible').contains(option3)
  }

  checkRadio(checkOp) {
    this.checkOp.click()
  }
}
