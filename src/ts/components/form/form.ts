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
