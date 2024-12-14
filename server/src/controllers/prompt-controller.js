const InputPrompt = require("../../models/input-prompt");
const openai = require("../config/openai");

module.exports = {
    async sendText(req, res) {
        const openaiAPI = openai.instance(); 
        const inputModel = new InputPrompt(req.body);

        try {
            const response = await openaiAPI.chat.completions.create(openai.textCompletion(req.body));

            return res.status(200).json({
                success: true,
                data: response.choices[0].message.content
            });

        } catch (error) {
            return res.status(400).json({
                success: false,
                error: error.response ? error.response.data : error
            });
        }
    } 
}
