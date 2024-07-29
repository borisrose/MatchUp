import NotificationService from "../services/notification-service/notification-service"
import { OnNavigateType } from "../types/on-navigate"

class BusinessLogicContainer {
    onNavigate: OnNavigateType
    notificationService: NotificationService
    constructor(onNavigate: OnNavigateType){
        this.onNavigate = onNavigate
        this.notificationService = new NotificationService()
    }
}

export default BusinessLogicContainer