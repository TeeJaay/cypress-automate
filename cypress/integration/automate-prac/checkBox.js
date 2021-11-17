/// <reference types="cypress" />

import { checkClassSection } from '../../pageObjects/checkbox'

//Global Variable

const CHECKCLASSSECTION = new checkClassSection()

describe('checkbox', function () {
  it('check', function () {
    cy.visit('AutomationPractice/')

    CHECKCLASSSECTION.readTitle('Checkbox Example')
    CHECKCLASSSECTION.boxCheck1('Option1')
    CHECKCLASSSECTION.selectCountry()
  })
})
