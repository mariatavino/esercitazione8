import Header from "./header";
import Footer from "./footer";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Forecast from "./previsioni";

const ResultPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  const [weatherData, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&APPID=968b744179ecd109244b225605613b11`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error during API request:", error);
      }
    };
    fetchData();
  }, [searchQuery]);

  let temp; /*= weatherData.main.temp;*/
  let feels_like; /*= weatherData.main.feels_like;*/
  let temp_min; /*= weatherData.main.temp_min;*/
  let temp_max; /*= weatherData.main.temp_max;*/
  let pressure; /*= weatherData.main.pressure;*/
  let humidity; /*= weatherData.main.humidity;*/
  // let weather /*= weatherData.weather;*/
  // let clouds /*= weatherData.clouds;*/
  // let wind /*= weatherData.wind;*/
  let visibility; /*= weatherData.visibility;*/

  return (
    <div>
      <Header />
      <Container>
        <h1>
          Previsioni di oggi per{" "}
          <span style={{ textTransform: "uppercase" }}>{searchQuery}</span>{" "}
        </h1>
        <Row className="mt-3">
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Attributo</th>
                  <th>Valore</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Temperatura</td>
                  <td>{temp} K</td>
                </tr>
                <tr>
                  <td>Percepita</td>
                  <td>{feels_like} K</td>
                </tr>
                <tr>
                  <td>Temp. Min</td>
                  <td>{temp_min} K</td>
                </tr>
                <tr>
                  <td>Temp. Max</td>
                  <td>{temp_max} K</td>
                </tr>
                <tr>
                  <td>Pressione</td>
                  <td>{pressure} hPa</td>
                </tr>
                <tr>
                  <td>Umidità</td>
                  <td>{humidity}%</td>
                </tr>
                {/*
        <tr>
          <td>Condizioni meteo</td>
          { <td>{weather[0].description}</td> }
        </tr>
        <tr>
          <td>Clouds</td>
          <td>{clouds.all}%</td>
        </tr>
        <tr>
          <td>Vento</td>
          <td>
            Speed: {wind.speed} m/s, Direction: {wind.deg}°, Gust: {wind.gust} m/s
          </td>
        </tr>
        */}
                <tr>
                  <td>Visibilità</td>
                  <td>{visibility} meters</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Forecast />
      <Footer />
    </div>
  );
};

export default ResultPage;
