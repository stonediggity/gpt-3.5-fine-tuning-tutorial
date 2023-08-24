# OpenAI Fine-tuning Example

This repository contains an example of how to use the OpenAI API to fine-tune a GPT-3 model. The code demonstrates how to upload a file, list files, initiate fine-tuning, and how to handle errors from the API.

## Prerequisites

- Node.js
- npm (comes with Node.js)
- An OpenAI account with API access

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the required packages.
3. Create a `.env` file in the root of the project and add your OpenAI API key:

OPENAI_API_KEY=YOUR_API_KEY_HERE

Replace `YOUR_API_KEY_HERE` with your actual OpenAI API key.

## How it works

1. **Setting up the environment and imports**: The code starts by importing necessary modules and initializing the OpenAI SDK.
2. **Uploading a file**: The commented code demonstrates how to upload a file (`style-and-tone.jsonl`) for fine-tuning purposes.
3. **Listing uploaded files**: The commented code also shows how to list all uploaded files.
4. **Fine-tuning the model**: There are two methods demonstrated for fine-tuning:
 - Using the OpenAI SDK.
 - Using a fetch request directly to the OpenAI API.
5. **Error Handling**: The code has error handling for API-specific errors.

## Running the Code

To run the code, simply navigate to the project directory and run:

node your_filename.js

Replace `your_filename.js` with the name of the file containing the above code.

## Note

The code contains some commented sections. To use them, simply uncomment the desired section and comment out any conflicting sections.
