import NotificationService from "../../services/notification-service/notification-service"

class LogContainer {
    notificationService: NotificationService

    constructor(){
        this.notificationService = new NotificationService()
        let form = document.getElementById('log-form')
        form.addEventListener('submit', this.onSubmit.bind(this))
        this.notificationService.notif = {
            type: 'info',
            content: 'Page de connexion'
        }
    }

    //méthodes

    onSubmit(event: any){
        // handler / gestionnaire 
        event.preventDefault()
        this.notificationService.notif = {
            type: 'info',
            content: 'Connexion en cours'
        }
    }

}

export default LogContainer