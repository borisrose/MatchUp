import button from "../../components/button/button"
import figure from "../../components/figure/figure"

export default class HomeContainer {
  homeMain: HTMLElement
  constructor() {
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
        classNames: "custom-button"
        
      })
    }, 3000)
  }
}
