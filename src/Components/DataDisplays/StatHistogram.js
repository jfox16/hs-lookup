import React, { Component } from 'react';
import './StatHistogram.css';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalRectSeries} from 'react-vis';


class StatHistogram extends Component {

  constructor(props) {
    super(props);

    this.state = {
      maxValue: null
    }
  }

  histogramify(data, minX, maxX) {
    const barWidth = 0.9;

    let resultArr = [];

    // If not enough X values, pad with 0 height values
    let diff = maxX - minX;
    if (diff < 5) {
      let left = Math.max(maxX-5, 0);
      let right = left + 5;
      for (let i = left; i <= right; i++) {
        resultArr.push({
          x0: i - barWidth/2,
          x: i + barWidth/2,
          y: 0
        })
      }
    }

    for (let key in data) {
      resultArr.push({
        x0: Number(key) - barWidth/2,
        x: Number(key) + barWidth/2,
        y: data[key]
      })
    }
    return resultArr;
  }

  renderYAxis(maxY) {
    if (!maxY) return;
    if (maxY >= 5) {
      return <YAxis />;
    }
    else {
      return <YAxis tickTotal={maxY} />;
    }
  }

  renderHorizontalGridLines(maxY) {
    if (!maxY) return;
    if (maxY >= 5) {
      return <HorizontalGridLines />;
    }
    else {
      return <HorizontalGridLines tickTotal={maxY} />;
    }
  }

  render() {
    return (
      <div>
        <XYPlot height={200} width={300}>
          <XAxis />
          {this.renderYAxis(this.props.maxY)}
          {this.renderHorizontalGridLines(this.props.maxY)}
          <VerticalRectSeries 
            color={this.props.color}
            data={this.histogramify(this.props.data, this.props.minX, this.props.maxX)}
          />
        </XYPlot>
      </div>
    );
  }
}

export default StatHistogram;