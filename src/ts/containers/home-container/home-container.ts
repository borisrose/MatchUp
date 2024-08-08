import button from "../../components/button/button"
import figure from "../../components/figure/figure"

export default class HomeContainer {
  homeMain: HTMLElement
  onNavigate: (h: string) => void
  constructor(onNavigate: (h: string) => void) {
    // la valeur donnée au paramètre onNavigate va devoir un attribut de la classe
    this.onNavigate = onNavigate
    this.homeMain = document.getElementById("home-main")

    this.homeMain.innerHTML = figure({
      src: "/assets/images/logo.png",
      id: "logo-figure",
      alt: "logo de l'application",
      classNames: "logo"
    })

    setTimeout(() => {
      this.homeMain.innerHTML = button({
        textContent: "Se connecter",
        id: "home-login-button",
        classNames: "custom-button",	
      })

      // le bouton existe uniquement maintenant donc c'est après son existe qu'il faut
      // lui brancher un écouteur

      const homeLoginButton = document.getElementById("home-login-button")
      homeLoginButton.addEventListener("click",this.onClick.bind(this))


    }, 3000)
  }


  //je crée une méthode qui va servir de gestionnaire pour l'événement clic sur le bouton
  onClick () {
    this.onNavigate("#login")
  }
}
