import button from "../button/button"
import field from "./field/field"

interface FormProps {
	id: string
	fields: Array<{
		icon: string
		id: string
		type: string
		placeholder: string
	}>
	buttons: Array<{
		id: string
		textContent: string
		type?: "reset" | "submit" | "button"
		classNames?: string
	}>
}

export default function (d: FormProps) {
	return `

        <form id="${d.id}" class="form custom-form">
                    <section class="form__fields">
                        ${d.fields.map((el: any) => field(el)).join("")}
                    </section>
                    <section class="form__buttons">
                        ${d.buttons.map((el: any) => button(el)).join("")}
                    </section>
                    <section id="form-errors" class="form__errors"></section>
        </form>
    
    `
}
