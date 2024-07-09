import React from "react";
import MainLayout from "../ui/layouts/main-layout";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
