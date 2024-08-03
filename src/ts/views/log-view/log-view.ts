function logView () {
    return(
        `
           <header>

</header>
<main class="main log__main">
<form> 

<section class="form__inputs">
<h1 class="title-login">Connexion</h1>

  <input type="email" placeholder="Dupont@gmail.com"></input>
  <input type="password" placeholder="Mots de passe"></input>
</section>
<section class="form__buttons">

<input id="login_button" type="submit" value="Connectez-vous"></input><input id="reset_button" type="reset" value="Réinitialiser"></input>
<p class="text-login">Pas encore inscrit(e) ? <a href="inscription">Cliquez ici !</a></p> 



</section>

</form>

</main>

        `
    )
}

export default logView