import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

// import images
import home4 from "../assets/images/home/home-4.png";
import img1 from "../assets/images/user/img-1.jpg";
import img2 from "../assets/images/user/img-2.jpg";
import img3 from "../assets/images/user/img-3.jpg";
import img4 from "../assets/images/user/img-4.jpg";
import img5 from "../assets/images/user/img-5.jpg";
import { useTranslation } from "react-i18next";

AOS.init({
  duration: 1800,
});

const Work = () => {
  
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="section work bg-light">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">{t("HOW IT'S WORK")}</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="work-pra">
                <h4 className="my-4">{t("Recruiter")}</h4>
                <ul className="inline-item">
                  <li className="list-inline-item">
                    <i className="uil uil-bell"></i>
                    <p className="text-muted">
                    {t("The recruiter expresses his need by posting a job offer on the Cooptatio platform.")}
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <i className="uil uil-star"></i>
                    <p className="text-muted">
                    {t("Each Coopter embarks on a headhunting to find the ideal profile among their relationships .")}
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <i className="uil uil-envelope-minus"></i>
                    <p className="text-muted">
                    {t("The recruiter instantly receives the profiles carefully recommended by our co-optors.")}
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <i className="uil uil-heart-alt"></i>
                    <p className="text-muted">
                    {t("The recruiter selects the profiles prequalified by the co-operators for job interviews in order to choose the ideal candidate.")}
                      
                    </p>
                  </li>
                </ul>
              </div>
              <div className="work-pra">
                <h4 className="my-4">{t("Cooptor")}</h4>
                <ul className="inline-item">
                  <li className="list-inline-item">
                    <i className="uil uil-bell"></i>
                    <p className="text-muted">
                    {t("Our co-operators are notified instantly by email / mobile as soon as a published offer corresponds to their core business.")}
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <i className="uil uil-star"></i>
                    <p className="text-muted">
                    {t("The co-operator's mission is to find excellent profiles to recommend among its network.")}
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <i className="uil uil-envelope-minus"></i>
                    <p className="text-muted">
                    {t("Recommended candidates are notified instantly. The choice is up to them to accept or decline the job opportunity after that Once the cooptation is sent, the co-optorfollows the recruitment pipeline (selection, validation,hiring, etc.)")}
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <i className="uil uil-heart-alt"></i>
                    <p className="text-muted">
                    {t("As soon as the co-opted proﬁle is recruited, the co-optor receives his cooptation prime, with the possibility of sharing it with the candidate.")}
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-right">
              <div className="testimonial-contaent">
                <div className="testimonial-right">
                  <div className="testimonial-circle">
                    <div className="media">
                      <img src={home4} className="img-fluid" alt="" />
                    </div>
                    <span className="ring1 animate-v2">
                      <img src={img1} className="img-fluid" alt="" />
                    </span>
                    <span className="ring2 animate-v3">
                      <img src={img2} className="img-fluid" alt="" />
                    </span>
                    <span className="ring3 animate-v2">
                      <img src={img3} className="img-fluid" alt="" />
                    </span>
                    <span className="ring4 animate-v3">
                      <img src={img4} className="img-fluid" alt="" />
                    </span>
                    <span className="ring5 animate-v2">
                      <img src={img5} className="img-fluid" alt="" />
                    </span>
                    <span className="ring6 animate-v3"></span>
                    <span className="ring7 animate-v2"></span>
                    <span className="ring8 animate-v3"></span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Work;
