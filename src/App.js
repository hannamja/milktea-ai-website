import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "~/routes/routes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
function App() {
  const currentUser = useSelector((state) => state.user.current);
  
  return (
    <>
      <Routes>
        {publicRoutes.map((route, i) => {
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          const Page = route.component;
          return (
            <Route
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
              key={i}
            />
          );
        })}
        {privateRoutes.map((route, i) => {
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          const Page = route.component;
          return (
            <Route
              path={route.path}
              element={
                currentUser.status==='success' ? (
                  <Layout>
                    <Page />
                  </Layout>
                ) : (
                  <Navigate to="/" />
                )
              }
              key={i}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
