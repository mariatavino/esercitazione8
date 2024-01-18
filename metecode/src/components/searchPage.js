import Header from "./header";
import Footer from "./footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/result?query=${encodeURIComponent(searchQuery)}`);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      <Header />
      <Container id="main">
        <Row className="form">
          <Col>
            <Form onSubmit={handleSubmit} id="cerca">
              <Form.Group style={{ display: "flex", flexWrap: "wrap" }}>
                <Form.Label id="titolo">Inserisci la località</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Milano..."
                  id="testo"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                <Button variant="primary" type="submit" id="bottone">
                  Cerca
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};

export default SearchPage;

//968b744179ecd109244b225605613b11
// • /data/2.5/weather (http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=968b744179ecd109244b225605613b11)
// • /data/2.5/forecast
