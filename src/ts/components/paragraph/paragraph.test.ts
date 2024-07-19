import paragraph from "./paragraph"
import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"

describe('Paragraph Test Suite', () => {

    beforeAll(() => {
        const root = document.createElement('div')
        root.id = "root"
        document.body.appendChild(root)
        root.innerHTML += paragraph({
            textContent: 'Test V1',
            classNames: 'paragraph-test-class'
        })
    })

    test('should a text content: Test V1', () => {
        expect(screen.getByTestId('paragraph')).toHaveTextContent('Test V1')
    })

})