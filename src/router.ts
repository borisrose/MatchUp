import logView from "./ts/views/log-view/log-view"

declare global  {
    interface Window {
        onNavigate: (h: string) => void
    }
}


function urlChangeHandler () {
    navigateToPage(window.location.hash)
}

window.onpopstate = urlChangeHandler
window.onNavigate = navigateToPage


function navigateToPage (h: string) {

    window.history.pushState({}, "", window.location.pathname + h)

    const root = document.getElementById("root")
    switch(h){
        case "":
            console.log("On Home Page")
            root.innerHTML = "Je suis sur la page d'accueil"
            break;
        case "#login":
            console.log("On Login Page")
            root.innerHTML = logView()
            break;
        default:
            root.innerHTML = "404"
            break;
    }
}



function router(): void{
    navigateToPage(window.location.hash) // ""
}

export default router