import BusinessLogicContainer from "../../models/business-logic-container";
import { OnNavigateType } from "../../types/on-navigate";

class HomeContainer extends BusinessLogicContainer {
    constructor(onNavigate: OnNavigateType){
        super(onNavigate)

        const homeLoginButton = document.getElementById("home-login-button")
        homeLoginButton.addEventListener("click", this.onClick.bind(this))

        this.notificationService.notif = {
            type: "info",
            content: "Page d'accueil"
        }
    }

    onClick () {
        this.onNavigate("#login")
    }
}

export default HomeContainer