import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import QRCode from 'react-qr-code';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [qrCode, setQrCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/shorten', { longUrl });
      setShortUrl(response.data.shortUrl);
      setQrCode(response.data.qrCodeUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row className="w-50">
        <Col className="text-center">
          <h2>URL Shortener</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formLongUrl">
              <Form.Control
                type="url"
                placeholder="Enter your long URL"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                required
                className="mb-3 rounded"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 rounded">
              Shorten URL
            </Button>
          </Form>

          {shortUrl && (
            <div className="mt-3">
              <h4>Short URL</h4>
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
              <div className="mt-3">
                <QRCode value={shortUrl} size={256} />
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
