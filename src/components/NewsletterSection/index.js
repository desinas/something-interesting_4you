import React, { useState } from "react";
import "./styles.scss";

function NewsletterSection(props) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubscribed(true);
      // Add an API call here. For example:
      //API.newsletterSubscribe({ email });
    }
  };

  return (
    <section className="section is-medium">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <h1 className="title">{props.title}</h1>
            <p className="subtitle is-5 has-text-grey">{props.subtitle}</p>
          </div>
          <div className="column">
            {subscribed === false && (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="field is-grouped">
                  <div
                    className={
                      "NewsletterSection__email control is-expanded" +
                      (props.showInputIcon ? " has-icons-left" : "")
                    }
                  >
                    <input
                      className="input is-medium is-flat"
                      type="email"
                      placeholder={props.inputPlaceholder}
                      onChange={event => setEmail(event.target.value)}
                    />

                    {props.showInputIcon && (
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                      </span>
                    )}

                    {props.showSpamFreeArrow && (
                      <img
                        className="NewsletterSection__spam-free"
                        src="https://bulma.io/images/drawing/spam-free.png"
                      />
                    )}
                  </div>
                  <div className="control is-expanded">
                    <button className="button is-medium is-link">
                      <strong>{props.buttonText}</strong>
                    </button>
                  </div>
                </div>
              </form>
            )}

            {subscribed === true && <>{props.subscribedMessage}</>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
