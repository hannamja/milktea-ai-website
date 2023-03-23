import Logout from "~/layouts/components/Logout/Logout";
import Account from "~/pages/Customer/Account/Account";
import AccountCustomer from "~/pages/Customer/AccountCustomer/AccountCustomer";
import AddressBook from "~/pages/Customer/AddressBook/AddressBook";
import Order from "~/pages/Customer/Order/Order";
import ProductFavorite from "~/pages/Customer/ProductFavorite/ProductFavorite";
const { default: images } = require("~/assets/images/accountMenu");
export const listItems = [
  {
    image: images.userCard,
    title: "Thông tin cá nhân",
    link: `account`,
    element: <Account />,
  },
  {
    image: images.userCard,
    title: "Khách hàng thành viên",
    link: `account-customer`,
    element: <AccountCustomer />,
  },
  {
    image: images.map,
    title: "Sổ địa chỉ",
    link: `address-book`,
    element: <AddressBook />,
  },
  {
    image: images.cart,
    title: "Đơn hàng",
    link: `order`,
    element: <Order />,
  },
  {
    image: images.heart,
    title: "Sản phẩm yêu thích",
    link: `product-favorite`,
    element: <ProductFavorite />,
  },
  {
    image: images.store,
    title: "Sản phẩm đã đặt",
    link: `ordered-product`,
    element: <>Sản phẩm đã đặt</>,
  },
  {
    image: images.cleark,
    title: "Trung tâm trợ giúp",
    link: `help-center`,
    element: <>Trung tâm trợ giúp</>,
  },
  {
    image: images.logout,
    title: "Đăng xuất",
    link: `logout`,
    element: <Logout />,
  },
];
