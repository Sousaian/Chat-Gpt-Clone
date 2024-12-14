class InputPrompt {
    constructor({ prompt }) {
        if (!prompt || typeof prompt !== 'string' || prompt.trim() === "") {
            throw new Error("Invalid prompt: Prompt is required and must be a non-empty string.");
        }
        this.prompt = prompt.trim(); // Remove espaços em excesso
    }
}

module.exports = InputPrompt;