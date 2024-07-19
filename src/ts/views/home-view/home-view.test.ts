//home-view.test.ts

import homeView from "./home-view"
import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"

/* Il s'agit d'un fichier de test */

let root
describe("Test Suite de la Home View", () => {
  beforeAll(() => {
    // Avant l'ensemble des tests je veux que ceci soit exécuté
    // je crée les mêmes conditions que celle de l'application
    // parce que ça n'utilise pas l'index.html, ça utilisation un environnement de test qui est différent même si sur lui aussi existe un document
    const root = document.createElement("div")
    root.id = "root"
    document.body.appendChild(root)
    root.innerHTML += homeView()
  })

  test("should have a message Bienvenue sur MatchUp", () => {
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Bienvenue sur MatchUp"
    )
  })
})
