import React from 'react'
import './StatHistogram.css'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalRectSeries
} from 'react-vis'
import { withResizeDetector } from 'react-resize-detector'

const StatHistogram = (props) => {
  const histogramify = (data, minX, maxX) => {
    const barWidth = 0.9

    let resultArr = []

    // If not enough X values, pad with 0 height values
    let diff = maxX - minX
    if (diff < 5) {
      let left = Math.max(maxX - 5, 0)
      let right = left + 5
      for (let i = left; i <= right; i++) {
        resultArr.push({
          x0: i - barWidth / 2,
          x: i + barWidth / 2,
          y: 0
        })
      }
    }

    for (let key in data) {
      resultArr.push({
        x0: Number(key) - barWidth / 2,
        x: Number(key) + barWidth / 2,
        y: data[key]
      })
    }
    return resultArr
  }

  const renderYAxis = (maxY) => {
    if (!maxY) return
    if (maxY >= 5) {
      return <YAxis />
    } else {
      return <YAxis tickTotal={maxY} />
    }
  }

  const renderHorizontalGridLines = (maxY) => {
    if (!maxY) return
    if (maxY >= 5) {
      return <HorizontalGridLines />
    } else {
      return <HorizontalGridLines tickTotal={maxY} />
    }
  }

  const width = props.width ? props.width : 0

  return (
    <div className="StatHistogramDiv">
      <XYPlot height={160} width={width}>
        <XAxis />
        {renderYAxis(props.maxY)}
        {renderHorizontalGridLines(props.maxY)}
        <VerticalRectSeries
          color={props.color}
          data={histogramify(props.data, props.minX, props.maxX)}
        />
      </XYPlot>
    </div>
  )
}

export default withResizeDetector(StatHistogram)
