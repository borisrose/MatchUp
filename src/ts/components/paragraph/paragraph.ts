interface ParagraphProps {
    textContent: string
}

export default function(d: ParagraphProps){
    return(
        `  <p class="paragraph">${d.textContent}</p>
        `
    )
}
