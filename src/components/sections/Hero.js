import { site } from "../content/site";

export function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="inner hero-inner">

                <div className="hero-left">
          <span className="hero-role">
            {site.role}
          </span>

                    <h1 className="hero-title">
                        안녕하세요,<br />
                        저는 <strong>{site.name}</strong>입니다.
                    </h1>

                    <p className="hero-description">
                        사용자 경험을 중심으로 생각하는 개발자입니다.
                        <br />
                        React 기반으로 구조적인 웹 서비스를 만듭니다.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn primary">
                            프로젝트 보기
                        </a>

                        <a
                            href={site.resumeLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn secondary"
                        >
                            이력서 다운로드
                        </a>
                    </div>
                </div>

                <div className="hero-right"></div>

            </div>
        </section>
    );
}