import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


function TrangChu() {
    
    return (
        <div>
            <div className="header ">
                <div className="row ">
                    <div className="col-sm-3">
                        <div className="btn btn-default">
                            <img width="185" height="80" src="https://watchtimevn.com/wp-content/uploads/2022/08/logo.png"
                                className="custom-logo" alt="WatchTime"
                                sizes="(max-width: 300px) 100vw, 318px" />
                        </div>
                    </div>
                    <div className="col-sm-6">

                        <Navbar expand="lg" className="bg-body-tertiary">
                            <Container>

                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#gioithieu">Giới Thiệu</Nav.Link>
                                        <Nav.Link href="#donghonam">Đồng Hồ Nam</Nav.Link>
                                        <Nav.Link href="#donghonu">Đồng Hồ Nữ</Nav.Link>
                                        <Nav.Link href="#phukie">Phụ Kiện</Nav.Link>
                                        <Nav.Link href="#dichvu">Dịch Vụ</Nav.Link>
                                        <Nav.Link href="#blog">Blog</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>

                            <div className="col-sm-3">
                                <Navbar expand="lg" className="bg-body-tertiary">
                                    <Container>

                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="me-auto">
                                                <button> <Nav.Link href="http://localhost:3000/dangnhap"> Login</Nav.Link></button>
                                                <Nav.Link href="https://giohang">
                                                    <img height="25px"
                                                        src="https://th.bing.com/th/id/R.1e2ec62373ad1f74c47960a48b5b8a2c?rik=xY37k1lCt71xbA&riu=http%3a%2f%2fnhansamthanhnhan.com%2fupload%2ftiny%2fgif%2ft_hang.png&ehk=ZzLARj82ur%2bkEZxImFc2lYqX8F31bGvum1sF7a3umGs%3d&risl=&pid=ImgRaw&r=0" />
                                                </Nav.Link>


                                            </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </div>
                        </Navbar>
                    </div>
                </div>
            </div>



            <div className="trangchu">
                <img width="100%" src=" https://watchtimevn.com/wp-content/uploads/2022/08/slide-1.jpg"></img>
            </div>

            <Container>
                <Row>
                    <Col xs={12}><div className="body1" >
                        <h2 style={{ color: "rgb(85 55 55)", height: "60px", width: "40%", margin: " auto" }}>ĐỒNG HỒ CHÍNH HÃNG</h2>
                        <div className="titlle" style={{ color: "yellow", margin: "auto" }}>
                        </div>
                    </div>
                    </Col>
                </Row>

                <Row style={{ height: "130px" }}>
                    <Col xs={2}>
                        <div className="item">
                            <div className="item-1">
                                <img src="https://watchtimevn.com/wp-content/uploads/2022/08/seiko.png"></img>
                            </div>
                        </div> </Col>
                    <Col xs={2} style={{ width: "14.2857143%" }}>
                        <div className="item-2">
                            <img src=" https://watchtimevn.com/wp-content/uploads/2022/08/citizen.png"></img>
                        </div></Col>
                    <Col xs={1} style={{ width: "14.2857143%" }}><div className="item-3">
                        <img src="https://watchtimevn.com/wp-content/uploads/2022/08/matheytissot.png"></img>
                    </div> </Col>
                    <Col xs={1} style={{ width: "14.2857143%" }}>
                        <div className="item-4">
                            <img src="https://watchtimevn.com/wp-content/uploads/2022/08/Orient.png"></img>
                        </div> </Col>
                    <Col xs={1} style={{ width: "14.2857143%" }}> <div className="item-5">
                        <img src="https://watchtimevn.com/wp-content/uploads/2022/08/olympia.png"></img>
                    </div> </Col>
                    <Col xs={1} style={{ width: "14.2857143%" }}> <div className="item-6">
                        <img src="https://watchtimevn.com/wp-content/uploads/2022/08/ogiva.png"></img>
                    </div></Col>
                    <Col xs={1} style={{ width: "14.2857143%" }}> <div className="item-7">
                        <img src="https://watchtimevn.com/wp-content/uploads/2022/08/casio.png"></img>
                    </div></Col>
                </Row>
            </Container>


            <Container style={{ backgroundColor: "black" }}>
                <Row>
                    <Col xs={12}>
                        <div className="body2" >
                            <h2 style={{ color: "white", height: "50px", width: "35%", margin: " auto" }}> SẢN PHẨM BÁN CHẠY</h2>
                            <div className="titlle" style={{ color: "yellow", margin: "auto" }}>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="spbc">

                            <div className="spbc-1">
                                <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/10/ogival-og3357ajmsr-t-1-210x300.png"></img>


                                <marquee style={{ color: "white" }}>Ogival OG3357AJMSR-T</marquee>

                                <bdi style={{ padding: "30%;", color: "white" }}>18,766,800<span className="woocommerce-Price-currencySymbol">₫</span>
                                </bdi><bdi style={{ padding: "30%;", color: "white" }}>20,852,000<span
                                    className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                <div className="button-1" style={{ padding: "large", margin: "0px" }}>
                                    <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="spbc-2">
                            <img src="https://watchtimevn.com/wp-content/uploads/2022/10/og358-652agr-gl-210x300.png"></img><span>
                                <marquee style={{ color: "white" }}>Ogival OG358.652AGR-GL</marquee>
                                <bdi style={{ padding: "30%;", color: "white" }}>30,000,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                <bdi style={{ padding: "30%;", color: "white" }}>27,000,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                            </span>
                            <div className="button-2" style={{ padding: "large" }}>
                                <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="spbc-3">
                            <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/10/ra-ak0001s10b-1-214x300.png"></img>
                            <span style={{ color: "white" }} ></span>
                            <marquee style={{ color: "white" }}> Orient Đồng Hồ Orient Sun and MonGen 4 RA-AK0001S10B</marquee>

                            <bdi style={{ padding: "30%;", color: "white" }}>9,360,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                            <bdi style={{ padding: "30%;", color: "white" }}>8,411,400<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                            <div className="button-3" style={{ padding: "large" }}>
                                <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="spbc-4">
                            <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/08/mc1886av-1-221x300.jpg"></img><span>
                                <marquee style={{ color: "white" }}>Mathey Tissot Edmond Automatic MC1886Av</marquee>
                                <bdi style={{ padding: "30%;", color: "white" }}>30,225,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                            </span>
                            <div className="button-4" style={{ padding: "large" }}>
                                <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                            </div>
                        </div> </Col>
                    <Col xs={3} style={{ width: "20%" }} >  <div className="spbc-5">
                        <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/08/h1823chpln-1-221x300.png"></img>
                        <marquee style={{ color: "white" }}>Mathey Tissot TYPE 23 CHRONO QUARTZ H1823CHPLN </marquee>
                        <bdi style={{ padding: "30%;", color: "white" }}>12,076,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                        <div className="button-4" style={{ padding: "large" }}>
                            <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                        </div>
                    </div></Col>
                </Row>
            </Container>

            <Container style={{ backgroundColor: "white" }}>
                <Row>
                    <Col xs={12}>
                        <div className="body3">
                            <h2 style={{ color: "black", height: "20px", width: "27%", margin: " auto" }}>ĐỒNG HỒ CASIO</h2><br></br>

                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="DHC" style={{ height: "390px" }}>
                            <div className="DHC-1">
                                <img src="https://watchtimevn.com/wp-content/uploads/2022/08/ga-110gw-7a_l-ok-2-206x300.png"></img>
                                <marquee>CASIO G-SHOCK GA-110GW-7ADR</marquee>
                                <div className="gia-dhc-1">
                                    <bdi style={{ padding: "30%;", color: "black" }}>4,640,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                    <bdi style={{ padding: "30%;", color: "black" }}>4,181,400<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                </div>
                                <div className="button-1">
                                    <button style={{ color: "black", background: "white" }} > MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }}>
                        <div className="HDC-2">
                            <img src="https://watchtimevn.com/wp-content/uploads/2022/08/bga-160-1bdr20ava-2-210x300.png"></img>
                            <marquee>CASIO BGA-160-1BDR</marquee>
                            <div className="gia-DHC-2">
                                <bdi style={{ padding: "30%;", color: "black" }}>3,878,000<span
                                    className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                <bdi style={{ padding: "30%;", color: "black" }}>3,490,200<span
                                    className="woocommerce-Price-currencySymbol">₫</span></bdi>
                            </div>
                            <div className="button-2">
                                <button style={{ color: "black", background: "white" }} > MUA NGAY </button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} style={{ width: "20%" }}>
                        <div className="DHC-3">
                            <img src="https://watchtimevn.com/wp-content/uploads/2022/08/ga-110br-5a-ok-2-206x300.png"></img>
                            <marquee>CASIO G-SHOCK GA-110BR-5ADR</marquee>

                            <div className="gia-DHC-2">
                                <bdi style={{ padding: "30%;", color: "black" }}>5,100,000₫<span
                                    className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                <bdi style={{ padding: "30%;", color: "black" }}>4,590,000<span
                                    className="woocommerce-Price-currencySymbol">₫</span></bdi>
                            </div>
                            <button style={{ color: "black", background: "white" }} > MUA NGAY </button>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }}>
                        <div className="DHC-4">
                            <img src="https://watchtimevn.com/wp-content/uploads/2022/08/dong-ho-casio-bem-302l-7avdf-avatar-2-210x300.png"></img>
                            <marquee>CASIO BEM-302L-7AVDF</marquee>

                            <div className="gia-DHC-2">
                                <bdi style={{ padding: "30%;", color: "black" }}>3,200,200<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                <bdi style={{ padding: "30%;", color: "black" }}>2,898,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                            </div>
                            <button style={{ color: "black", background: "white" }} > MUA NGAY </button>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }}>
                        <div className="DHC-5">
                            <img src="https://watchtimevn.com/wp-content/uploads/2022/08/bga-160-4bdr20ava-2-210x300.png"></img>
                            <marquee>CASIO BGA-160-4BDR </marquee>
                            <div className="gia-DHC-2">
                                <bdi style={{ padding: "30%;", color: "black" }}>3,878,000<span
                                    className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                <bdi style={{ padding: "30%;", color: "black" }}>3,490,000<span
                                    className="woocommerce-Price-currencySymbol">₫</span></bdi>
                            </div>
                            <button style={{ color: "black", background: "white" }} > MUA NGAY </button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container style={{ backgroundColor: "black" }}>
                <Row>
                    <Col xs={12}>
                        <div className="body4" >
                            <h2 style={{ color: "white", height: "50px", width: "30%", margin: " auto" }}> ĐỒNG HỒ CITIZEN</h2>
                            <div className="titlle" style={{ color: "yellow", margin: "auto" }}>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="DHCTZ">

                            <div className="dhcitizen-1">
                                <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/08/citizen-aw1238-59e-2-210x300.png"></img>


                                <marquee style={{ color: "white" }}>CITIZEN AW1238-59E</marquee>

                                <bdi style={{ padding: "30%;", color: "white" }}>5,940,000<span className="woocommerce-Price-currencySymbol">₫</span>
                                </bdi><bdi style={{ padding: "30%;", color: "white" }}>5,346,000<span
                                    className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                <div className="button-1" style={{ padding: "large" }}>
                                    <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="dhcitizen-2">
                            <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/08/citizen-aw1232-12a-2-210x300.png"></img>

                            <marquee style={{ color: "white" }} >CITIZEN AW1232-12A</marquee>

                            <bdi style={{ padding: "30%;", color: "white" }}>5,588,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                            <bdi style={{ padding: "30%;", color: "white" }}>5,029,200<span className="woocommerce-Price-currencySymbol">₫</span></bdi>

                            <div className="button-2" style={{ padding: "large" }}>
                                <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} style={{ width: "20%" }}>
                        <div className="dhcitizen-3">
                            <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/08/citizen-au1043-00e-2-210x300.png"></img>

                            <marquee style={{ color: "white" }}>CITIZEN AU1043-00E</marquee>

                            <bdi style={{ padding: "30%;", color: "white" }}>5,830,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                            <bdi style={{ padding: "30%;", color: "white" }}>5,247,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>

                            <div className="button-3" style={{ padding: "large" }}>
                                <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                            </div>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }}>

                        <div className="dhcitizen-4">
                            <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/08/bk4054-61a-2-214x300.png"></img>

                            <marquee style={{ color: "white" }}>CITIZEN BK4054-61A</marquee>

                            <bdi style={{ padding: "30%;", color: "white" }}>2,700,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                            <bdi style={{ padding: "30%;", color: "white" }}>2,430,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>

                            <div className="button-4" style={{ padding: "large" }}>
                                <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                            </div>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }}>
                        <div className="dhcitizen-5">
                            <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/08/citizen-ar0070-51e-2-210x300.png"></img>

                            <marquee style={{ color: "white" }}  >CITIZEN AR0070-51E</marquee>

                            <bdi style={{ padding: "30%;", color: "white" }}>12,390,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                            <bdi style={{ padding: "30%;", color: "white" }}>5,247,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>

                            <div className="button-4" style={{ padding: "large" }}>
                                <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

            <Container style={{ backgroundColor: "white" }}>
                <Row>
                    <Col xs={12}>
                        <div className="body5">
                            <h2 style={{ color: "black", height: "20px", width: "42%", margin: " auto" }}> ĐỒNG HỒ MATHEY TISSOT </h2><br></br>

                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="MTT" style={{ height: "390px" }}>
                            <div className="MTT-1">
                                <img src="https://watchtimevn.com/wp-content/uploads/2022/08/h1970chas-2-171x300.jpg"></img>
                                <marquee style={{ color: "black" }}>MATHEY TISSOT 1970 H1970CHABU</marquee>
                                <div className="gia-mtt-1">
                                    <bdi style={{ padding: "30%;", color: "black" }}>8,158,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                </div>
                                <div className="button-1">
                                    <button style={{ color: "black", background: "white" }} > MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="MTT" style={{ height: "390px" }}>
                            <div className="MTT-2">
                                <img src="https://watchtimevn.com/wp-content/uploads/2022/08/d1086bqi-2-221x300.png"></img>
                                <marquee style={{ color: "black" }}>MATHEY TISSOT 1970 H1970CHABU</marquee>
                                <div className="gia-mtt-2">
                                    <bdi style={{ padding: "30%;", color: "black" }}>8,446,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                </div>
                                <div className="button-1">
                                    <button style={{ color: "black", background: "white" }} > MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="MTT" style={{ height: "390px" }}>
                            <div className="MTT-3">
                                <img src="https://watchtimevn.com/wp-content/uploads/2022/08/edmond20metal20h1886mbi-2-221x300.png"></img>
                                <marquee style={{ color: "black" }}>MATHEY TISSOT EDMOND METAL H1886MBI-MEN</marquee>
                                <div className="gia-mtt-3">
                                    <bdi style={{ padding: "30%;", color: "black" }}>13,450,500<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                </div>
                                <div className="button-1">
                                    <button style={{ color: "black", background: "white" }} > MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="MTT" style={{ height: "390px" }}>
                            <div className="MTT-4">
                                <img src="https://watchtimevn.com/wp-content/uploads/2022/08/d1086bqyi-2-221x300.png"></img>
                                <marquee style={{ color: "black" }}>MATHEY TISSOT ARTEMIS D1086BQYI</marquee>
                                <div className="gia-mtt-4">
                                    <bdi style={{ padding: "30%;", color: "black" }}>8,446,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                </div>
                                <div className="button-1">
                                    <button style={{ color: "black", background: "white" }} > MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="MTT" style={{ height: "390px" }}>
                            <div className="MTT-5">
                                <img src="https://watchtimevn.com/wp-content/uploads/2022/08/h1970chabu-2-171x300.jpg"></img>
                                <marquee style={{ color: "black" }}>MATHEY TISSOT 1970 Chronograph Automatic Blue </marquee>
                                <div className="gia-mtt-5">
                                    <bdi style={{ padding: "30%;", color: "black" }}>8,446,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                </div>
                                <div className="button-1">
                                    <button style={{ color: "black", background: "white" }} > MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container style={{ backgroundColor: "black" }}>
                <Row>
                    <Col xs={12}>
                        <div className="body6" >
                            <h2 style={{ color: "white", height: "50px", width: "30%", margin: " auto" }}> ĐỒNG HỒ OGIVAL </h2>
                            <div className="titlle" style={{ color: "yellow", margin: "auto" }}>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="DHOGV">
                            <div className="dhogv-1">
                                <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/08/dong-ho-ogival-og30327-1dlw-avatar-2-210x300.png"></img>
                                <marquee style={{ color: "white" }}>OGIVAL OG30327-1DLW-T</marquee>
                                <bdi style={{ padding: "30%;", color: "white" }}>22,682,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                <div className="button-1" style={{ padding: "large" }}>
                                    <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="DHOGV">
                            <div className="dhogv-2">
                                <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/08/dong-ho-ogival-og358-88agr-gl-avatar-2-210x300.png"></img>
                                <marquee style={{ color: "white" }}>OGIVAL BÁT MÃ – OG358.88AGR-GL</marquee>
                                <bdi style={{ padding: "30%;", color: "white" }}>36,402,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                <div className="button-1" style={{ padding: "large" }}>
                                    <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="DHOGV">
                            <div className="dhogv-3">
                                <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/08/dong-ho-ogival-og358-18-65agsr-gl-avatar-2-210x300.png"></img>
                                <marquee style={{ color: "white" }}>OGIVAL 18K GOLD OG358-18.65AGSR-GL</marquee>
                                <bdi style={{ padding: "30%;", color: "white" }}>12,609,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                <div className="button-1" style={{ padding: "large" }}>
                                    <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="DHOGV">
                            <div className="dhogv-4">
                                <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/08/og386lsk-t-2-210x300.png"></img>
                                <marquee style={{ color: "white" }}>OGIVAL OG386LSK-T</marquee>
                                <bdi style={{ padding: "30%;", color: "white" }}>2,700,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                <div className="button-1" style={{ padding: "large" }}>
                                    <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={3} style={{ width: "20%" }} >
                        <div className="DHOGV">
                            <div className="dhogv-5">
                                <img style={{ background: "white" }} src="https://watchtimevn.com/wp-content/uploads/2022/08/dong-ho-ogival-og829-65agsk20t-avatar-2-210x300.png"></img>
                                <marquee style={{ color: "white" }}>OGIVAL OG829-65AGSK-T</marquee>
                                <bdi style={{ padding: "30%;", color: "white" }}>31,741,000<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                <div className="button-1" style={{ padding: "large" }}>
                                    <button style={{ color: "black", backgroundColor: "white" }}> MUA NGAY </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="body7" >
                            <h2 style={{ color: "black", height: "50px", width: "15%", margin: " auto" }}> TIN TỨC </h2>
                        </div>
                    </Col>

                    <Col xs={3}>
                        <h2 className="row-1"> </h2>
                        <img style={{ height: "214px", width: "260px" }}
                            src="https://watchtimevn.com/wp-content/uploads/2022/08/NgC3A2m20vE1BAA3i20mE1BB81m20vC3A0o20nC6B0E1BB9Bc20giE1BAA5m-300x206.jpg"></img>
                        <p> Bảng Xếp Hạng Đồng Hồ Thụy Sỹ
                            dựa theo mức độ nổi tiếng </p>
                        <div className="titlle" style={{ height: "5px", width: "30%", background: "rgb(93, 93, 92)" }}></div>
                        <p>Bảng xếp hạng đồng hồ Thụy Sỹ là tập
                            hợp danh sách các thương hiệu đồng hồ Thụy Sỹ theo tiêu chí bán chạy & nổi tiếng tại Việt...</p>
                    </Col>



                    <Col xs={3}>
                        <div className="row-2">
                            <img style={{ height: "214px", width: "260px" }}
                                src="https://watchtimevn.com/wp-content/uploads/2022/08/C491ia20C491iE1BB83m20thay20dC3A2y20FC20du20thuyE1BB81n-300x300.jpg"></img>
                            <p>Cách làm sạch dây đồng hồ an toàn Có thể
                                làm tại nhà</p>
                            <div className="titlle" style={{ height: "5px", width: "40%", background: "rgb(93, 93, 92)" }}></div>
                            <p> Bạn thích đồng hồ dây da nhưng lại ngại đeo chúng vì dây mau cũ  và có mùi hôi? Nếu vì lí do
                                đó mà bạn bỏ qua không..s</p>
                        </div>
                    </Col>



                    <Col xs={3}>
                        <div className="row-3" >
                            <img style={{ height: "214px", width: "260px" }}
                                src="https://watchtimevn.com/wp-content/uploads/2022/08/ThiE1BABFt20kE1BABF20khC3B4ng20tC3AAn-1626790391-300x169.png"></img>
                            <p>Thay dây đồng hồ Frederique Constant(FC) Tại Hà Nội TPHCM</p>
                            <div className="titlle" style={{ height: "5px", width: "30%", background: "rgb(93, 93, 92)" }}></div>
                            <p>Thay dây đồng hồ FREDERIQUE CONSTANT ở đâu uy tín là điều thắc mắc khá nhiều của khách
                                hàng khi đang sỡ hữu những mẫu đồng hồ cao cấp.Để...</p>
                        </div> </Col>


                    <Col xs={3}>
                        <div className="row-4">
                            <img style={{ height: "214px", }} src="https://watchtimevn.com/wp-content/uploads/2022/08/C490E1BB93ng20hE1BB9320SK206-300x200.png"></img>
                            <p>Thay mặt kính Đồng Hồ tại Hà Nội & TPHCM [Kèm Báo Giá 2022]</p>
                            <div className="titlle" style={{ height: "5px", width: "30%", background: "rgb(93, 93, 92)" }}></div>
                            <p>Watch Time chuyên Thay mặt kính đồng hồ chính hãng tại TPHCM & Hà Nội. Đầy đủ các loại mặt kính đồng
                                hồ với tay nghề của thợ nhiều...</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={12}> <div className="titlle" style={{ width: "100%", height: "10px", background: "rgb(215 213 35)" }}></div> </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 footer-widget1">
                                <section id="text-5" className="widget widget_text">
                                    <div className="textwidget">
                                        <p style={{ width: "350px" }}><strong> HỆ THỐNG SHOWROOM ĐỒNG HỒ CỦA WATCHTIME  </strong></p>
                                        <p style={{ width: "315px" }}><i className="fa fa-map-marker" aria-hidden="true"></i> <strong>SHOWROOM
                                            HÀ NỘI: </strong>235 Bạch Mai, Hai Bà Trưng, Hà Nội</p>
                                        <p style={{ width: "315px" }}><i className="fa fa-map-marker" aria-hidden="true"></i> <strong>SHOWROOM
                                            HCM: </strong>58 Nguyễn Cư Trinh, Q.1, TP HCM <i className="fa fa-volume-control-phone" aria-hidden="true"></i> <a href="tel:0986686909">
                                                0986.686.909</a></p>
                                        <p style={{ width: "315px" }} ><i className="fa fa-map-marker" aria-hidden="true"></i> <strong>DỊCH VỤ SỬA CHỮA, BẢO HÀNH:
                                        </strong>Số 235 Bạch Mai, Hai Bà Trưng, Hà Nội</p>    </div>
                                </section>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 footer-widget2">
                            <section style={{
                                width: "250px"
                            }} id="nav_menu-2" className="widget widget_nav_menu"><strong className="widget-title"
                                style={{ color: "black" }}>Hỗ trợ khách hàng</strong>

                                <div className="menu-menu-footer-cot-2-container">
                                    <ul id="menu-menu-footer-cot-2" className="menu">
                                        <li id="menu-item-2440"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2440"><a
                                                href="https://watchtimevn.com/chinh-sach-bao-hang">Chính sách bảo hàng</a></li>
                                        <li id="menu-item-2438"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2438"><a
                                                href="https://watchtimevn.com/chinh-sach-van-chuyen">Chính sách vận chuyển</a>
                                        </li>
                                        <li id="menu-item-2437"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2437"><a
                                                href="https://watchtimevn.com/chinh-sach-doi-tra">Chính sách đổi trả</a></li>
                                        <li id="menu-item-2436"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2436"><a
                                                href="https://watchtimevn.com/chinh-sach-thanh-toan">Chính sách thanh toán</a>
                                        </li>
                                        <li id="menu-item-2443"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-2443">
                                            <a href="https://watchtimevn.com/chinh-sach-bao-mat">Chính sách bảo mật</a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 footer-widget3">
                            <section style={{
                                width: "250px"
                            }} id="nav_menu-3" className="widget widget_nav_menu"><strong className="widget-title">Danh mục sản
                                phẩm</strong>



                                <div className="menu-menu-footer-cot-3-container">
                                    <ul id="menu-menu-footer-cot-3" className="menu">
                                        <li id="menu-item-17139"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-17139">
                                            <a style={{ width: "350px" }} href="https://watchtimevn.com/dong-ho-bonest-gatti-nam">Đồng hồ Bonest Gatti
                                                nam</a>
                                        </li>
                                        <li id="menu-item-17140"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-17140">
                                            <a href="https://watchtimevn.com/dong-ho-bonest-gatti-nu">Đồng hồ Bonest Gatti
                                                nữ</a>
                                        </li>
                                        <li id="menu-item-17141"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-17141">
                                            <a href="https://watchtimevn.com/dong-ho-casio-nam">Đồng hồ Casio nam</a>
                                        </li>
                                        <li id="menu-item-17142"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-17142">
                                            <a href="https://watchtimevn.com/dong-ho-casio-nu">Đồng hồ Casio nữ</a>
                                        </li>
                                        <li id="menu-item-17144"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-17144">
                                            <a href="https://watchtimevn.com/dong-ho-mathey-tissot-nu">Đồng hồ Mathey Tissot
                                                nữ</a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>



    );
}
export default TrangChu;