/// <reference types="cypress" />

import { radioButtonSection } from '../../pageObjects/radiobutton'

//Global Variable

const RADIOBUTTONSECTION = new radioButtonSection()

describe('radioBtn', function () {
  it('btn1', function () {
    cy.visit('AutomationPractice/')

    RADIOBUTTONSECTION.readTitle('Radio Button Example')
    RADIOBUTTONSECTION.readOption1('Radio1')
    RADIOBUTTONSECTION.readOption2('Radio2')
    RADIOBUTTONSECTION.readOption3('Radio3')
    RADIOBUTTONSECTION.checkRadio()
  })
})
