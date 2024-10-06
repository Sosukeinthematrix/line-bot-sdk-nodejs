import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import axios from 'axios'; // For sending messages back to LINE

const app = express();
app.use(bodyParser.json());

const sessionStore = {}; // In-memory store for Flowise session IDs and chat IDs

app.post('/webhook', async (req, res) => {
  const events = req.body.events;

  if (!events || events.length === 0) {
    return res.status(400).send('No events received');
  }

  try {
    for (let event of events) {
      // Flowise API endpoint
      const apiUrl = "";
      const apiKey = 'Bearer ; // Bearer token for Flowise

      // Log userId for session tracking
      const userId = event.source.userId;
      console.log(`User ID: ${userId}`);

      // Check if a sessionId and chatId exist for this user, or start a new session
      let sessionId = sessionStore[userId]?.sessionId;
      let chatId = sessionStore[userId]?.chatId;

      // Construct the request to Flowise, only adding sessionId and chatId if they exist
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      };

      const body = {
        question: event.message.text
      };

      if (sessionId) body.sessionId = sessionId;
      if (chatId) body.chatId = chatId;

      // Send the request to Flowise
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });

      const result = await response.json();
      console.log(`Flowise response:`, result);

      // If Flowise returns a sessionId or chatId, store them for future interactions
      if (result.sessionId || result.chatId) {
        sessionStore[userId] = {
          sessionId: result.sessionId || sessionId,
          chatId: result.chatId || chatId
        };
      }

      // Send the Flowise response text back to the user on LINE
      const replyToken = event.replyToken;
      const lineHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ` // Replace with your valid LINE token
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
