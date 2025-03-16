const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.gemini_api_key);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

exports.generateText = async (inputPrompt) => {
    // const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = inputPrompt;
    // console.log(inputPromt);

    const result = await model.generateContent(prompt, { reset_context: true });
    const response = result.response;
    const text = response.text();

    return text
}
