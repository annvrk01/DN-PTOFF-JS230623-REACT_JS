import React, { Component } from "react";
import ThumbBox from "../thumbBox/thumbBox";
//import Charts from "../charts/charts";
import Linechart from "../charts/lineChart";
import DoughnutExample from "../charts/doughnut";
import PieExample from "../charts/piechart";
import NavBarHome from "../../../molecules/navbar/navbar";

export default function HomeCopy() {

  return (
    <>
      <div className="">
        <NavBarHome></NavBarHome>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ThumbBox />
            <div className="row">
              <PieExample />
              <Linechart />
              <DoughnutExample />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

