import React, { useState } from "react";
import { connect } from "react-redux";
import "./KeywordDisplay.css";
import { MdExpandLess } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import IconButton from "components/IconButton";

function KeywordDisplay({ cards, keywordTotals, isMobile }) {
  const [showMore, setShowMore] = useState(false);

  if (!cards || !keywordTotals) {
    return <></>;
  }

  if (!keywordTotals.shouldBeDisplayed) {
    return <></>;
  }

  let keywordsToShow = [];

  Object.keys(keywordTotals.keywordStats).forEach((key) => {
    if (keywordTotals.keywordStats[key].count !== 0) {
      keywordsToShow.push(key);
    }
  });

  const makePercentage = (decimalValue) => {
    const percent = decimalValue * 100;

    if (percent < 0.2) {
      return percent.toFixed(2) + "%";
    } else {
      return percent.toFixed(1) + "%";
    }
  };

  let displayItems = keywordsToShow.map((keyword) => {
    const total = keywordTotals.keywordStats[keyword];
    const decimal = total.count / cards.length;
    const name = total.name;
    return { name, decimal };
  });

  displayItems = displayItems.sort((a, b) => a.decimal < b.decimal);

  if (isMobile && !showMore) {
    displayItems = displayItems.slice(0, 6);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div className="KeywordDisplay">
        <div className="Keywords">
          {displayItems.map((item) => {
            return (
              <div className="KeywordDisplayDiv" key={item.name}>
                <p>{item.name}</p>
                <p className="KeywordPercentage">
                  {makePercentage(item.decimal)}
                </p>
              </div>
            );
          })}
          <div className="KeywordDisplayDiv">
            <p>One Card</p>
            <p className="KeywordPercentage">
              {makePercentage(1 / cards.length)}
            </p>
          </div>
          <div className="KeywordDisplayDiv">
            <p>Discover One Card</p>
            <p className="KeywordPercentage">
              {makePercentage(3 / cards.length)}
            </p>
          </div>
        </div>
        {isMobile && (
          <div style={{ textAlign: "center" }}>
            <IconButton
              onClick={() => setShowMore(!showMore)}
              style={{ fontSize: 24 }}
            >
              {showMore ? <MdExpandLess /> : <FiMoreHorizontal />}
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.renderData.isMobile,
  };
};

export default connect(mapStateToProps)(KeywordDisplay);
