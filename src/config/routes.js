const products = "/san-pham";
const routes = {
  home: "/",
  products: `${products}/:category/*`,
  productDetail: "/products/:id",
  admin: "/admin",
  customer: "/customer/*",
  customer_register: "/customer/register"
};
export default routes;
