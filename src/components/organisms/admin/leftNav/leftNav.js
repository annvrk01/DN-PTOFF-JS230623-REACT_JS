import React, { Component } from "react";
import HomeCopy from "./../homeCopy/homeCopy";
import Services from "./../services/service";
import LineChart from "./../charts/lineChart";
import PieChart from "./../charts/charts";
import Search from "./../search/search";
import Adddata from "./../CurdTable/addData";

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
import CustomerHome from "../../customer-home";
import ProductDetail from "../../product-detail";

export default function LeftNav() {

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" exact element={<CustomerHome />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <React.Fragment>
        {/* <SideNav onSelect={selected => {
            const to = "/" + selected;
            if (location.pathname !== to) {
              navigate(to);
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
          </SideNav> */}

        <Route path="/admin" element={<HomeCopy />} />
        <Route path="/admin/Services" element={<Services />} />
        <Route path="/admin/LineChart" element={<LineChart />} />
        <Route path="/admin/PieChart" element={<PieChart />} />

        <Route path="/admin/Search" element={<Search />} />
        <Route path="/admin/Adddata" element={<Adddata />} />
      </React.Fragment> 


      <Route
          render={({ location, history }) => (
            <React.Fragment>
              <SideNav onSelect={selected => {
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
                <Route path="/" exact element={<HomeCopy />} />
                <Route path="/home" element={<HomeCopy />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/LineChart" element={<LineChart />} />
                <Route path="/PieChart" element={<PieChart />} />

                <Route path="/Search" element={<Search />} />
                <Route path="/Adddata" element={<Adddata />} />
              </main>
            </React.Fragment>
          )}
        />
    </Routes>
  );
}
