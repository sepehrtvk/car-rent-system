import "./App.css";
import Index from "./pages/Index";
import Layout from "./components/Layout/Layout";
import { Redirect, Route, Switch } from "react-router";
import AuthPage from "./pages/auth";
import CarDetail from "./components/Cars/CarDetail";
import AdminPanel from "./pages/adminPanel";
import AuthContext from "./store/auth-context";
import { useContext } from "react";

function App() {
  const authCtx = useContext(AuthContext);

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
          {authCtx.isLoggedIn && localStorage.getItem("role") === "admin" && (
            <Route path="/admin" exact>
              <AdminPanel />
            </Route>
          )}
          <Redirect to="/"/>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
