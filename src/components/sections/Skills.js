import { site } from "../content/site";
import { useState } from "react";

export default function Skills() {

    const [active, setActive] = useState(null);

    const toggleSkill = (skill) => {
        setActive(active === skill ? null : skill);
    };

    return (
        <section className="skills-section" id="skills">

            <div className="about-grid">

                {site.skills.map((skill) => (

                    <div
                        key={skill.name}
                        className="card skill-card"
                        onClick={() => toggleSkill(skill.name)}
                    >

                        <h3>{skill.name}</h3>

                        {active === skill.name && (
                            <p className="skill-description">
                                {skill.description}
                            </p>
                        )}

                    </div>

                ))}

            </div>

        </section>
    );
}