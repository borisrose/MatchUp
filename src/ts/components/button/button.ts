interface ButtonProps {
	textContent: string
	type?: "button" | "reset" | "submit"
	classNames?: string
}

export default function (d: ButtonProps) {
	return `
        <button 
            class="button ${d.classNames ? d.classNames : ""}" 
            type="${d.type ? d.type : "button"}">
                ${d.textContent}
        </button>
    
    `
}
