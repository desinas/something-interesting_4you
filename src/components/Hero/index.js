import React from "react";
import "./styles.scss";

function Hero(props) {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column is-5-desktop has-text-centered-touch">
            <header className="HeroComponent__header">
              <h1 className="title is-spaced is-1 has-text-weight-bold">
                {props.title}
              </h1>
              <p className="HeroComponent__subtitle subtitle">
                {props.subtitle}
              </p>
            </header>
          </div>
          <div className="column">
            <figure
              className="HeroComponent__image image"
              style={{
                maxWidth: props.imageMaxWidth
              }}
            >
              <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/japan_ubgk.svg" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
