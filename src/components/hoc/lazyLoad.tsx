import React, { Suspense } from "react";
import Loader from "../Loader";

const lazyLoad = (Component: any): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

export default lazyLoad;
