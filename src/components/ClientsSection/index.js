import React from "react";
import Clients from "./../Clients";
import "./styles.scss";

function ClientsSection(props) {
  return (
    <section className="section">
      <div className="container">
        <header className="section-header has-text-centered">
          <h1 className="title is-spaced">{props.title}</h1>

          {props.subtitle && <p className="subtitle">{props.subtitle}</p>}
        </header>
        <Clients
          items={[
            {
              name: "Instagram",
              image: "https://cdn.worldvectorlogo.com/logos/instagram.svg",
              width: "150px"
            },
            {
              name: "Slack",
              image: "https://cdn.worldvectorlogo.com/logos/slack.svg",
              width: "135px"
            },
            {
              name: "Tinder",
              image: "https://cdn.worldvectorlogo.com/logos/tinder-1.svg",
              width: "90px"
            },
            {
              name: "Spotify",
              image: "https://cdn.worldvectorlogo.com/logos/spotify-1.svg",
              width: "135px"
            }
          ]}
        />
      </div>
    </section>
  );
}

export default ClientsSection;
