export default function structure (genText: string){
    const slides = genText.split("**Slide");
    const slideStructure = [];
    for (let i = 1; i < slides.length; i++) {
        const slide = slides[i];
        let slideTitle = slide.slice(slide.slice(0,20).toLowerCase().indexOf("**subtitle:**") + 13, slide.indexOf("\n**Content:**") + 1);
        slideTitle = slideTitle.slice(0, slideTitle.indexOf("\n"));
        slideTitle = slideTitle.trim();

        let slideContent = (slide.slice(slide.indexOf("**Content:**") + 12)).split("\n");
        slideContent = slideContent.filter((content) => content.trim() !== "");
        slideStructure.push({slideTitle, slideContent})
    }
    return slideStructure;
}