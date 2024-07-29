export default class NotificationService {
    private _notif = {} as any
    constructor(){}

    get notif(){
        return this._notif
    }

    set notif(val: any){
        this._notif = val

        const notification = document.getElementById('notification')
        notification.innerHTML = `<p class="flash flash--${this._notif.type}">${this._notif.content}</p>`

        setTimeout(() => {
            notification.innerHTML = ""
        }, 4000)

    }
}