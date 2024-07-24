class HomeContainer {

    constructor(){

        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const submitbutton = document.getElementById('submit-button')

        email.addEventListener('input',this.onInput)
        submitbutton.addEventListener('click', this.onclick)

    }


    onClick () {
        alert('Clik')
    }

    onInput () {
        alert ('Input')
    }





}