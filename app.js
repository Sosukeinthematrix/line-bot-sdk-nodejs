import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import axios from 'axios'; // For sending messages back to LINE

const app = express();
app.use(bodyParser.json());

const sessionStore = {}; // In-memory store for Flowise session IDs

app.post('/webhook', async (req, res) => {
  const events = req.body.events;

  if (!events || events.length === 0) {
    return res.status(400).send('No events received');
  }

  try {
    for (let event of events) {
      // Flowise API endpoint
      const apiUrl = "https://flowise-vy6k.onrender.com/api/v1/prediction/ac995577-b040-4910-a70e-50fcbaaadfbc";
      const apiKey = '4OgucIeSeYRUOlcAzxC-8dyb3UjiWH_DxkLs0PL9yh8'; // Bearer token for Flowise

      // Log userId for session tracking
      const userId = event.source.userId;
      console.log(`User ID: ${userId}`);

      // Check if a sessionId exists for this user, or start a new session
      let sessionId = sessionStore[userId] || '';

      // Construct the request to Flowise, including sessionId if exists
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      };

      const body = JSON.stringify({
        question: event.message.text,
        sessionId: sessionId // Reuse sessionId for session management
      });

      // Send the request to Flowise
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: body
      });

      const result = await response.json();
      console.log(`Flowise response:`, result);

      // If Flowise returns a sessionId, store it for future interactions
      if (result.sessionId) {
        sessionStore[userId] = result.sessionId;
      }

      // Send the Flowise response text back to the user on LINE
      const replyToken = event.replyToken;
      const lineHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer YOUR_LINE_CHANNEL_ACCESS_TOKEN` // Replace with your valid LINE token
      };

      // Construct the message body for LINE
      const lineBody = {
        replyToken: replyToken,
        messages: [{
          type: "text",
          text: result.text // The response from Flowise
        }]
      };

      // Send the message to LINE
      await axios.post('https://api.line.me/v2/bot/message/reply', lineBody, { headers: lineHeaders });
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
