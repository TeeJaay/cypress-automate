export class displayClassSection {
  //Page Objects within the section
  get title() {
    return cy.xpath('/html/body/div[3]/div[2]/fieldset[1]/legend')
  }

  get show() {
    return cy.xpath('//*[@id="show-textbox"]')
  }

  get hide() {
    return cy.xpath('//*[@id="hide-textbox"]')
  }

  get type() {
    return cy.xpath('//*[@id="displayed-text"]')
  }

  //Test Scripts
  readTitle(title) {
    this.title.should('be.visible').should('have.text', title)
  }

  showBtn(show) {
    this.show.should('be.visible').click()
  }

  hideBtn(hide) {
    this.hide.should('be.visible').click()
  }

  typeBox(type) {
    this.type.should('be.visible').type('Secret')
  }
}
