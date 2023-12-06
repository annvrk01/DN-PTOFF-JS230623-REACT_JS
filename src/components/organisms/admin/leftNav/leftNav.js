import React, { Component } from "react";
import HomeCopy from "./../homeCopy/homeCopy";
import Services from "./../services/service";
import LineChart from "./../charts/lineChart";
import PieChart from "./../charts/charts";
import Search from "./../search/search";
import Adddata from "../CurdTable/userManagement";

import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import homeicon from "./home.png";
import serviceicon from "./liquidity.png";
import assisticon from "./CustAssist_n.png";
import searchicon from "./magnifying-glass-2.png";
import addUsericon from "./user.png";
import Chart from 'chart.js/auto';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import ProductDetail from "../../product-detail";

export default function LeftNav() {
  const reactLocation = useLocation();
  const reactNavigate = useNavigate();

  return (
    <Routes>     
       
      {/* <Route path="/" exact element={<HomeCopy />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} /> */}

      <Route path="/home" element={<HomeCopy />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/LineChart" element={<LineChart />} />
      <Route path="/PieChart" element={<PieChart />} />

      <Route path="/Search" element={<Search />} />
      <Route path="/Adddata" element={<Adddata />} />

      {/* <Route basename="/admin">
        <React.Fragment>
          <SideNav onSelect={selected => {
            console.log('onSelect SideNav');
            const to = "/" + selected;
            if (location.pathname !== to) {
              history.push(to);
            }
          }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                <NavIcon>
                  <img src={homeicon} />
                </NavIcon>
                <NavText>Home</NavText>
              </NavItem>
              <NavItem eventKey="Services">
                <NavIcon>
                  <img src={serviceicon} />
                </NavIcon>
                <NavText>Charts</NavText>
                <NavItem eventKey="LineChart">
                  <NavText>Line Chart</NavText>
                </NavItem>
                <NavItem eventKey="PieChart">
                  <NavText>Pie Chart</NavText>
                </NavItem>
              </NavItem>

              <NavItem eventKey="#">
                <NavIcon>
                  <img src={assisticon} />
                </NavIcon>
                <NavText>Form</NavText>
              </NavItem>
              <NavItem eventKey="Search">
                <NavIcon>
                  <img src={searchicon} />
                </NavIcon>
                <NavText>Search</NavText>
              </NavItem>
              <NavItem eventKey="Adddata">
                <NavIcon>
                  <img src={addUsericon} />
                </NavIcon>
                <NavText>Adddata</NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>

          <main className="mainWrap">
            
          </main>
        </React.Fragment>
      </Route> */}
    </Routes>
  );
}
