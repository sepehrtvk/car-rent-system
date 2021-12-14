import "./App.css";
import Index from "./pages/Index";
import Layout from "./components/Layout/Layout";
import { Redirect, Route, Switch } from "react-router";
import AuthPage from "./pages/auth";
import CarDetail from "./components/Cars/CarDetail";
import AdminPanel from "./pages/adminPanel";
import AuthContext from "./store/auth-context";
import { useContext } from "react";
import AllCars from "./pages/allCars";
import Profile from "./pages/profile";

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
          <Route path="/allCars" exact>
            <AllCars />
          </Route>
          {authCtx.isLoggedIn  && (
            <Route path="/admin" exact>
              <AdminPanel />
            </Route>
          )}
          {authCtx.isLoggedIn  && (
            <Route path="/profile" exact>
              <Profile />
            </Route>
          )}
          <Redirect to="/"/>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
