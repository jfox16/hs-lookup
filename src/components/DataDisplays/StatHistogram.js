import React from "react";
import Skeleton from "react-loading-skeleton";

import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { withResizeDetector } from "react-resize-detector";

const StatHistogram = ({ width, data, color, minX, maxX, isLoading }) => {
  if (isLoading) {
    return <Skeleton height={160} width={width} />;
  }

  // If there are less than 5 values, pad some values to the beginning and end to make it look better.
  if (maxX - minX < 4) {
    if (minX > 0) minX--;
    else maxX++;
    maxX++;
  }

  const chartData = [];

  for (let i = minX; i <= maxX; i++) {
    chartData.push({
      name: i,
      count: data[i] ? data[i] : 0,
    });
  }

  return (
    <div>
      <BarChart
        width={width}
        height={160}
        data={chartData}
        margin={{ top: 15, left: -20, right: 10, bottom: 10 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis dataKey="count" />
        {/* <Tooltip /> */}
        <Bar dataKey="count" fill={color} />
      </BarChart>
    </div>
  );
};

export default withResizeDetector(StatHistogram);
