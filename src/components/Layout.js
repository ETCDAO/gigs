import { Link } from "gatsby";
import React from "react";
import GlobalStyles from "./../styles/GlobalStyles";
import Wrapper from "./Wrapper";

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <Wrapper>{children}</Wrapper>
  </div>
);

export default Layout;
