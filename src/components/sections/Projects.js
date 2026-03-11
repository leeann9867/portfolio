import { site } from "../content/site";
import { useState } from "react";

const Section = ({ title, children }) => (
    <div className="modal-section">
        <h4>{title}</h4>
        {children}
    </div>
);

const Tags = ({ items }) => (
    <div className="modal-tags">
        {items.map((item) => (
            <span key={item}>{item}</span>
        ))}
    </div>
);

export default function Projects() {

    const [active, setActive] = useState(null);

    return (
        <section className="projects" id="projects">

            <div className="grid">

                {site.projects.map((p) => (

                    <div
                        key={p.id}
                        className="card project-card"
                        onClick={() => setActive(p)}
                    >

                        <h3>{p.title}</h3>

                        <p className="project-summary">
                            {p.description}
                        </p>

                        <Tags items={p.stack} />

                    </div>

                ))}

            </div>


            {active && (

                <div
                    className="modal-overlay"
                    onClick={() => setActive(null)}
                >

                    <div
                        className="modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="modal-close"
                            onClick={() => setActive(null)}
                        >
                            ×
                        </button>

                        <div className="modal-body">

                            <h2>{active.title}</h2>

                            <p className="modal-description">
                                {active.description}
                            </p>

                            <Section title="Development Period">
                                <p>{active.period}</p>
                            </Section>

                            <Section title="Tech Stack">
                                <Tags items={active.stack} />
                            </Section>

                            <Section title="Tools">
                                <Tags items={active.tools} />
                            </Section>

                            <Section title="Details">
                                <ul>
                                    {active.details.map((d, i) => (
                                        <li key={i}>{d}</li>
                                    ))}
                                </ul>
                            </Section>

                        </div>

                    </div>

                </div>

            )}

        </section>
    );
}