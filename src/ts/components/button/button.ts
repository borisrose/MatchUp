// une interface est un contrat
interface ButtonProps {
  id: string
  textContent: string
  type?: "reset" | "submit" | "button"
  classNames?: string
}

// si vous écrivez que d impmlémente l'interface ButtonProps cela veut dire que d doit contenir obligatoirement un id  et un textContetn de type string mais que les deux autres propriétés sont optionnelles car dans la définition de l'interface elles sont suivies d'une ?

// d est évidemment un objet puisque dans la valeur que retourne la fonction vous pouvez voir que d est suivi d'une .qqch et ce qqch sont ses propriétés en vertu de l'interface précédemment définie (ButtonProps)

// en typescript on peut préciser le type de toutes les variables, de toutes les valeurs qu'elles contiennent si vous préférez.
export default function (d: ButtonProps): string {
  // vu que cette fonction retourne une chaîne de caractères (string) je l'ai précisé dans la signature de la fonction ( la partie juste au-dessus de ce commentaire)

  return `
            <!--ceci est un commentaire : vous pouvez voir deux utilisations d'une structure ternaire : 
                condition à valider ? resultat si condition validée : résultat si condition non validée 
            -->
            <button 
                type="${d.type ? d.type : "button"}"
                class="button ${d.classNames ? d.classNames : ""}"
                id="${d.id}"
            >
                ${d.textContent}
            </button>  
        
        `
}
