export class alertClassSection {
  //Page Objects within the section
  get title() {
    return cy.xpath('/html/body/div[2]/div[3]/fieldset/legend')
  }

  get type() {
    return cy.xpath('//*[@id="name"]')
  }

  get alert() {
    return cy.xpath('//*[@id="alertbtn"]')
  }

  get confirm() {
    return cy.xpath('//*[@id="confirmbtn"]')
  }

  //Test Scripts
  readTitle(title) {
    this.title.should('be.visible').should('have.text', title)
  }

  boxText(type) {
    this.type.should('be.visible').type('Secret')
  }

  alertBtn(alert) {
    this.alert.should('be.visible').click()
  }

  confirmBtn(confirm) {
    this.confirm.should('be.visible').click()
  }
}
