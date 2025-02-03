const mongoose = require("mongoose");
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const { app, server } = require("../server"); // Import server

describe("URL Shortener API", function () {
  this.timeout(20000); // Increase timeout for the whole test suite

  before((done) => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => done())
      .catch(err => {
        console.error("Error connecting to MongoDB:", err);
        done(err);
      });
  });

  after(async () => {
    await mongoose.connection.close();
    server.close(); // Close the server after tests
  });

  it("should return a short URL and QR code for a valid long URL", async function () {
    this.timeout(10000); // Increase timeout for the individual test

    const res = await request(server) // Use server for request
      .post("/api/shorten")
      .send({ longUrl: "https://www.hamdiAbdportfolio.com" });

    console.log("Test response:", res.body);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("shortUrl");
    expect(res.body).to.have.property("qrCode");
  });
});
