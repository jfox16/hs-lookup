import React from "react";
import { connect } from "react-redux";

import ClassFilterButton from "./ClassFilterButton";
import FilterFormLabel from "./FilterFormLabel";
import "./ClassFilter.css";

import { setFilterValue } from "store/actions";

const classIcons = {
  demonhunter: require("img/class-icons/demonhunter.png"),
  druid: require("img/class-icons/druid.png"),
  hunter: require("img/class-icons/hunter.png"),
  mage: require("img/class-icons/mage.png"),
  paladin: require("img/class-icons/paladin.png"),
  priest: require("img/class-icons/priest.png"),
  rogue: require("img/class-icons/rogue.png"),
  shaman: require("img/class-icons/shaman.png"),
  warlock: require("img/class-icons/warlock.png"),
  warrior: require("img/class-icons/warrior.png"),
  neutral: require("img/class-icons/neutral.png"),
};

const classColors = {
  demonhunter: "hsl(135, 63%, 35%)",
  druid: "hsl(30, 55%, 50%)",
  hunter: "#2e9c24",
  mage: "#4e9ec7",
  paladin: "#e8d73a",
  priest: "#e8e5c8",
  rogue: "#7d7a80",
  shaman: "#1d3396",
  warlock: "#593380",
  warrior: "#d41d0d",
  neutral: "#75665d",
};

function ClassFilter({ metadata, filter, setFilterValue }) {
  const toggleClass = (classSlug) => {
    if (filter.classes) {
      // if it's in the list of classes, remove it
      if (filter.classes.includes(classSlug)) {
        setFilterValue(
          "classes",
          filter.classes.filter((item) => item !== classSlug)
        );
      }
      // if not, add it
      else {
        setFilterValue("classes", [...filter.classes, classSlug]);
      }
    }
    // if classes filter doesn't exist, create it
    else {
      setFilterValue("classes", [classSlug]);
    }
  };

  return (
    <div>
      <FilterFormLabel label="CLASS" />
      <div className="ClassFilter">
        {metadata.classes.map((hsClass) => (
          <ClassFilterButton
            key={"ClassFilterButton-" + hsClass.slug}
            hsClass={hsClass}
            image={classIcons[hsClass.slug]}
            borderColor={classColors[hsClass.slug]}
            selected={filter.classes && filter.classes.includes(hsClass.slug)}
            darkened={
              filter.classes &&
              filter.classes.length > 0 &&
              !filter.classes.includes(hsClass.slug)
            }
            onClick={() => toggleClass(hsClass.slug)}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    metadata: state.data.metadata,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { setFilterValue })(ClassFilter);
