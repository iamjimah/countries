import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Countries from "./pages/Countries";
import Details from "./pages/Details";
import Home from "./pages/Home";




function App() {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/countries" component={Countries} />
        <Route path="/details/:name" component={Details}/>
      </Switch>
    </main>
  );
}

export default App;
