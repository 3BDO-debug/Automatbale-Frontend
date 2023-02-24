import React from "react";
// layouts
import DashboardLayout from "./dashboard";
import LogoOnlyLayout from "./LogoOnlyLayout";

// --------------------------------------------------------------------------------------------

function LayoutGenerator(children) {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}

export default LayoutGenerator;
