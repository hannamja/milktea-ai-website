import { Navigate } from "react-router-dom";
import config from "~/config";
import DefaultLayout from "~/layouts/DefaultLayout";
import SidebarLayout from "~/layouts/SidebarLayout/SidebarLayout";
import AdminPage from "~/pages/Admin/AdminPage";
import Customer from "~/pages/Customer/Customer";
import Home from "~/pages/Home/HomePage";
import ProductDetail from "~/pages/ProductDetail/ProductDetail";
import Products from "~/pages/Products/Products";
import Account from "~/pages/Customer/Account/Account";

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: DefaultLayout },
  {
    path: config.routes.products,
    component: Products,
    layout: SidebarLayout,
  },
  { path: config.routes.admin, component: AdminPage },
  {
    path: config.routes.productDetail,
    component: ProductDetail,
    layout: DefaultLayout,
  },
  {
    path: "/*",
    component: () => <Navigate to={"/"} />,
  },
  {path: config.routes.customer_register, component: Account, layout: DefaultLayout },
];
const privateRoutes = [{ path: config.routes.customer, component: Customer }];

export { publicRoutes, privateRoutes };
