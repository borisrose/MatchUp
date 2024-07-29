import FormatCheckService from "../../services/format-check-service/format-check-service"
import NotificationService from "../../services/notification-service/notification-service"

class LogContainer {
	notificationService: NotificationService
	formatCheckService: FormatCheckService
	emailInput: HTMLInputElement
	passwordInput: HTMLInputElement
	formErrors: HTMLElement
	onNavigate: (h: string) => void

	constructor(onNavigate: (h: string) => void) {
		this.onNavigate = onNavigate
		this.notificationService = new NotificationService()
		this.formatCheckService = new FormatCheckService()
		let form = document.getElementById("log-form")
		form.addEventListener("submit", this.onSubmit.bind(this))

		this.emailInput = document.getElementById("email") as HTMLInputElement
		this.passwordInput = document.getElementById("password") as HTMLInputElement
		this.formErrors = document.getElementById("form-errors")

		this.notificationService.notif = {
			type: "info",
			content: "Page de connexion",
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

	onSubmit(event: any) {
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
				setTimeout(() => {
					this.onNavigate("")
				}, 3000)
			}
		}
	}
}

export default LogContainer
