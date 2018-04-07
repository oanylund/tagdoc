import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { ThemeProvider } from "tagdoc-ui-components";

import Header from "./components/Header";
import TagDoc from "./pages/TagDoc";
import Playground from "./pages/Playground";
import Clipboard from "./components/Clipboard";

const store = configureStore();

const Partials = () => <p>partials</p>;
const Export = () => <p>export</p>;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <ThemeProvider>
            <div>
              <Header />
              <Switch>
                <Route path="/tagdoc" component={TagDoc} />
                <Route path="/partials" component={Partials} />
                <Route path="/playground" component={Playground} />
                <Route path="/export" component={Export} />
                <Redirect to="/tagdoc" from="/" exact />
              </Switch>
              <Clipboard />
            </div>
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
