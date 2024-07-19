// form.ts
// ce composant est difficile à implémenter car il s'agit d'intéger d'autres composants dedans et d'utiliser la méthode map

import button from "../button/button"
import formField from "../form-field/form-field"

interface Button {
  id: string
  textContent: string
  type?: "reset" | "submit" | "button"
  classNames?: string
}

interface Input {
  id: string
  placeholder: string
  type?: string
}

// vous avez vu que dans la définition de cette interface j'utilise d'autres interfaces en l'occurrence Input et Button pour dire que la propriété inputs sera un tableau composé d'objets implémentant l'interface Input et pour dire que buttons sera un tableau d'objets implémentant l'interface Button
interface FormProps {
  formId: string
  inputs: Input[]
  buttons: Button[]
}

export default function (d: FormProps) {
  return `
        <form id="${d.formId}">
            <section class="form__inputs">
                <!-- 
                
                    ceci est un commentaire : ce qui se passe en-dessous est la chose suivant : je demande à ce que pour chaque (each) élément du tableau inputs , propriété de d , soit créé un composant formField à qui je passe l'élément du tableau et vu que le résultat de map est un tableau j'utilise la méthode join et je lui passe comme valeur "" pour éviter qu'une virgule soit mise entre les différents composants puisque par principe les éléments d'un tableau sont séparés par une ,  
                
                -->
                ${d.inputs.map((el: Input) => formField(el)).join("")}
            </section>
             <section class="form__buttons">
                ${d.buttons.map((el: Button) => button(el)).join("")}
            </section>
        </form>    
    `
}
