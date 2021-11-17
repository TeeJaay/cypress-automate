/// <reference types="cypress" />

import { dropClassSection } from '../../pageObjects/dropdown'

//Global Variable

const DROPCLASSSECTION = new dropClassSection()

describe('DROPDOWN', function () {
  it('droop', function () {
    cy.visit('AutomationPractice/')

    DROPCLASSSECTION.readTitle('Dropdown Example')
    DROPCLASSSECTION.assertSelectOptions()
  })
})
