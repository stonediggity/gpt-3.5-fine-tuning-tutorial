//Imports
import OpenAI from "openai";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
const openai = new OpenAI();

// await openai.files.create({
//   file: fs.createReadStream("style-and-tone.jsonl"),
//   purpose: "fine-tune",
// });

// const files = await openai.files.list();
// console.log(files);

// const fineTune = await openai.fineTunes
//   .create({
//     training_file: "file-hJXe81Sn2V7X4EA14K7srsXm",
//     model: "gpt-3.5-turbo-0613",
//   })
//   .catch((err) => {
//     if (err instanceof OpenAI.APIError) {
//       console.error(err);
//     } else {
//       throw err;
//     }
//   });

// console.log(fineTune);

const requestData = {
  training_file: "file-uqcjLrASAKMSEKRTbfXe96Dm",
  model: "gpt-3.5-turbo-0613",
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
};

fetch("https://api.openai.com/v1/fine_tuning/jobs", {
  method: "POST",
  headers: headers,
  body: JSON.stringify(requestData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
