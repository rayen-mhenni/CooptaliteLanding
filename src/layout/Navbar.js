import React, { useEffect, useState, useRef } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// import Image
import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";

const Navbar1 = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [activeLgn, setActiveLgn] = useState(localStorage.getItem('i18nextLng'));

  const [navClass, setnavClass] = useState("");

  // navbar Scroll

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
    }
  }

  // toggle

  const navMenuRef = useRef(null);

  const toggleNavMenu = () => {
    navMenuRef.current.classList.toggle("collapse");
  };

  const { i18n, t } = useTranslation();

  const handleLangUpdate = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLgn(lang)
  };


  return (
    <React.Fragment>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-offset="61"
        data-bs-smooth-scroll="true"
        className="scrollspy-example-2"
      >
        <section className="tagline d-none d-md-block">
          <Container fluid>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="d-flex">
                  <div className="phone">
                    <i className="mdi mdi-phone"></i> +1 123 456 78 90
                  </div>
                  <div className="email ms-3">
                    <Link to="mailto:#" className="text-dark">
                      <i className="mdi mdi-email-open-outline"></i>{" "}
                      cooptalite.contact@cooptalite.com
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <ul className="top_socials d-flex list-unstyled justify-content-end mb-0">
                  <li className="entry">
                    <Link to="#">
                      <i className="bx bxl-facebook-circle"></i>
                    </Link>
                  </li>
                  <li className="entry">
                    <Link to="#">
                      <i className="bx bxl-dribbble"></i>
                    </Link>
                  </li>
                  <li className="entry">
                    <Link to="#">
                      <i className="bx bxl-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="clear"></div>
          </Container>
        </section>

        <nav
          className={`navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-light ${navClass}`}
          id="navbar"
        >
          <Container fluid>
            <Navbar.Brand href="#" className="logo text-uppercase">
              <img src={logoLight} className="logo-light" alt="" height="50" />
              <img src={logoDark} className="logo-dark" alt="" height="40" />
            </Navbar.Brand>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleNavMenu}
            >
              <span className="mdi mdi-menu"></span>
            </button>

            <div
              ref={navMenuRef}
              className="collapse navbar-collapse"
              id="navbarCollapse"
            >
              <ul className="navbar-nav ms-auto" id="navbar-navlist">
                <li
                  className={activeItem === "Home" ? "active" : "nav-item"}
                  onClick={() => setActiveItem("Home")}
                >
                  <Nav.Link href="#home">{t("Home")}</Nav.Link>
                </li>
                <li
                  className={activeItem === "About Us" ? "active" : "nav-item"}
                  onClick={() => setActiveItem("About Us")}
                >
                  <Nav.Link href="#about">{t("About Us")} </Nav.Link>
                </li>
                <li
                  className={activeItem === "Features" ? "active" : "nav-item"}
                  onClick={() => setActiveItem("Features")}
                >
                  <Nav.Link href="#features">{t("Features")}</Nav.Link>
                </li>
                <li
                  className={activeItem === "Pricing" ? "active" : "nav-item"}
                  onClick={() => setActiveItem("Pricing")}
                >
                  <Nav.Link href="#pricing">{t("Pricing")}</Nav.Link>
                </li>
                <li
                  className={
                    activeItem === "Application" ? "active" : "nav-item"
                  }
                  onClick={() => setActiveItem("Application")}
                >
                  <Nav.Link href="#app">{t("Application")} </Nav.Link>
                </li>
                <li
                  className={activeItem === "Team" ? "active" : "nav-item"}
                  onClick={() => setActiveItem("Team")}
                >
                  <Nav.Link href="#team">{t("Team")}</Nav.Link>
                </li>
                <li
                  className={activeItem === "Contact" ? "active" : "nav-item"}
                  onClick={() => setActiveItem("Contact")}
                >
                  <Nav.Link href="#contact">{t("Contact")}</Nav.Link>
                </li>




              </ul>

              <div className='lang-nav ms-auto'>
                <span className={activeLgn === "fr" ? "active" : "lang-item"}
                  onClick={() => handleLangUpdate("fr")}
                > FR</span>

                <span className='fw-bolder' > | </span>
                <span className={activeLgn === "en" ? "active" : "lang-item"}
                  onClick={() => handleLangUpdate("en")}
                > EN</span>

              </div>

              {/* <div className="ms-auto">
                <Link to="#" className="btn bg-gradiant">
                {t("Contact us")}
                </Link>
              </div> */}

            </div>
          </Container>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar1;
