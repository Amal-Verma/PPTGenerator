const gemini = require('./geminiConfig.js')

exports.generate = async (req, res) => {
    const topic = req.body;
    // console.log("in");
    const Template = "Generate a very large output!!. Create a outline for powerpoint as slide number, in each slide put a sub title and a content.Each sub title should only be one line max of 7 words. Each content should only be 3 to 5 sentences. Each sentence should be described briefly make it as large as possible. Make 5 to 8 slides adjust as per content of the powerpoint the main goal is 5 sentences. Output Structure:\n **Slide 1** \n **SubTitle:** subtitle \n **Content:** content1 \n content2 .... **Slide 2**....   .Note: output text should have at least 700 tokens. Leave space only for new slide. Remember to give at least 4 sentences of 12 tokens in each content."

    const userText = "Topic: " + topic.title + "\nDescription: " + topic.description
                    + "\nGenerate a powerpoint on the above title and description using this template"+ "\nTemplate: " + Template;
    // console.log(topic.title);

    outputText = await gemini.generateText(userText)
    // console.log(outputText);

    res.status(200).json({rawText: outputText});
}