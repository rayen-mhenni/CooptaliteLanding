import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [error, setError] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [loading, setloading] = useState(false);
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <section className="contact overflow-hidden" id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">{t("CONTACT US!")}</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col lg={8}>
              <div className="contact-box">
                <div className="custom-form mt-4">
                  <form
                    name="myForm"
                    onSubmitCapture={async (event) => {
                      event.preventDefault();
                      if (
                        event.target.email?.value === undefined ||
                        event.target.name?.value === undefined ||
                        event.target.comments?.value === undefined ||
                        event.target.email?.value === "" ||
                        event.target.name?.value === "" ||
                        event.target.comments?.value === ""
                      ) {
                        setError(true);
                      } else {
                        const templateParams = {
                          email: event.target.email.value,
                          name: event.target.name.value,
                          message: event.target.comments.value,
                        };
                        setloading(true);
                        await emailjs
                          .send(
                            "service_xgyln4i",
                            "template_uu7b0sq",
                            templateParams,
                            "kX-KurubRXhqJ7G2D"
                          )
                          .then(async () => {
                            setSuccess(true);
                            setloading(false);
                          })
                          .catch((err) => {
                            console.log("errror", err);
                            setloading(false);
                          });
                      }
                      setTimeout(() => {
                        setError(false);
                        setSuccess(false);
                      }, 6000);
                    }}
                  >
                    <p id="error-msg" style={{ opacity: 1 }}>
                      {" "}
                    </p>
                    <div id="simple-msg"></div>
                    <Row>
                      <Col lg={12}>
                        <div className="form-group">
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control contact-form"
                            placeholder="name"
                          />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="form-group">
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control contact-form"
                            placeholder="email"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="form-group">
                          <textarea
                            name="comments"
                            id="comments"
                            rows="6"
                            className="form-control contact-form h-auto"
                            placeholder="message..."
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                    {error && (
                      <div
                        class="alert alert-danger d-flex align-items-center"
                        role="alert"
                      >
                        <i className="uil uil-exclamation-triangle me-2"></i>

                        <div>All fields mandatory</div>
                      </div>
                    )}
                    {Success && (
                      <div
                        class="alert alert-success d-flex align-items-center"
                        role="alert"
                      >
                        <i className="uil  uil-check-circle me-2"></i>

                        <div>
                          Your message is send, we will contact you very soon
                        </div>
                      </div>
                    )}

                    <Row className="justify-content-center">
                      <div className="col-lg-6">
                        <div className="text-center">
                          {loading ? (
                            <div class="spinner-border" role="status"></div>
                          ) : (
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-rounded bg-gradiant"
                              value={t("Send Message")}
                            />
                          )}
                        </div>
                      </div>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="my-5 py-4 justify-content-center text-center">
            <Col md={4}>
              <div>
                <i className="mdi mdi-google-maps f-50 text-primary"></i>
                <h5 className="mb-1">{t("Location")}</h5>
                <p className="f-14 mb-0 text-muted">France, Paris</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-4 mt-lg-0">
                <i className="mdi mdi-email f-50 text-primary"></i>
                <h5 className="mb-1">{t("Email")}</h5>
                <p className="f-14 mb-0 text-muted">
                  Email: cooptalite.contact@cooptalite.com
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-4 mt-lg-0">
                <i className="mdi mdi-phone f-50 text-primary"></i>
                <h5 className="mb-1">{t("Phone")}</h5>
                <p className="f-14 mb-0 text-muted">+ 124 236 0693</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="position-relative">
          <div className="contact-map">
            {/* src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963590.6735126767!2d-117.71712342097838!3d36.07023032891268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1649323982108!5m2!1sen!2sin" */}

            <iframe
              className="map"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Paris,%20France+(paris)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="450"
              title="myFrame"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
