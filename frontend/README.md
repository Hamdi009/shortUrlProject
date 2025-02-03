# URL Shortener with QR Code

This project is a simple URL shortener application that generates a short URL for any provided long URL and displays a QR code. 

## Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** 
- **MongoDB** 


## Frontend Setup

1. Go to the `shortener-url` directory:

    ```bash
    cd ../shortener-url
    ```

2. Install the frontend dependencies:

    ```bash
    npm install
    ```

3. Start the React app:

    ```bash
    npm start
    ```

    The frontend will run on `http://localhost:3000`.

## Usage

1. Open the frontend in your browser (`http://localhost:3000`).
2. Enter a long URL in the input field, click the **Shorten URL** button.
3. The short URL will be displayed along with a QR code that can be scanned to redirect to the short URL.

## API Documentation

### POST `/api/shorten`

This endpoint is used to generate a short URL for a given long URL.

**Request Body:**

```json
{
  "longUrl": "http://www.google.com"
}
