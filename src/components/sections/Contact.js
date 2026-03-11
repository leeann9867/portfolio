import { site } from "../content/site";
import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(site.email);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Clipboard copy failed:", err);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="about-grid">

                <div className="card">
                    <h2>Contact</h2>

                    <p>Click the email below to copy.</p>

                    <button
                        className="btn"
                        onClick={copyEmail}
                        style={{ width: "fit-content" }}
                    >
                        {copied ? "Copied!" : site.email}
                    </button>

                </div>

            </div>
        </section>
    );
}