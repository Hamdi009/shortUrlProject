# URL Shortener with QR Code

This project provides a URL shortener API that allows users to shorten long URLs and receive a QR code for the shortened URL.

# Features
- **Shorten URLs**: Convert long URLs into short URLs.
- **QR Code Generation**: Generates a QR code for the shortened URL.
- **MongoDB Integration**: The URL and its corresponding short code are stored in a MongoDB database.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Packages**: 
  - `shortid` for generating unique short URLs.
  - `valid-url` for validating URLs.
  - `qrcode` for generating QR codes.
  - `supertest` for testing the API.

## Prerequisites

Before you start, make sure you have the following installed on your local machine:
- **Node.js** 
- **MongoDB** 

## Installation

### 1. Clone the repository

in bash tap
git clone https://github.com/Hamdi009/shortUrlProject
cd YOUR-REPOSITORY

### 2. Install dependecies
npm install

### 3. Set up MongoDB
mongod ( make sure that mongodb exist in your path)

### 4. Configure Environment Variables
MONGO_URI=mongodb://localhost:27017/url-shortener

### 5. Run the Application
npm start 

### 6. Test the API (you can use POSTMAN to test the API)
send a POST request to http://localhost:5000/api/shorten with a JSON body containing a longUrl; 

{
  "longUrl": "http://www.google.com"
}

make sure you change the Content-Type in the header to application/json

### 7. Run Tests
npm test