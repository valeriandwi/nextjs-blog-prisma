import React from "react";
import FrontLayout from "../ui/layouts/front-layout";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <FrontLayout>{children}</FrontLayout>;
};

export default Layout;
