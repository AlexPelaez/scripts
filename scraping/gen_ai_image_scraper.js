(async function () {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
    const randomDelay = (min, max) => new Promise(res => setTimeout(res, Math.floor(Math.random() * (max - min + 1)) + min));

    function clickDownloadButtonMobileHorizontal(index) {
        const downloadButton = document.evaluate(
            `/html/body/div/div/div/div/div[1]/div[1]/div/div[${index}]/div/div/div/div[1]/div[1]/div[3]/div/button[3]`,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;

        if (downloadButton) {
            downloadButton.click();
            console.log(`Clicked download button for image ${index}`);
        } else {
            console.warn("Download button not found!");
        }
    }

    function clickDownloadButtonVertical(index) {
        const downloadButton = document.evaluate(
            `/html/body/div/div/div/div/div[1]/div[1]/div/div/div[1]/div/div/div[${index}]/div/div/div/div/div[1]/div[1]/div[3]/div/button[3]`,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;

        if (downloadButton) {
            downloadButton.click();
            console.log(`Clicked download button for image ${index}`);
        } else {
            console.warn("Download button not found!");
        }
    }


    for (let i = 0; i < 1000; i++) {
        console.log(`Fetching batch ${i + 1}`);
        
        // Click generate button
        const generateButton = document.evaluate(
            `/html/body/div[1]/div/div/div/div[1]/div[2]/div[2]/div[1]/div/div/div[2]/button`,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;        
        if (generateButton) {
            generateButton.click();
            console.log("Clicked generate button, waiting for images...");
        } else {
            console.warn("Generate button not found!");
            break;
        }

        // Wait for images to load
        await randomDelay(20000, 25000); // Adjusted to add randomness

        // Click all download buttons
        for (let j = 1; j < 5; j++) {
            clickDownloadButtonVertical(j);
            await randomDelay(1000, 3000); 
        }

        await randomDelay(2000, 4000); 
    }

    console.log("Download complete!");
})();
