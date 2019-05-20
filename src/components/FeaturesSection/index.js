import React from "react";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <section
      className="section is-medium"
      style={{
        backgroundColor: props.backgroundColor
      }}
    >
      <div className="container">
        <div className="section-header has-text-centered">
          <h1 className="title is-spaced">{props.title}</h1>

          {props.subtitle && <h2 className="subtitle">{props.subtitle}</h2>}
        </div>
        <div className="FeaturesSection__frame">
          <Features
            columns={2}
            items={[
              {
                title: "Lorem Ipsum",
                body:
                  "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                image:
                  "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/fish_bowl_uu88.svg"
              },
              {
                title: "Lorem Ipsum",
                body:
                  "Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus.",
                image:
                  "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/directions_x53j.svg"
              },
              {
                title: "Lorem Ipsum",
                body:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper",
                image:
                  "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Stability_ball_b4ia.svg"
              },
              {
                title: "Lorem Ipsum",
                body:
                  "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo",
                image:
                  "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/personal_settings_kihd.svg"
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
