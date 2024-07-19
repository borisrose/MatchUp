interface SectionProps {
  template: string
}

export default function (d: SectionProps) {
  return `
        
        <section data-testid="section">
            ${d.template}
        </section>
    
    `
}
