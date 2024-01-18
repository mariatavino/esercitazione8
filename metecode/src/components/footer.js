import { Container, Row, Col, Image } from "react-bootstrap";
import google from "../assets/play store badge.png";
import apple from "../assets/app store badge.png";
import {
  BsTwitterX,
  BsYoutube,
  BsFacebook,
  BsTiktok,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div aria-label="footer">
      <div className="upper">
        <Container>
          <Row>
            <Col xs={12} lg={10}>
              <Row>
                <ul id="footer">
                  <li>
                    <a href="">Accessibility</a>
                  </li>
                  <li>
                    <a href="">Privacy policy</a>
                  </li>
                  <li>
                    <a href="">Cookie policy</a>
                  </li>
                  <li>
                    <a href="">Legal</a>
                  </li>
                  <li>
                    <a href="">Email updates</a>
                  </li>
                  <li>
                    <a href="">RSS</a>
                  </li>
                </ul>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="lower">
        <Container>
          <Row style={{ display: "flex" }}>
            <Col>
              <a className="google-play" href="#">
                <Image src={google} alt="google play link" fluid />
              </a>
              <a className="app-store" href="#">
                <Image src={apple} alt="app-store link" fluid />
              </a>
            </Col>
            <Col className="last-sm">
              <ul className="horizontal-list">
                <li>
                  <a
                    href="#"
                    aria-label="Follow us on Twitter"
                    title="Follow us on Twitter"
                    data-value="twitter"
                  >
                    <BsTwitterX size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Follow us on YouTube"
                    title="Follow us on YouTube"
                    data-value="youtube"
                  >
                    <BsYoutube size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Follow us on Facebook"
                    title="Follow us on Facebook"
                    data-value="facebook"
                  >
                    <BsFacebook size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Follow us on TikTok"
                    title="Follow us on TikTok"
                    data-value="tiktok"
                  >
                    <BsTiktok size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Follow us on Instagram"
                    title="Follow us on Instagram"
                    data-value="instagram"
                  >
                    <BsInstagram size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Follow us on LinkedIn"
                    title="Follow us on LinkedIn"
                    data-value="linkedin"
                  >
                    <BsLinkedin size={30} />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="copyright">
                <small>
                  <a href="#">© Metecode Copyright</a>
                </small>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
