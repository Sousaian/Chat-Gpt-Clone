const { OpenAI } = require('openai');
require("dotenv").config();

module.exports = class OpenAIService {

    static instance() {
        return new OpenAI({
            apiKey: process.env.OPEN_AI_KEY,  
        });
    }

    static textCompletion({ prompt }) {
        return {
            model: "gpt-4",  
            messages: [
                { role: "user", content: `${prompt}` },
            ],
            temperature: 1, 
            max_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        };
    }
};
