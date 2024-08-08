//router.ts
import homeView from "./src/ts/views/home-view/home-view"
import Button from "./src/ts/components/button/button"
import HomeContainer from "./src/ts/containers/home-container/home-container"
import logView from "./src/ts/views/log-view/log-view";
import header from "./src/ts/layout/header/header";
/* 

    c'est ici que vous allez gérer la logique de routage autrement dit la logique qui en fonction de la valeur de window.location.hash donc la valeur du fragment dans l'url (le fragment commençant par #) 

    on est dans cette situation algébrique est la suivante :  
    f(window.location.hash) = la vue qui être présentée à l'utilisateur
    ou f: window.location.hash -> une vue spécifique
    
    une vue est une interface utilisateur 

    d'où le dossier views

*/

// avec TS je peux définir un type
type OnNavigateType = (h: string) => void

declare global {
  interface Window {
    onNavigate: OnNavigateType
  }
}

window.onNavigate = navigateToPage

// cette fonction va être utilisée au moment du démarrage de l'application à l'intérieur de la fonction anonyme ci-dessous
function navigateToPage(h: string): void {
  //on veut récupérer dans une fonction la seule div qui est écrite "en dur" dans l'index.html . Pourquoi ? Parce que c'est à l'intérieur d'elle dans son innerHTML que l'on veut faire vivre notre application et dynamiser l'application en passe d'une vue à une autre. Autrement dit les différentes pages/vues de l'application seront entre <div id="root"> et </div>
  console.log("h", h)
  // Encore faut-il récupérer l'élément html ayant l'id root dans une variable pour changer son contenu avec la vue qui est fonction de la valeur de h

  // je définis donc une variable qui aura un nom cohérent à son contenu
  const root = document.getElementById("root") as HTMLElement

  // le membre de droit de l'assignation EST l'élément HTML ayant pour id root et donc le fait d'assigner cette valeur à la variable root fait de cette dernière l'élément HTML ayant un id root

  // rajoutant as HTMLElement je force le programme a considéré que cet élément HTML a bel et bien une existance réelle ce qui n'est pas principe pas forcément le cas puisque j'aurais très bien pu écrire une ineptie en me trompant d'identifiant

  // vu que cette fonction ne va pas être exécuté uniquement au démarrage de l'application mais également quand l'url va changer via les ancres <a href=""></a> notamment je dois vider le contenu de la div car une autre vue aurait pu s'y trouver comme la home-view ou la log-view ou la not-found-view

  root.innerHTML = "" // je vide le contenu de l'élement HTML ayant root comme id
  root.innerHTML += header() // Bonjour
  // à ce niveau j'aurai et je mettrai à un moment donné les éléments de layout qui ne dépendent pas d'une vue particulière et qui doivent être présents quelle que soit la page / la vue

  // par exemple header et le composant qui contiendra mes messages de notification aux utilisateurs

  // h est le paramètre unique qu'accepte cette fonction
  // sa valeur sera appelée un argument
  // en fonction de sa valeur on va router l'utilisateur vers une vue particulière

  switch (h) {
    case "":
      // ici c'est le cas où il n'y a pas de hash autrement dit on est sur la page racine de l'application
      console.log("🟢 page racine") // les console.log sont nos façons de vérifier des informations

      // j'ai créé une vue home-view elle est supposée être ce que l'utilisateur voit lorsqu'il est à la racine de l'application (quand l'application démarrage)

      // donc on va considérer que le contenu de l'élément HTML ayant l'id root sera cette vue home-view

      root.innerHTML += homeView()
      new HomeContainer(window.onNavigate)

      break // le break évite qu'on bascule dans le cas suivant et que donc on exécute les instructions du cas suivant
    case "#login":
      // ici on veut afficher la vue qui correspond à la page de connexion
      console.log("🟢 page login")
      root.innerHTML += logView()
      break;
    default:
      // il s'agit du cas par défault si h n'a aucune des valeurs définis par les cas ci-dessus
      console.log("🔴 404 not found")
      break
  }
}

// lorsque l'url est modifiée un événement de la fenête ouverte survient c'est le popstate
// Nous on veut que lorsque l'url change par exemple lorsqu'on passe de http://localhost:8080 à http://localhost:8080/#login que la fonction navigateToPage() soit appelée autrement dit qu'elle s'exécute

// donc nous le disons ci-dessous
window.onpopstate = function () {
  // cela veut dire qu'au moment où popstate est déclenchée (triggered) alors on va appeler la fonction en lui passe le nouveau hash si on prend l'exemple ci-dessus cela sera #login
  navigateToPage(window.location.hash) // #login est passé comme argument à la fonction navigateToPage
}

// cette fonction anonyme elle n'a pas de nom et qui est l'export default de ce fichier
// va s'exécuter au moment du lancement de l'application et UNIQUEMENT à ce moment
export default function () {
  navigateToPage(window.location.hash)
}
