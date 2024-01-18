import { Container, Row, Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Forecast = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  let giorno0 = new Date();
  let giorno1 = giorno0.getDate() + 1;
  let g1, g2, g3, g1Max, g1MIn, g1Pop, g2Max, g2Min, g2Pop, g3Max, g3Min, g3Pop;
  useEffect(() => {
    let pippo = [];
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&APPID=968b744179ecd109244b225605613b11`
        );
        const result = await response.json();
        for (let i = 0; i < result.list.length; i++) {
          pippo[i] = result.list[i];
        }
        g1 = cercaGiorni(pippo, giorno1)[5];
        g2 = cercaGiorni(pippo, giorno1 + 1)[5];
        g3 = cercaGiorni(pippo, giorno1 + 2)[5];
        g1MIn = g1.main.temp_min;
        g1Pop = g1.pop;
        g1Max = g1.main.temp_max;
        g2Max = g2.main.temp_max;
        g2Min = g2.main.temp_min;
        g2Pop = g2.pop;
        g3Max = g3.main.temp_max;
        g3Min = g3.main.temp_min;
        g3Pop = g3.pop;
        console.log(g3Max);
      } catch (error) {
        console.error("Error during API request:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>High Temperature: {g1Max}</Card.Text>
              <Card.Text>Low Temperature: {g1MIn}</Card.Text>
              <Card.Text>Precipitation Percentage: {g1Pop * 100}% </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>High Temperature: {g2Max}</Card.Text>
              <Card.Text>Low Temperature: {g2Min}</Card.Text>
              <Card.Text>Precipitation Percentage: {g2Pop * 100}% </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>High Temperature: {g3Max}</Card.Text>
              <Card.Text>Low Temperature: {g3Min}</Card.Text>
              <Card.Text>Precipitation Percentage: {g3Pop * 100}% </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Forecast;

function cercaGiorni(lista, giorno1) {
  return lista.filter((x) => new Date(x.dt_txt).getDate() == giorno1);
}
