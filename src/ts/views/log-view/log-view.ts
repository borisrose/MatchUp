import form from "../../components/form/form"

function logView() {

    const formData = {
        id: "log-form",
        fields: [

            {
                icon: "fa-envelope",
                id: "email",
                type: "email",
                placeholder: "Email"
            }, 
            {
                icon: "fa-lock",
                id: "password",
                type: "password",
                placeholder: "Mot de passe"
            }
    
        ],
        buttons: [
            {
                id: "submit-button",
                type: "submit",
                classNames: "custom-button",
                textContent: "Valider"
            },
            {
                id: "reset-button",
                type: "reset",
                classNames: "custom-button",
                textContent: "Réinitialiser"
            }
        ] as any
    }



	return `

        <main class="main log__main">

            <section class="log__form">
                    ${form(formData)}
            </section>

        </main>
    
    
    `
}

export default logView
