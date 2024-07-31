interface ButtonProps {
	id: string
	textContent: string
	type?: "button" | "reset" | "submit"
	classNames?: string
}

export default function (d: ButtonProps): string {
	return `
        <button 
            data-testid="${d.id}"
            id="${d.id}"
            class="button ${d.classNames ? d.classNames : ""}" 
            type="${d.type ? d.type : "button"}">
                ${d.textContent}
        </button>
    
    `
}
