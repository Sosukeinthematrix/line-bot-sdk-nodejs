import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios'; // Used to send requests to Flowise

const app = express();

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Define your webhook endpoint for LINE
app.post('/webhook', async (req, res) => {
  const events = req.body.events;

  try {
    // Loop through the events and send them to Flowise
    for (let event of events) {
      const response = await axios.post('https://your-flowise-api-endpoint.com', {
        event
      });

      console.log(`Flowise response: ${response.data}`);
    }

    res.status(200).send('OK');  // Respond with success to LINE
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Error processing the request');
  }
});

// Set the port for Render's environment or default to 3000 locally
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
