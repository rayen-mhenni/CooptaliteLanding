import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

// import images
import features from "../assets/images/features.png";
import { useTranslation } from 'react-i18next';

AOS.init({
  duration: 1800,
});

const Features = () => {


  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="section features" id="features">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">{t('FEATURES FOR OUR APP')}</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col lg={4} md={10} data-aos="fade-right">
              <div className="features-box text-end">
                <div className="features-icon float-end ms-2">
                  <i className="uil uil-users-alt"></i>
                </div>
                <div className="pe-3 me-5">
                  <h5 className="f-15 text-uppercase">{t('NETWORK')}</h5>
                  <p className="text-muted mt-3">
                  {t("The Cooption consists of activating one's professional or personal network to recommend and support the candidacy of a recruiter or a person looking for a job")}
                  </p>
                </div>
              </div>

              <div className="features-box mt-5 text-end">
                <div className="features-icon float-end ms-2">
                  <i className="uil uil-money-bill"></i>
                </div>
                <div className="pe-3 me-5">
                  <h5 className="f-15 text-uppercase">{t('GRATIFICATION')}</h5>
                  <p className="text-muted mt-3">
                  {t("This new way of recruiting is gratifying. By coopting a person around you, you receive a fair sum with a fair offer that will make a business for you.")}
                  </p>
                </div>
              </div>

              <div className="features-box mt-5 text-end">
                <div className="features-icon float-end ms-2">
                  <i className="uil uil-star"></i>
                </div>
                <div className="pe-3 me-5">
                  <h5 className="f-15 text-uppercase">{t("TALENTS")}</h5>
                  <p className="text-muted mt-3">
                  {t("In addition to saving time, the recruiter is sure to find the profile that best matches the job offer since the candidate is recommended for his or her skills and the coopter will get a score for the match of the candidat to the post.")}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="text-center">
                <img
                  src={features}
                  className="img-fluid"
                  data-aos="zoom-in"
                  alt=""
                />
              </div>
            </Col>
            <Col lg={4} md={10} data-aos="fade-left">
              <div className="features-box">
                <div className="features-icon float-start me-2">
                  <i
                    className="uil uil-lightbulb-alt"
                  ></i>
                </div>
                <div className="ps-3 ms-5">
                  <h5 className="f-15 text-uppercase">{t("INNOVATION")}</h5>
                  <p className="text-muted mt-3">
                  {t("This recruitment channel allows the recruiter to reach more candidates, even the most difficult ones. It also makes it possible to open up to new profiles, even the most “typical”.")}
                  </p>
                </div>
              </div>
              <div className="features-box mt-5">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-bolt"></i>
                </div>
                <div className="ps-3 ms-5">
                  <h5 className="f-15 text-uppercase">{t("AVAILABILITY")}</h5>
                  <p className="text-muted mt-3">
                    {t( "A question ? A dysfunction ? The Cooptalite support team is there to serve you! Send us your feedBack from the plateform and we guarantee an answer in less than 24 hours.")}
                  </p>
                </div>
              </div>
              <div className="features-box mt-5">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-lock-access"></i>
                </div>
                <div className="ps-3 ms-5">
                  <h5 className="f-15 text-uppercase">{t("SECURITY")}</h5>
                  <p className="text-muted mt-3">
                  {t("No worries! Cooptalite hosts your personal data on highly secure servers based in Europe.")} 
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Features;
