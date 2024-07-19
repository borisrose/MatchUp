#!/bin/bash
push_workflow(){
    git add . && git commit -m $1 && git push origin dev
}
push_workflow $1