import React from "react";
import { connect } from "react-redux";

import FilterFormLabel from "./FilterFormLabel";
import Dropdown from "components/formComponents/Dropdown";

import { setFilterValue } from "store/actions";

function RarityFilter({ metadata, filter, setFilterValue }) {
  const options = [{ label: "Any", value: "" }];
  metadata.rarities &&
    metadata.rarities.forEach((rarity) => {
      options.push({ label: rarity.name, value: rarity.slug });
    });

  return (
    <div>
      <FilterFormLabel label="RARITY" />
      <Dropdown
        options={options}
        onChange={(e) => setFilterValue("rarity", e.target.value)}
        value={filter.rarity || ""}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    metadata: state.data.metadata,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { setFilterValue })(RarityFilter);
