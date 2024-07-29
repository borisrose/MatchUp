function logView() {
	return `

        <main class="main log__main">

            <section class="log__form">
                <form id="log-form" class="form custom-form">
                    <section class="form__fields">

                        <article class="field">
                            <section class="control has-icons-left field__input-and-label">
                                <span class="icon is-left">
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                                <label for="email"></label>
                                <input class="input is-normal" id="email" type="email" placeholder="Email"/>
                            </section>
                            <section id="email-error" class="field__error"></section>
                        </article>

                        <article class="field">
                            <section class="control has-icons-left">
                                <span class="icon is-left">
                                    <i class="fa-solid fa-lock"></i>
                                </span>
                                <label for="password"></label>
                                <input class="input is-normal" id="password" type="password" placeholder="Mot de passe"/>
                            </section>
                            <section id="password-error" class="field__error"></section>
                        </article>

                    </section>
                    <section class="form__buttons">
                        <button id="submit-button" type="submit" class="button custom-button">Valider</button>
                        <button id="reset-button" type="reset" class="button custom-button">Réinitialiser</button>
                    </section>
                    <section id="form-errors" class="form__errors"></section>
                </form>
            </section>

        </main>
    
    
    `
}

export default logView
