import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card } from "react-bootstrap";

const data = {
  labels: ["Red", "Green", "Yellow", "Color 1", "Color 2", "Color 3"],
  datasets: [
    {
      data: [300, 50, 100, 20, 80, 200],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#db3d44",
        "#4257b2",
        "#FFCE56"
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#db3d44",
        "#4257b2",
        "#36A2EB"
      ]
    }
  ]
};

class DoughnutExample extends React.Component {
  render() {
    return (
      <div className="col-12 col-sm-6">
        <Card>
          <h5>Doughnut Example</h5>
          <Doughnut data={data} />
        </Card>
      </div>
    );
  }
}

export default DoughnutExample;
