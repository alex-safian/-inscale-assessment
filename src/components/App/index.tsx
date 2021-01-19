import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from "../Loading";
import Home from "../../pages/Home";
import About from "../../pages/About";

const App: React.FC = () => (
  <Router>
    <Suspense
      fallback={<Loading className="flex justify-center items-center h-full" />}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
