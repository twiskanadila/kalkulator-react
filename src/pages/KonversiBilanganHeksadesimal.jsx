import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

export default function HexadecimalConverter() {
  const [hexadecimal, setHexadecimal] = useState("");
  const [conversionType, setConversionType] = useState("decimal");
  const [result, setResult] = useState(null);

  const handleHexadecimalChange = (event) => {
    const value = event.target.value;
    setHexadecimal(value);
  };

  const handleConversionTypeChange = (event) => {
    setConversionType(event.target.value);
  };

  const handleConvert = () => {
    // Konversi sesuai jenis yang dipilih
    const decimalValue = parseInt(hexadecimal, 16);

    if (conversionType === "octal") {
      setResult(decimalValue.toString(8) || null);
    } else if (conversionType === "binary") {
      setResult(decimalValue.toString(2) || null);
    } else if (conversionType === "decimal") {
      setResult(decimalValue || null);
    }
  };

  return (
    <Container className="mt-4 text-center">
      <h2
        className="mb-4"
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
          fontSize: "1.5rem",
        }}
      >
        Hexadecimal Converter
      </h2>
      <Form>
        <Row className="mb-3">
          <Col xs={12} md={6} lg={4} className="mx-auto">
            <Form.Group controlId="formHexadecimal">
              <Form.Label style={{ fontSize: "1rem" }}>Hexadecimal:</Form.Label>
              <Form.Control
                type="text"
                value={hexadecimal}
                onChange={handleHexadecimalChange}
                placeholder="Enter hexadecimal number"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} md={6} lg={4} className="mx-auto">
            <Form.Group controlId="formConversionType">
              <Form.Label style={{ fontSize: "1rem" }}>
                Conversion Type:
              </Form.Label>
              <Form.Select
                value={conversionType}
                onChange={handleConversionTypeChange}
              >
                <option value="octal">Octal</option>
                <option value="binary">Binary</option>
                <option value="decimal">Decimal</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Button
          variant="danger"
          onClick={handleConvert}
          style={{ fontSize: "1rem" }}
        >
          Convert
        </Button>
      </Form>
      {result !== null && (
        <Alert variant="danger" className="mt-3" style={{ fontSize: "1rem" }}>
          Result: {result}
        </Alert>
      )}
    </Container>
  );
}
