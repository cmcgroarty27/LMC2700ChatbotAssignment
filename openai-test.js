const Openai = require("openai");

//our api key goes here
const openai = new OpenAI({ apiKey:'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'}); //replace 'API Key' with your API key


async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();