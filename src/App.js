import React, { Component } from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader"

import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./containers/About"
import NoRouteMatch from "./containers/404"
import ServiceCatalog from "./containers/ServiceCatalog"
import ServiceDetail from "./containers/ServiceDetail"
import SubscribeModal from "./containers/SubscribeModal"
import ServiceDetailPreviewCode from "./containers/ServiceDetailPreviewCode"

import "./stylesheets/main.scss"

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Header />

          <Switch>
            <Route path="/" exact component={() => <ServiceCatalog />} />
            <Route path="/service-detail" exact component={ServiceDetail} />
            <Route path="/about" component={About} />
            <Route path="/" exact component={ServiceCatalog} />
            <Route
              path="/service-detail-preview-code"
              exact
              component={ServiceDetailPreviewCode}
            />
            <Route path="/subscribe-modal" component={SubscribeModal} />
            <Route component={NoRouteMatch} />
          </Switch>

          <Footer />
        </div>
      </HashRouter>
    )
  }
}

export default hot(module)(App)
