import React, { Component } from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";
import { Card } from "react-bootstrap";

class Chart extends React.Component {
  render() {
    return (
      <div className="col-12 col-sm-6">
        <Card>
          <h5>First Pie Chart</h5>
          <ReactMinimalPieChart
            animate={true}
            animationDuration={500}
            animationEasing="ease-out"
            cx={50}
            cy={50}
            data={[
              {
                color: "#E38627",
                title: "One",
                value: 10
              },
              {
                color: "#C13C37",
                title: "Two",
                value: 15
              },
              {
                color: "#6A2135",
                title: "Three",
                value: 20
              },
              {
                color: "#f00",
                title: "Four",
                value: 40
              }
            ]}
            label={false}
            labelPosition={50}
            lengthAngle={360}
            lineWidth={100}
            onClick={undefined}
            onMouseOut={undefined}
            onMouseOver={undefined}
            paddingAngle={0}
            radius={50}
            rounded={false}
            startAngle={0}
            style={{
              height: "300px"
            }}
            viewBoxSize={[100, 100]}
          />
        </Card>
      </div>
    );
  }
}

export default Chart;
