export function ProjectModal({ open, onClose, project }) {
    if (!open || !project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >

                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <h3 className="modal-title">
                    {project.title}
                </h3>

                <p className="modal-description">
                    {project.description}
                </p>

                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="modal-link"
                    >
                        프로젝트 보기
                    </a>
                )}

            </div>
        </div>
    );
}