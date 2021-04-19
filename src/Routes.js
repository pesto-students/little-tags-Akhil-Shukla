import "./default.scss"
import { Route, Switch } from "react-router"

//layouts
import MainLayout from './components/layouts/MainLayout/MainLayout';

//pages
import Homepage from "./pages/HomePage/Homepage";
import ProductPage from "./pages/ProductPage/ProductPage";
import PrductDescriptionPage from "./pages/ProductDescriptionPage/ProductDescriptionPage"

function Routes() {
  return (
      <Switch>
          <Route exact path="/">
            <MainLayout>
              <Homepage />
            </MainLayout>
          </Route>
          <Route path="/products/:category">
            <MainLayout>
              <ProductPage />
            </MainLayout>
          </Route>
          <Route  path="/productsdiscription/:productId">
            <MainLayout>
            <PrductDescriptionPage />
            </MainLayout>
          </Route>
        </Switch>
  );
}

export default Routes;
