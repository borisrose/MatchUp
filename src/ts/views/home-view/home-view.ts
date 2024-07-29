import button from "../../components/button/button"

function homeView() {
	const buttonProps = {
		textContent: "Se connecter",
	}

	return `
        <main class="main home__main">
            ${button(buttonProps)}
        </main>
    
    `
}

export default homeView
