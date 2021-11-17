export class suggClassSection {
  //Page Objects within the section
  get title() {
    return cy.xpath('//*[@id="select-class-example"]/fieldset/legend')
  }

  get country() {
    return cy.xpath('//*[@id="autocomplete"]')
  }

  get county() {
    return cy.xpath('//*[@id="ui-id-2"]')
  }

  //Test Scripts
  readTitle(title) {
    this.title.should('be.visible').should('have.text', title)
  }

  typeCountry(country) {
    this.country.type('phi')
  }

  selectCountry(county) {
    this.county.click()
  }
}
