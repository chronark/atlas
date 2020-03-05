/* eslint-disable jest/expect-expect */

describe("HTML Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000")
  })
  it("includes the entrypoint <div>", () => {
    cy.get("#map-container")
  })

  it("includes the .ol-viewport", () => {
    cy.get(".ol-viewport")
  })

  it("zoom buttons exist", () => {
    cy.get(".ol-zoom")
      .find(".ol-zoom-in")
      .contains("+")
    cy.get(".ol-zoom")
      .find(".ol-zoom-out")
      .contains("−")
  })

  it("can zoom in", () => {
    cy.get(".ol-zoom")
      .find(".ol-zoom-in")
      .click()
    cy.get(".ol-zoom")
      .find(".ol-zoom-out")
      .click()
  })

  it("hides the attribution by default and displays info button", () => {
    cy.get(".ol-attribution").should("have.class", "ol-collapsed")
    cy.get(".ol-attribution")
      .find("span")
      .contains("i")
  })
  it("shows the attribution after clicking on the icon", () => {
    cy.get(".ol-attribution")
      .find("button")
      .click()

    cy.get(".ol-attribution")
      .should("not.have.class", "ol-collapsed")
      .contains("OpenStreetMap")
    cy.get(".ol-attribution > ul > li > a").should("have.attr", "href", "http://www.openstreetmap.org/copyright")
  })

  it("hides the attribution after clicking on the icon", () => {
    cy.get(".ol-attribution")
      .find("button")
      .click()

    cy.get(".ol-attribution")
      .find("span")
      .contains("»")

    cy.get(".ol-attribution")
      .find("button")
      .click()

    cy.get(".ol-attribution").should("have.class", "ol-collapsed")
    cy.get(".ol-attribution")
      .find("span")
      .contains("i")
  })

  it("can enter a search string", () => {
    cy.get("#searchField").type("{selectall} Germany")
  })

  it("can submit search by mouseclick", () => {
    cy.get("#searchSubmit").click()
  })

  it("can submit search by pressing enter", () => {
    cy.get("#searchField").type("{enter}")
  })
})
