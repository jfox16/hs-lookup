import React from "react";
import { connect } from "react-redux";
import SimpleBar from "simplebar-react";
import { CgClose } from "react-icons/cg";

import FilterForm from "components/FilterForm";
import IconButton from "components/IconButton";
import WhiteButton from "components/WhiteButton";

import { setFilterFormOpen } from "store/actions";

import "./MobileFilterForm.css";

const MobileFilterForm = ({ setFilterFormOpen }) => {
  return (
    <div className="MobileFilterForm fullscreen">
      <div className="MobileFilterHeader">
        <h3>Filters</h3>
        <IconButton onClick={() => setFilterFormOpen(false)}>
          <CgClose />
        </IconButton>
      </div>
      <div className="MobileFilterContent">
        <SimpleBar style={{ height: "100%", padding: "0 8px" }}>
          <FilterForm />
        </SimpleBar>
      </div>
      <div className="MobileFilterFooter">
        <WhiteButton
          onClick={() => setFilterFormOpen(false)}
          style={{ width: 300 }}
        >
          VIEW RESULTS
        </WhiteButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setFilterFormOpen })(
  MobileFilterForm
);
