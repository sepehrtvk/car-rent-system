import "./App.css";
import Index from "./pages/Index";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router";
import AuthPage from "./pages/auth";
import CarDetail from './components/Cars/CarDetail';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/cars/:carId">
            <CarDetail />
          </Route>
          <Route path="/auth" exact>
            <AuthPage />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
