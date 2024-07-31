import anchor from "../../components/anchor/anchor"
import form from "../../components/form/form"

function logView(isLoggingIn: boolean = true) {
	const formData = {
		id: "log-form",
		fields: [
			{
				icon: "fa-envelope",
				id: "email",
				type: "email",
				placeholder: "Email",
			},
			{
				icon: "fa-lock",
				id: "password",
				type: "password",
				placeholder: "Mot de passe",
			},
		],
		buttons: [
			{
				id: "submit-button",
				type: "submit",
				classNames: "custom-button",
				textContent: "Valider",
			},
			{
				id: "reset-button",
				type: "reset",
				classNames: "custom-button",
				textContent: "Réinitialiser",
			},
		] as any,
	}

	if (!isLoggingIn) {
		const email = formData.fields.pop()
		const password = formData.fields.pop()
		formData.fields.push(
			{
				icon: "fa-user",
				id: "firstname",
				type: "text",
				placeholder: "Prénom",
			},
			{
				icon: "fa-user",
				id: "lastname",
				type: "text",
				placeholder: "Nom",
			},
			email,
			password,
		)
	}

	return `

        <main class="main log__main">

            <section class="log__form">
                    ${form(formData)}
					<aside>
						${
							isLoggingIn
								? `<p>Pas encore inscrit(e) ? - Cliquez ${anchor({ href: "#register", textContent: "ici" })}`
								: `<p>Déjà inscrit(e) ? - Cliquez ${anchor({ href: "#login", textContent: "ici" })}`
						}
					</aside>
            </section>

        </main>
    
    
    `
}

export default logView
