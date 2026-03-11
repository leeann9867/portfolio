import { site } from "../content/site";


export function Header() {
    return (
        <header className="header">
            <div className="header-inner">

                <div className="logo">
                    {site.name}
                </div>

                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href={site.github} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </nav>

            </div>
        </header>
    );
}