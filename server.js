import OpenAI from "openai";
import express from "express";

const express = require('express');
const app = express();

const OpenAI = require("openai");

//our api key goes here
const openai = new OpenAI({ apiKey:'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'}); //API key should work now if I put money on my account. -Cooper


async function main() {
  const completion = await openai.chat.completions.create({
    messages: 
    [{ 
      role: "system", 
      content: "You're a funny blue guy named Doozy." 
    },
    {
      role: "user",
      content: "Hi, How are you?"
    }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

main();