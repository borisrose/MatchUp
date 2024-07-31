import ApiRequest from "../../interfaces/api-request.interface"
import NotificationService from "../notification-service/notification-service"

export default class ApiService implements ApiRequest {
	host: string
	notificationService: NotificationService

	constructor(host: string) {
		this.host = host
		this.notificationService = new NotificationService()
	}

	async get(endpoint: string, token?: string) {
		try {
			const result = await fetch(this.host + endpoint)
			const jsResult = await result.json()
			console.log(jsResult)
			return jsResult
		} catch (err) {
			this.notificationService.notif = {
				type: "failure",
				content: "Erreur du serveur",
			}
			console.log(err)
			return
		}
	}

	async post(
		data: any,
		endpoint: string,
		token?: string,
		method: string = "POST",
	) {
		try {
			const result = await fetch(this.host + endpoint, {
				method: method,
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			})
			const jsResult = await result.json()
			console.log(jsResult)
			return jsResult
		} catch (err) {
			this.notificationService.notif = {
				type: "failure",
				content: "Erreur du serveur",
			}
			console.log(err)
		}
	}
}
