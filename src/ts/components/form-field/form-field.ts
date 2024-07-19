// form-field.ts

// une infertaface est un contrat que doit remplir l'objet qui l'implémente
interface FormFieldProps {
  id: string
  placeholder: string
  type?: string
}

/*
    d est un objet qui implémente l'interface FormFieldsProps donc il doit avoir 
    obligatoirement un id de type string, un placeholder de type string mais optionnellement un type de type string

*/

export default function (d: FormFieldProps) {
  return `
        <article class="form-field">
            <label for="${d.id}"></label>
            <input 
                id="${d.id}" 
                placeholder="${d.placeholder}"
                type="${d.type ? d.type : "text"}"
            />
            <section id="${d.id}-error"></section>
        </article>
    
    `
}
