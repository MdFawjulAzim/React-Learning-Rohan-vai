import React from "react";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

function MasterLayout(props) {
  return (
    <>
      <HeaderLayout />
      {props.children}
      <FooterLayout />
    </>
  );
}

export default MasterLayout;
