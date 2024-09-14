import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch'; // Assuming you're using node-fetch

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const events = req.body.events;

  try {
    for (let event of events) {
      const apiKey = '9hl00vux7S_zpIZfSjfGIPTJKSdTdDDS0q-Y8XgYkU'; // Hardcoded Flowise API key

      // Construct the request headers as used in cURL
      const headers = {
        "Authorization": `Bearer ${apiKey}`, // Use Bearer token like in cURL
        "Content-Type": "application/json"
      };

      const body = JSON.stringify({
        question: event.message.text
      });

      // Send the request to Flowise, matching the cURL structure
      const response = await fetch(
        "https://flowise-vy6k.onrender.com/api/v1/prediction/2f08ed7f-f1db-4d17-9ced-7492b8b7af6d",
        {
          method: "POST",
          headers: headers,
          body: body
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


