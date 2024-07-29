
interface FieldProps {
    icon: string,
    id: string,
    type: string,
    placeholder: string
}


export default function (d: FieldProps) {


	return `
         

            <article class="field">
                <section class="control has-icons-left">
                    <span class="icon is-left">
                        <i class="fa-solid ${d.icon}"></i>
                    </span>
                    <label for="${d.id}"></label>
                    <input data-testid="${d.id}" class="input is-normal" id="${d.id}" type="${d.type}" placeholder="${d.placeholder}"/>
                </section>
                <section id="${d.id}-error" class="field__error"></section>
            </article>
    
    `
}
