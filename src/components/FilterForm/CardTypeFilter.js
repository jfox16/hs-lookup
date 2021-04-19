import React from "react";
import { connect } from "react-redux";

import FilterFormLabel from "./FilterFormLabel";
import Dropdown from "components/formComponents/Dropdown";

import { setFilterValue } from "store/actions";

function CardTypeFilter({ metadata, filter, setFilterValue }) {
  const options = [{ label: "Any", value: "" }];
  metadata.types &&
    metadata.types.forEach((cardType) => {
      options.push({ label: cardType.name, value: cardType.slug });
    });

  return (
    <div>
      <FilterFormLabel label="CARD TYPE" />
      <Dropdown
        options={options}
        onChange={(e) => setFilterValue("cardType", e.target.value)}
        value={filter.cardType || ""}
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

export default connect(mapStateToProps, { setFilterValue })(CardTypeFilter);
