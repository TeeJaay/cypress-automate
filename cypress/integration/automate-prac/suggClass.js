/// <reference types="cypress" />

import { suggClassSection } from '../../pageObjects/suggCls'

//Global Variable

const SUGGCLASSSECTION = new suggClassSection()

describe('suggsrch', function () {
  it('search1', function () {
    cy.visit('AutomationPractice/')

    SUGGCLASSSECTION.readTitle('Suggession Class Example')
    SUGGCLASSSECTION.typeCountry()
    SUGGCLASSSECTION.selectCountry()
  })
})
