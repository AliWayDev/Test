import { Routes, Route } from "react-router-dom";
import { Layout } from "../presentation/layout/View";
import { UsersPage } from "../pages/Users";

import lazyLoad from "../components/hoc/lazyLoad";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={lazyLoad(UsersPage)} />
          {/* TODO add new routes(pages) and lazyLoad will work */}
        </Route>
      </Routes>
    </>
  );
};
export default Routers;
 