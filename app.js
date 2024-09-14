import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import base64 from 'base-64'; // Correctly imported base-64 package

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const events = req.body.events;

  try {
    for (let event of events) {
      const username = process.env.FLOWISE_USERNAME;
      const password = process.env.FLOWISE_PASSWORD;
      const authHeader = 'Basic ' + base64.encode(username + ':' + password); // Use base-64 encoding

      const response = await fetch(
        "https://flowise-vy6k.onrender.com/api/v1/prediction/2f08ed7f-f1db-4d17-9ced-7492b8b7af6d",
        {
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            question: event.message.text
          })
        }
      );

      const result = await response.json();
      console.log(`Flowise response:`, result);
    }
    res.status(200).send('OK');
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Error processing the request');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
