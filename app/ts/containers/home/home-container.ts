class HomeContainer {
    onNavigate: (h:string) => void

    constructor(onNavigate: (h: string) => void) {
        this.onNavigate = onNavigate
        const homeLoginButton = document.getElementById("home-login-button") as HTMLButtonElement
        homeLoginButton.addEventListener("click", this.onClick.bind(this))
    }

    onClick () {
        this.onNavigate("#login")
    }
}

export default HomeContainer