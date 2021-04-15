import "./default.scss"
import { Route, Switch } from "react-router"

//layouts
import MainLayout from './components/layouts/MainLayout/MainLayout';

//pages
import Homepage from "./pages/HomePage/Homepage";

function Routes() {
  return (
      <Switch>
          <Route exact path="/">
            <MainLayout>
              <Homepage />
            </MainLayout>
          </Route>
          
        </Switch>
  );
}

export default Routes;
