import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

import styled from "styled-components";

const StyledMain = styled.main`
    width: min(100%, 1000px);
    padding-inline: 16px;
    margin-inline: auto;
    /* border: 1px solid; */
`;

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <StyledMain>{children || <Outlet />}</StyledMain>
    </div>
  );
};

export default MainLayout;
