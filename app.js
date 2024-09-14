import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import base64 from 'base-64';

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const events = req.body.events;

  try {
    for (let event of events) {
      const username = process.env.FLOWISE_USERNAME; // Get from Render environment
      const password = process.env.FLOWISE_PASSWORD; // Get from Render environment
      const apiKey = '9hl00vux7S_zpIZfSjfGIPTJKSdTdDDS0q-Y8XgYkU'; // Hardcoded Flowise API key
      
      // Basic Auth encoding
      const basicAuthHeader = 'Basic ' + base64.encode(username + ':' + password);

      const response = await fetch(
        "https://flowise-vy6k.onrender.com/api/v1/prediction/2f08ed7f-f1db-4d17-9ced-7492b8b7af6d",
        {
          headers: {
            Authorization: basicAuthHeader, // Basic Authentication
            "x-api-key": apiKey, // Hardcoded API key
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            question: event.message.text // Send the LINE message text as the question
          })
        }
      );

      const result = await response.json();
      console.log(`Flowise response:`, result);
    }
    res.status(200).send('OK');
  } catch (error) {
    if (error.response) {
      console.error('Error response from Flowise:', error.response.status, error.response.data);
    } else {
      console.error('Error message:', error.message);
    }
    res.status(500).send('Error processing the request');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

