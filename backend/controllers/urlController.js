const Url = require('../models/Url');
const shortid = require('shortid');
const validUrl = require('valid-url');
const QRCode = require('qrcode');

// POST /shorten
const shortenUrl = async (req, res) => {
  console.log('Request Headers:', req.headers);
  console.log('Received request body:', req.body);

  const { longUrl } = req.body;
  console.log('Received longUrl:', longUrl);

  // Check if longUrl is provided
  if (!longUrl) {
    return res.status(400).json({ error: 'No URL provided' });
  }

  // Ensure the URL starts with 'http://' or 'https://'
  if (!longUrl.startsWith('http://') && !longUrl.startsWith('https://')) {
    return res.status(400).json({ error: 'URL must start with http:// or https://' });
  }

  // Validate the URL
  if (!validUrl.isUri(longUrl)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  try {
    // Generate a new short URL ID for every request
    const shortUrlId = shortid.generate();
    const shortUrl = `http://localhost:5000/${shortUrlId}`;

    // Generate the QR code
    const qrCode = await QRCode.toDataURL(shortUrl);

    // Save the new URL mapping even if longUrl already exists
    const newUrl = new Url({ longUrl, shortUrl: shortUrlId });
    await newUrl.save();

    res.json({ shortUrl, qrCode });
  } catch (err) {
    console.error('Error saving URL:', err);
    res.status(500).json({ error: 'Server error while saving URL' });
  }
};

module.exports = { shortenUrl };
