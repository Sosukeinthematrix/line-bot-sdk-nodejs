import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch'; // Assuming you're using node-fetch

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const events = req.body.events;

  try {
    for (let event of events) {
      // Flowise API endpoint
      const apiUrl = "https://flowise-vy6k.onrender.com/api/v1/prediction/ac995577-b040-4910-a70e-50fcbaaadfbc";
      
      // Authorization Bearer token
      const apiKey = '4OgucIeSeYRUOlcAzxC-8dyb3UjiWH_DxkLs0PL9yh8';

      // Construct the request headers and body
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}` // Use the Bearer token
      };

      const body = JSON.stringify({
        question: event.message.text // Send the LINE message text as the question
      });

      // Send the request to Flowise
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: body
      });

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
