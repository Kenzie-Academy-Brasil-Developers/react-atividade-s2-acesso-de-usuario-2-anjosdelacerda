import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Customer from "./pages/customer";
import Company from "./pages/company";
import { Container, GlobalStyle } from "./estilos/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container containerWidth="300px">
        <div className="universal">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/customer/:id">
              <Customer />
            </Route>
            <Route exact path="/company/:id">
              <Company />
            </Route>
          </Switch>
        </div>
      </Container>
    </>
  );
}

export default App;
