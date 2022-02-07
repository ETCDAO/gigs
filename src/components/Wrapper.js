import { Link } from "gatsby";
import React from "react";
import "twin.macro";

const Wrapper = ({ children }) => (
  <div tw="max-w-screen-md mx-auto p-10">
    <div tw="text-3xl text-center mb-10">
      <Link tw="hover:underline" to="/">
        ETCDAO Gigs
      </Link>
    </div>
    {children}
  </div>
);

export default Wrapper;
