import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./component/HEADER";
import Home from "./page/HOME";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about-me">about me</Route>
        <Route path="/ProjetPaint">ceci est le projet paint</Route>
        <Route path="/ProjetCineWave">ceci est le projet Ciné-Wave</Route>
        <Route path="/ProjetReact">ceci est le projet E-Market</Route>
        <Route path="/cv">mon CV</Route>
        <Route path="*">Cette page n'existe pas </Route>
      </Switch>
    </div>
  );
}

export default App;
