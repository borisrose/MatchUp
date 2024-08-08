function appHeader (): string {
    return `
        <header class="app-header">
            <a href="">
                <figure>
                    <img src="/assets/logo.png" alt="logo de MatchUp" />
                </figure>
            </a>
            <nav>
                <a href="#login">
                    <i class="fa-solid fa-right-to-bracket"></i>
                </a>
            </nav>
        </header>
    
    `
}

export default appHeader