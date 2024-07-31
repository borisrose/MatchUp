import BusinessLogicContainer from "../../models/business-logic-container"
import AuthService from "../../services/auth-service/auth-service"
import FormatCheckService from "../../services/format-check-service/format-check-service"
import LocalStorageService from "../../services/localstorage-service/localstorage-service"
import NotificationService from "../../services/notification-service/notification-service"

class LogContainer extends BusinessLogicContainer {
	formatCheckService: FormatCheckService
	emailInput: HTMLInputElement
	passwordInput: HTMLInputElement
	formErrors: HTMLElement
	authService: AuthService
	localstorageService: LocalStorageService
	isLoggingIn: boolean

	constructor(onNavigate: (h: string) => void, isLoggingIn: boolean) {
		super(onNavigate)
		this.onNavigate = onNavigate
		this.isLoggingIn = isLoggingIn
		this.formatCheckService = new FormatCheckService()
		this.authService = new AuthService("http://localhost:8095")
		this.localstorageService = new LocalStorageService()
		let form = document.getElementById("log-form")
		form.addEventListener("submit", this.onSubmit.bind(this))

		this.emailInput = document.getElementById("email") as HTMLInputElement
		this.passwordInput = document.getElementById("password") as HTMLInputElement
		this.formErrors = document.getElementById("form-errors")

		if (this.isLoggingIn) {
			this.notificationService.notif = {
				type: "info",
				content: "Page de connexion",
			}
		} else {
			this.notificationService.notif = {
				type: "info",
				content: "Page d'inscription",
			}
		}
	}

	getUserInputValues() {
		const emailValue = this.emailInput.value
		const passwordValue = this.passwordInput.value
		if (!emailValue || !passwordValue) {
			this.formErrors.innerHTML = `<p>Veuillez compléter le formualire</p>`
			return
		} else {
			this.formErrors.innerHTML = ""
			return {
				emailValue,
				passwordValue,
			}
		}
	}

	//méthodes
	checkIfUserInputValuesFormatValid(email: string, password: string): boolean {
		const isEmailFormatValid = this.formatCheckService.checkEmail(email)

		if (!isEmailFormatValid) {
			document.getElementById("email-error").innerHTML =
				`<p>Email incorrect</p>`
			return
		} else {
			document.getElementById("email-error").innerHTML = ""
		}

		const isPasswordFormatValid =
			this.formatCheckService.checkPassword(password)
		if (!isPasswordFormatValid) {
			document.getElementById("password-error").innerHTML =
				`<p>Le mot de passe doit contenir au minimum 12 caractères et au maximum 20</p>`
			return
		} else {
			document.getElementById("password-error").innerHTML = ""
		}

		return isEmailFormatValid && isPasswordFormatValid
	}

	async onSubmit(event: any) {
		// handler / gestionnaire
		event.preventDefault()

		const result = this.getUserInputValues()
		if (result) {
			const isFormatOk = this.checkIfUserInputValuesFormatValid(
				result.emailValue,
				result.passwordValue,
			)
			if (isFormatOk) {
				this.notificationService.notif = {
					type: "success",
					content: "Connexion en cours",
				}

				this.authService
					.login({ email: result.emailValue, password: result.passwordValue })
					.then(() => {
						const token = this.localstorageService.getSpecificItem("token")
						if (token) {
							setTimeout(() => {
								this.onNavigate("#dashboard")
							}, 3000)
						} else {
							setTimeout(() => {
								this.notificationService.notif = {
									type: "failure",
									content: "Échec de la connexion",
								}
							}, 3000)
						}
					})
			}
		}
	}
}

export default LogContainer
