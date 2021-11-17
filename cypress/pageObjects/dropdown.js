import { forEach } from 'lodash'

export class dropClassSection {
  //Page Objects within the section
  get title() {
    return cy.xpath('/html/body/div[1]/div[3]/fieldset/legend')
  }

  get dropselect() {
    return cy.xpath('//select[@id="dropdown-class-example"]')
  }

  // get droption1() {
  //   return cy.xpath('//*[@id="dropdown-class-example"]/option[2]')
  // }

  // get droption2() {
  //   return cy.xpath('//*[@id="dropdown-class-example"]/option[3]')
  // }

  // get droption3() {
  //   return cy.xpath('//*[@id="dropdown-class-example"]/option[4]')
  // }

  // get pickoption() {
  //   return cy.xpath('//*[@id="dropdown-class-example"]/option[3]')
  // }

  //Test Scripts
  readTitle(title) {
    this.title.should('be.visible').should('have.text', title)
  }

  assertSelectOptions() {
    this.dropselect.select(1).should('have.value', 'option1')
    this.dropselect.select(2).should('have.value', 'option2')
    this.dropselect.select(3).should('have.value', 'option3')
    // this.dropselect.should('have.value', 'option1')
  }

  // dropSelect(dropselect) {
  //   this.dropselect
  //     .should('have.text', dropselect)

  // }

  // Option1(droption1) {
  //   this.droption1.should('have.text', droption1).should('have.text', 'Option1')
  // }

  // Option2(droption2) {
  //   this.droption2.should('have.text', droption2).should('have.text', 'Option2')
  // }

  // Option3(droption3) {
  //   this.droption3.should('have.text', droption3).should('have.text', 'Option3')
  // }

  // pickOption(pickoption) {
  //   this.pickoption.select().should('have.text', 'Option2')
  // }
}
