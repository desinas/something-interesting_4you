import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function BlogPost(props) {
  return (
    <article className="BlogPost">
      <header className="BlogPost__header">
        <div className="BlogPost__avatar image">
          <img src={props.author.avatar} />
        </div>
        <h1 className="BlogPost__title title has-text-weight-normal is-spaced is-size-4-mobile">
          <Link to="/">{props.title}</Link>
        </h1>
        <p className="BlogPost__subtitle subtitle is-6">
          <a className="author" href={props.author.url}>
            {props.author.name}
          </a>
          <span className="BlogPost__date">{props.date}</span>
        </p>
      </header>
      <div className="BlogPost__content content">{props.children}</div>
    </article>
  );
}

export default BlogPost;
