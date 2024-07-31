import logView from "./src/ts/views/log-view/log-view"
import homeView from "./src/ts/views/home-view/home-view"
import LogContainer from "./src/ts/containers/log-container/log-container"
import header from "./src/ts/layout/header/header"
import notification from "./src/ts/layout/notification/notification"
import HomeContainer from "./src/ts/containers/home-container/home-container"

declare global {
	interface Window {
		onNavigate: (h: string) => void
	}
}

function urlChangeHandler() {
	navigateToPage(window.location.hash)
}

window.onpopstate = urlChangeHandler
window.onNavigate = navigateToPage

function navigateToPage(h: string) {
	window.history.pushState({}, "", window.location.pathname + h)

	const root = document.getElementById("root") as HTMLElement
	root.innerHTML = ""
	root.innerHTML += header()
	root.innerHTML += notification()
	switch (h) {
		case "":
			console.log("On Home Page")
			root.innerHTML += homeView()
			new HomeContainer(window.onNavigate)
			break
		case "#login":
			console.log("On Login Page")
			root.innerHTML += logView()
			new LogContainer(window.onNavigate, true)
			break
		case "#register":
			root.innerHTML += logView(false)
			new LogContainer(window.onNavigate, false)
			break
		default:
			root.innerHTML += "404"
			break
	}
}

function router(): void {
	navigateToPage(window.location.hash) // ""
}

export default router
