import "./App.css";
import Index from "./pages/Index";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
