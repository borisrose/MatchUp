import "./styles.scss"
import appHeader from "./app/ts/layout/app-header/app-header";
import homeView from "./app/ts/views/home/home-view";
import HomeContainer from "./app/ts/containers/home/home-container"

declare global {
    interface Window {
        onNavigate: (h: string) => void
    }
}

window.onNavigate = navigateToPage


function router (): void {
    navigateToPage(window.location.hash)
}


window.onpopstate = router



function updateNavHistory (h: string): void {
    window.history.pushState({}, "", window.location.pathname + h)
}

function initializeRootInnerHTML () {
    const root = document.getElementById("root")
    root.innerHTML = ""
    root.innerHTML += appHeader()
    return root
}



function checkHashToCreateTheViewAndTheBusinessLogic (h: string, r: HTMLElement) {
    switch(h) {
        case "":
            r.innerHTML += homeView()
            new HomeContainer(window.onNavigate)
            break;
        default:
            break;
    }
}

function navigateToPage(h: string) : void {
    // on met a jour manuellement l'historique de navigation
    updateNavHistory(h)
    // on doit réinitialiser le contenu de l'élément HTML qui a comme id root
    const root = initializeRootInnerHTML()
    // en fonction du hash cela va créer une interface et exécuter la logique métier associée
    checkHashToCreateTheViewAndTheBusinessLogic(h, root)
}


router()