import "./default.scss"
import { Route, Switch } from "react-router"

//layouts
import MainLayout from './components/layouts/MainLayout/MainLayout';

//pages
import Homepage from "./pages/HomePage/Homepage";
import ProductPage from "./pages/ProductPage/ProductPage";
import PrductDescriptionPage from "./pages/ProductDescriptionPage/ProductDescriptionPage"
import CartPage from './pages/CartPage/CartPage'
import WishListpage from "./pages/WishList/WishListPage";
import OrderPage from './pages/OrderPage/OrderPage';
import ThankyouPage from './pages/ThankyouPage/ThankyouPage';

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
          <Route  path="/productsdiscription/:category/:productId">
            <MainLayout>
            <PrductDescriptionPage />
            </MainLayout>
          </Route>
          <Route  path="/cart">
            <MainLayout>
            <CartPage />
            </MainLayout>
          </Route>
          <Route  path="/address">
            <MainLayout>
            <OrderPage/>
            </MainLayout>
          </Route>
          <Route  path="/thankyou">
            <MainLayout>
            <ThankyouPage/>
            </MainLayout>
          </Route>
          <Route path="/wishlist">
            <MainLayout>
              <WishListpage />
            </MainLayout>
          </Route>
        </Switch>
  );
}

export default Routes;
