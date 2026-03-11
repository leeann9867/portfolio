import { site } from "../content/site";

export default function Blog() {

    return (

        <section className="blog" id="blog">

            <div className="grid">

                <a
                    className="card blog-card"
                    href={site.blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <h3>Blog</h3>

                    <p>{site.blog.name}</p>

                    <span className="blog-link">
            Visit Blog →
          </span>

                </a>

            </div>

        </section>

    );

}