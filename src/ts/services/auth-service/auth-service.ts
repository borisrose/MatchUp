import ApiService from "../api-service/api-service"
import LocalStorageService from "../localstorage-service/localstorage-service"

class AuthService extends ApiService {
	localstorageService: LocalStorageService
	constructor(host: string) {
		super(host)
		this.localstorageService = new LocalStorageService()
	}

	async login(data: { email: string; password: string }) {
		const result = await this.post(data, "/api/auth/login")
		if (result && result.token) {
			this.localstorageService.setSpecificItem("token", result.token)
		}
	}

	async register(data: {
		firstname: string
		lastname: string
		email: string
		password: string
	}) {
		return await this.post(data, "/api/auth/register")
	}

	async logout() {
		this.localstorageService.removeSpecificItem("token")
		this.notificationService.notif = {
			type: "success",
			content: "Déconnexion réussie",
		}
	}
}

export default AuthService
