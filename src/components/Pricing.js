import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const Pricing = () => {

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="section pricing" id="pricing">
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">{t("PRICING PLANS")}</h2>
                <span className="heading"></span>
              </div>
            </div>
          </div>
          <Row className="justify-content-center">
            <Col lg={4} md={6} mt={4}>
              <div className="pricing-box text-center">
                <div className="px-4 py-5">
                  <div className="pricing-icon text-primary">
                    <h3>2900<sup>$</sup></h3>
                  </div>
                  <h5 className="my-4 box-heading">Basic</h5>
                  <ul className="pricing-team pricing-list list-unstyled mt-2 mb-0">
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> Domain licenses</li>
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> Downloads per month</li>
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> Regular extension</li>
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> Active sessions at once</li>
                    <li className="pricing-item"><del className="text-muted">Updates</del></li>
                    <li className="pricing-item"><del className="text-muted">Premium support</del></li>
                  </ul>
                  <Button to="#" className="btn bg-gradiant mt-4 w-100">{t("Select this offer")}</Button>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} mt={4}>
              <div className="pricing-box pricing-active text-center">
                <div className="px-4 py-5">
                  <div className="pricing-icon text-primary">
                    <h3>4900<sup>$</sup></h3>
                  </div>
                  <h5 className="my-4 box-heading">Standard</h5>
                  <ul className="pricing-team pricing-list list-unstyled mt-2 mb-0">
                    <li className="pricing-item">
                      <i className="uil uil-check-circle text-primary">
                      </i> Domain licenses</li>
                    <li className="pricing-item">
                      <i className="uil uil-check-circle text-primary">
                      </i> Downloads per month</li>
                    <li className="pricing-item">
                      <i className="uil uil-check-circle text-primary">
                      </i> Regular extension</li>
                    <li className="pricing-item">
                      <i className="uil uil-check-circle text-primary">
                      </i> Active sessions at once</li>
                    <li className="pricing-item">Updates</li>
                    <li className="pricing-item">
                      <del className="text-muted">Premium support</del>
                    </li>
                  </ul>
                  <Button to="#" className="btn bg-gradiant mt-4 w-100">{t("Select this offer")}</Button>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} mt={4}>
              <div className="pricing-box text-center">
                <div className="px-4 py-5">
                  <div className="pricing-icon text-primary">
                    <h3>7900<sup>$</sup></h3>
                  </div>
                  <h5 className="my-4 box-heading">Premium</h5>
                  <ul className="pricing-team pricing-list list-unstyled mt-2 mb-0">
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> Domain licenses</li>
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> Downloads per month</li>
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> Regular extension</li>
                    <li className="pricing-item"><i className="uil uil-check-circle text-primary"></i> Active sessions at once</li>
                    <li className="pricing-item"><li className="pricing-item">Updates</li></li>
                    <li className="pricing-item text-warning">Premium support</li>
                  </ul>
                  <Button to="#" className="btn bg-gradiant mt-4 w-100">{t("Select this offer")}</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Pricing;