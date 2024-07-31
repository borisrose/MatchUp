interface AnchorProps {
	href: string
	textContent?: string
	template?: string
}

function anchor(a: AnchorProps) {
	return `
        <a href="${a.href}">
            ${a.template ? a.template : a.textContent}
        </a>
    
    `
}

export default anchor
