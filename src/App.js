import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
// import  HomeTemplate  from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
// import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import Checkout from "./pages/Checkout/Checkout";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading/Loading";

const CheckoutTemplate = lazy(() =>
  import("./templates/CheckoutTemplate/CheckoutTemplate")
);
const HomeTemplateLazy = lazy(() =>
  import("./templates/HomeTemplate/HomeTemplate")
);
const LoginLazy = lazy(() => import("./pages/Login/Login"));
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Suspense fallback={<Loading />}>
          <HomeTemplateLazy path="/" exact Component={Home} />
          <HomeTemplateLazy path="/home" exact Component={Home} />
          <HomeTemplateLazy path="/contact" exact Component={Contact} />
          <HomeTemplateLazy path="/news" exact Component={News} />
          <HomeTemplateLazy path="/detail/:id" exact Component={Detail} />
          <Route path="/login" component={LoginLazy} />
          <Route path="/register" component={Register} />
          <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
