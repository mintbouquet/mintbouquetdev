import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import PricingPage from "./pricing";
import ContactPage from "./contact";
import DashboardPage from "./dashboard";
import AuthTypePage from "./authtype";
import { Switch, Route, Router } from "./../util/router.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";
import logo from "./../images/logo-mintbouquet-h-light.svg";
import logo2 from "./../images/logo-mintbouquet-light.svg";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="primary"
            variant="dark"
            expand="md"
            logo={logo}
          ></NavbarCustom>

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/auth/:type" component={AuthTypePage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Footer
            bg="primary"
            textColor="white"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            description="Manage your cannabis flower"
            copyright="© 2020 Mint Bouquet App"
            logo={logo2}
          ></Footer>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
