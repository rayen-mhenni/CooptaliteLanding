import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// import Images
import team1 from "../assets/images/team/team-1.png"
import team2 from "../assets/images/team/team-2.png"
import team3 from "../assets/images/team/team-3.png"
import team4 from "../assets/images/team/team-4.jpg"
import appStore from "../assets/images/img-appstore.png"
import googleplay from "../assets/images/img-googleplay.png"

const Team = () => {
  return (
    <React.Fragment>
      <section className="section team" id="team">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">Our Team!</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={3} md={6}>
              <div className="team-box">
                <Row className="justify-content-end"></Row>
              </div>
            </Col>

            <Col lg={12}>
              <section>
                <Row className='Team'>

                  <Col md={4}>
                    <div class="card">
                      <div class="img-container">
                        <img src={team1} />
                      </div>
                      <h3>Nejd Kali</h3>
                      <p>CEO</p>
                      <div class="icons">
                        <a href="#">
                          <i className="mdi mdi-twitter f-24 align-middle "></i>
                        </a>
                        <a href="#">

                          <i className="mdi mdi-linkedin f-24 align-middle "></i>
                        </a>
                        <a href="#">

                          <i className="mdi mdi-facebook f-24 align-middle "></i>
                        </a>

                      </div>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div class="card">
                      <div class="img-container">
                        <img src={team2} />
                      </div>
                      <h3>Oussama Hassan Bannour</h3>
                      <p>Developer</p>
                      <div class="icons">
                        <a href="#">
                          <i className="mdi mdi-twitter f-24 align-middle "></i>
                        </a>
                        <a href="#">

                          <i className="mdi mdi-linkedin f-24 align-middle "></i>
                        </a>
                        <a href="#">

                          <i className="mdi mdi-github f-24 align-middle "></i>
                        </a>

                      </div>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div class="card">
                      <div class="img-container">
                        <img src={team3} />
                      </div>
                      <h3>Rayen Mhenni</h3>
                      <p>Developer</p>
                      <div class="icons">
                        <a href="#">
                          <i className="mdi mdi-twitter f-24 align-middle "></i>
                        </a>
                        <a href="#">

                          <i className="mdi mdi-linkedin f-24 align-middle "></i>
                        </a>
                        <a href="#">

                          <i className="mdi mdi-github f-24 align-middle "></i>
                        </a>

                      </div>
                    </div>
                  </Col>
      




                </Row>
              </section>

            </Col>
          </Row>
        </Container>
      </section>

      <section className="section cta bg-light" id="cta">
        <Container className="position-relative">
          <Row>
            <Col xl={5} lg={10}>
              <div className="py-5">
                <h1 className="display-4">
                  What are you waiting for to get started?
                </h1>
                <p className="text-muted mt-3 f-18">
                  You need skills, We find talent.
                </p>
                <div className="d-flex mt-4">
                  <div className="app-store">
                    <Link to="#">
                      <img src={appStore} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="googleplay">
                    <Link to="#">
                      <img src={googleplay} alt="" className="img-fluid ms-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="cta-phone-image">
                {/* <img src="images/home/home-4.png" alt="" class=" img-fluid"> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Team;
