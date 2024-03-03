import pptxgen from "pptxgenjs";

export default function PowerPoint(text: any) {
    let pres = new pptxgen();
    // console.log(text);

    for(let i = 0; i < text.length; i++) {
        // console.log(text[i].slideTitle);
        let slide = pres.addSlide();
        let textboxText = text[i].slideTitle;
        let textboxOpts: any = { x: 1,
                            y: 0.2,
                            color: "363636",
                            w: "80%",
                            h: 1,
                            // align: 'center',
                            fontSize: 24};
        slide.addText(textboxText, textboxOpts);
        
        let contentText = '';
        for(let j = 0; j < text[i].slideContent.length; j++) {
            contentText += text[i].slideContent[j] + '\n';
        }

        textboxOpts = { x: 1,
                        y: 1,
                        color: "363636", 
                        w:'80%', 
                        h: 4,
                        fontSize: 20};
        slide.addText(contentText, textboxOpts);
    }

    pres.writeFile();
}