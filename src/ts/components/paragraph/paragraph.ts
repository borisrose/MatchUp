interface ParagraphProps {
    textContent: string
    classNames?: string
}

export default function(d: ParagraphProps){
    return(
        `  <p class="paragraph"> ${d.classNames ? d.classNames : ""}">${d.textContent}</p>
        `
    )
}
