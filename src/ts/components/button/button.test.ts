import button from "./button"
import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"

describe("Button Test Suite", () => {
	beforeAll(() => {
		const root = document.createElement("div")
		root.id = "root"

		document.body.appendChild(root)

		const buttonProps = {
			id: "home-login-button",
			textContent: "Se connecter",
		}

		root.innerHTML += button(buttonProps)
	})
	tests()
})

function tests() {
	test("should have a button on the user interface", () => {
		expect(screen.getByRole("button")).toHaveTextContent("Se connecter")
	})
	test("should have a button with a textContent : Se connecter", () => {
		expect(screen.getByTestId("home-login-button")).toHaveTextContent(
			"Se connecter",
		)
	})
}
