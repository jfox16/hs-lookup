import React from "react";
import SimpleBar from "simplebar-react";

import FilterForm from "components/FilterForm";

import { DESKTOP_HEADER_HEIGHT, SIDEBAR_WIDTH } from "globalConstants";

import "./Sidebar.css";

const Sidebar = ({ children }) => {
  return (
    <div
      className="Sidebar"
      style={{ marginTop: DESKTOP_HEADER_HEIGHT, width: SIDEBAR_WIDTH }}
    >
      <SimpleBar autoHide={true} style={{ height: "100%", padding: "0 8px" }}>
        <FilterForm />
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
