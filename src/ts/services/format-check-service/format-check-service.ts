class FormatCheckService {

    constructor(){}

    checkEmail (e: string): boolean {
        const pattern = new RegExp(/^[a-z0-9._]{2,40}[@]{1}[a-z0-9]{3,7}[.]{1}[a-z]{2,5}$/)
        return pattern.test(e)
    }

    checkPassword (p: string) {
        const pattern = new RegExp(/^[a-z0-9._ïûüàéè!?$_-]{12,20}$/i)
        return pattern.test(p)
    }

}

export default FormatCheckService