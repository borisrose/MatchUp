import NotificationService from "../notification-service/notification-service"

export default class LocalStorageService {
	notificationService: NotificationService
	constructor() {
		this.notificationService = new NotificationService()
	}

	setSpecificItem(key: string, val: any) {
		localStorage.setItem(key, JSON.stringify(val))
		const item = this.getSpecificItem(key)
		if (item) {
			this.notificationService.notif = {
				type: "info",
				content: "Information stockée dans la mémoire du navigateur",
			}
		}
	}

	getSpecificItem(key: string) {
		const item = JSON.parse(localStorage.getItem(key))
		if (item !== null) {
			return item
		} else {
			this.notificationService.notif = {
				type: "failure",
				content: "Aucune information de connexion en mémoire",
			}
		}
	}

	removeSpecificItem(key: string) {
		const item = this.getSpecificItem
		if (item) {
			localStorage.removeItem(key)
			this.notificationService.notif = {
				type: "info",
				content: "Suppression des données de la mémoire du navigateur",
			}
		}
	}
}
