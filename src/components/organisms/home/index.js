import React from "react";
import MainBody from "../../molecules/main-body";
import Footer from "../../molecules/footer";
import Header from "../../molecules/header";
import './homeRoot.css';

export default function Home(){
    return (
        <div>
            <Header></Header>
            <MainBody></MainBody>
            <Footer></Footer>
        </div>
    )
}