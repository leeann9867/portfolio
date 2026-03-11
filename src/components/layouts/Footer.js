import { site } from "../content/site";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">

                <p>
                    © {new Date().getFullYear()} {site.name}
                </p>

                <div className="footer-links">
                    <a href={site.github} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a href={`mailto:${site.email}`}>
                        Email
                    </a>
                </div>

            </div>
        </footer>
    );
}