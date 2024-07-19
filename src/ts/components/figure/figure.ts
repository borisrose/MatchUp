interface FigureProps {
  src: string
  alt: string
  id: string
  classNames: string
}

export default function ({ src, alt, id, classNames }: FigureProps) {
  return `
            <figure id="${id}" class="${classNames}">
                <img src="${src}" alt="${alt}" />
            </figure>
        
        `
}
