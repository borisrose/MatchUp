interface ParagraphProps {
  textContent: string
  classNames?: string
}

export default function ({ classNames, textContent }: ParagraphProps) {
  return `  <p 
    data-testid="paragraph"
    class="paragraph ${classNames ? classNames : ""}">
    ${textContent}</p>
        `
}
