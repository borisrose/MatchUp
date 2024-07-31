import field from "./field"
import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"

describe("Field Test Suite", () => {
	beforeAll(() => {
		const fiedProps = {
			icon: "fa-envelope",
			id: "email",
			type: "email",
			placeholder: "Email",
		}

		const root = document.createElement("div")
		root.id = "root"
		document.body.appendChild(root)
		root.innerHTML += field(fiedProps)
	})
	tests()
})

function tests() {
	test("should have an id email", () => {
		expect(screen.getByTestId("email").id).toBe("email")
	})

	test("should have an placeholder Email", () => {
		expect(screen.getByPlaceholderText("Email")).toBeTruthy()
	})

	test("should have a type email", () => {
		expect((screen.getByTestId("email") as HTMLInputElement).type).toBe("email")
	})
}
