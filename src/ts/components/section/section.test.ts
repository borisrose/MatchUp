import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"
import section from "./section"

describe("Test Section Suite", () => {
  beforeAll(() => {
    const root = document.createElement("div")
    root.id = "root"
    document.body.appendChild(root)

    const template = "<p>Oriane et Cyril</p>"

    root.innerHTML += section({ template: template })
  })

  test("should have a paragraph which contains the following text : Oriane et Cyril ", () => {
    expect(screen.getByTestId("section")).toHaveTextContent("Oriane et Cyril")
  })
})
