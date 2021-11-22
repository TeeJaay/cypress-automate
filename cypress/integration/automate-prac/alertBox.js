/// <reference types="cypress" />

import { alertClassSection } from '../../pageObjects/boxAlert'

//Global Variable

const ALERTCLASSSECTION = new alertClassSection()

describe('alertbox', function () {
  it('alert', function () {
    cy.visit('AutomationPractice/')

    ALERTCLASSSECTION.readTitle('Switch To Alert Example')

    ALERTCLASSSECTION.confirmBtn()
    ALERTCLASSSECTION.boxText()
  })
})
