import React from "react";
import "./styles.scss";

function Features(props) {
  return (
    <div className="Features columns is-multiline is-centered is-gapless">
      {props.items.map((item, index) => (
        <div
          className={
            "Features__column column" +
            (props.columns === 1 ? " is-full" : "") +
            (props.columns === 2 ? " is-half" : "") +
            (props.columns === 3 ? " is-one-third" : "") +
            (props.columns === 4 ? " is-one-quarter" : "")
          }
          key={index}
        >
          <div className="Features__item has-text-centered">
            <figure className="Features__image image">
              <img src={item.image} />
            </figure>
            <h1 className="title is-4 is-spaced">{item.title}</h1>
            <h2 className="subtitle is-6">{item.body}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
