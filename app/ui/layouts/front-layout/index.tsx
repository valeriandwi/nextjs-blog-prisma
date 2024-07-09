import React from "react";

const FrontLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=" h-screen w-screen">
      <div className="flex flex-row space-x-2 items-center">
        <div
          className="w-1/2 h-screen bg-center rounded-r-xl"
          style={{ backgroundImage: "url(./assets/bg-login.jpg)" }}
        />
        <div className="w-1/2 p-16">{children}</div>
      </div>
    </div>
  );
};

export default FrontLayout;
