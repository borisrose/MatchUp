// home-view.ts
/* 
    ce composant est une vue autrement dit une des pages de l'application
*/

export default function () {
  const message = ""

  // vous pouvez observer que si j'ai envie de mettre une variable dans la chaîne de caractères ci-dessous je dois utiliser ${} ce qui caractérise une interpolation, cette idée que ce que vous voyez message ne sera pas ce que vous allez voir au final: "Bienvenue sur MatchUp"

  return `
        <main class="main home__main">
            <h1>${message}</h1>
            <img 
                class="logo"
                src="/assets/images/logo.png" alt="logo de l'application"
            />
        </main>
    `
}
