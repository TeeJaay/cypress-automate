/// <reference types="cypress" />

import { displayClassSection } from '../../pageObjects/textDisplay'

//Global Variable

const DISPLAYCLASSSECTION = new displayClassSection()

describe('display', function () {
  it('txtdisplay', function () {
    cy.visit('AutomationPractice/')

    DISPLAYCLASSSECTION.readTitle('Element Displayed Example')
    DISPLAYCLASSSECTION.typeBox()
    DISPLAYCLASSSECTION.showBtn()
    DISPLAYCLASSSECTION.hideBtn()
    DISPLAYCLASSSECTION.showBtn()
  })
})
