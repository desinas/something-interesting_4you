import React from "react";
import Home from "./../Home";
import { Switch, Route, Router } from "react-router-dom";
import navigate from "./../../util/navigate.js";
import Hero from "./../Hero";
import FeaturesSection from "./../FeaturesSection";
import BlogSection from "./../BlogSection";
import ClientsSection from "./../ClientsSection";
import NewsletterSection from "./../NewsletterSection";
import "./styles.scss";

function App(props) {
  return (
    <Router history={navigate}>
      <>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            component={({ location }) => {
              return (
                <div style={{ padding: "20px" }}>
                  The page <code>{location.pathname}</code> could not be found
                  😿
                </div>
              );
            }}
          />
        </Switch>

        <Hero
          title="Κάτι που ίσως σας ενδιαφέρει"
          subtitle="Πληροφορίες για μεταχειρισμένα μηχανήματα βιοτεχνίας, που θα σας δώσουν την δυνατότητα επέκτασης των δραστηριοτήτων της επιχείρησής σας!"
          imageMaxWidth="600px"
          buttonText="Get Started"
          buttonSize="medium"
          buttonOnClick={() => {
            // Scroll down to pricing section
            const el = document.getElementById("pricing");
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
        <FeaturesSection
          title="Features"
          subtitle=""
          backgroundColor="#f7f7f7"
        />
        <BlogSection />
        <ClientsSection title="You're in good company" subtitle="" />
        <NewsletterSection
          title="Newsletter"
          subtitle="Stay up to date on important announcements"
          buttonText="Subscribe"
          inputPlaceholder="Enter your email"
          showInputIcon={true}
          showSpamFreeArrow={true}
          subscribedMessage="You are now subscribed!"
        />
      </>
    </Router>
  );
}

export default App;
