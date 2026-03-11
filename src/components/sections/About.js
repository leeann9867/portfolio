import { site } from "../content/site";

export default function About() {
    return (
        <section className="about" id="about">

            <div className="about-grid">

                {/* INTRO CARD */}
                <div className="card intro-card">
                    <h1>{site.name}</h1>
                    <h2>{site.role}</h2>
                    <p>{site.introduction}</p>
                </div>

                {/* EXPERIENCE CARD */}
                <div className="card">
                    <h3>Experience</h3>
                    <div className="exp-stats">
                        <div>
                            <span className="stat-number">{site.experience.years} </span>
                            <span className="stat-label">Years</span>
                        </div>
                        <div>
                            <span className="stat-number">{site.experience.projects} </span>
                            <span className="stat-label">Projects</span>
                        </div>
                    </div>
                </div>

                {/* SKILLS CARD */}
                <div className="card">
                    <h3>Skills</h3>
                    <div className="skills">
                        {site.skills.map(skill => (
                            <span key={skill.name}>{skill.name}</span>
                        ))}
                    </div>
                </div>

                {/* LINKS CARD */}
                <div className="card">
                    <h3>Links</h3>
                    <div className="links">
                        <a href={`mailto:${site.email}`}>Email</a>
                        <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
                        <a href={site.blog} target="_blank" rel="noreferrer">Blog</a>
                        <a href={site.resumeLink} target="_blank" rel="noreferrer">Resume</a>
                    </div>
                </div>

            </div>

        </section>
    );
}