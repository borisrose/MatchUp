#!/bin/bash

#Vous avez travaillé et un de vos collègues vous dit qu'il a mis sa version en ligne 
#Vous devez tout d'abord faire un git add . (de votre version)
#Avec le git status vous vérifiez que vos changements sont maintenant en vers 
#Ensuite vous mettez de côté ces changements avec git stash 
#Ensuite vous pourrez faire votre git pull origin dev 

stash_workflow(){
  git status #rouge
  sleep 5
  git add . # rouge -> vert
  sleep 4
  git status  # vert
  sleep 3
  git stash # mettre de côté vos changements indexés (verts) personnels
  sleep 2
  git stash list # voir la liste des choses mises de côté
  sleep 2
  git pull origin dev # récupérer le code sur Internet
  sleep 2
  git stash apply stash@{0}
  sleep 3
  git status
}

stash_workflow
