const OpenAI = require('openai');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

//OpenAI API key
const apiKey = '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';
const openai = new OpenAI({ apiKey });

// Middleware for Express to handle data and static files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Defines an array to store the chat messages
const chatHistory = [
  {
    role: "system",
    content: "You're a funny, friendly, blue guy named Doozy."
  }
];

// Creates the HTML form for users to input messages and links it to the webpage html/css
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  // Adds the user's message to the chat history
  chatHistory.push({ role: 'user', content: userMessage });

  // Generates a response from GPT-3
  const completion = await openai.chat.completions.create({
    messages: chatHistory,
    model: 'gpt-3.5-turbo',
  });

  // Extracts and sends the model's reply
  const modelReply = completion.choices[0].message.content;
  chatHistory.push({ role: 'assistant', content: modelReply });

  // Display the chat history in the response
  res.send(`
    <form action="/chat" method="post">
      <input type="text" name="message" placeholder="Type your message">
      <button type="submit">Send</button>
    </form>
    <p>You: ${userMessage}</p>
    <p>Doozy: ${modelReply}</p>
  `);
});

app.listen(3000, () => {
  console.log('Chatbot server is running on port 3000');
});
