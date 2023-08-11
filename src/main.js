const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach((node) => {
                if (node.querySelector) {
                    const textArea = fetchTextArea();
                    if (textArea) {
                        const buttonWrapper = document.createElement("div");
                        buttonWrapper.className = "button-wrapper";
                        const buttons = [new ModerateWithLlmButton(textArea)];
                        for (const button of buttons) {
                            buttonWrapper.appendChild(button.button);
                        }
                        const form = node.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div.css-1dbjc4n.r-yfoy6g.r-184en5c > div > div.css-1dbjc4n.r-yfoy6g.r-1h8ys4a > div:nth-child(1) > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1h8ys4a.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div.css-1dbjc4n.r-yfoy6g.r-jumn1c.r-xd6kpl.r-gtdqiz.r-ipm5af.r-184en5c > div:nth-child(2) > div > div > div:nth-child(1)");
                        // console.log(form);
                        if (form) {
                            form.appendChild(buttonWrapper);
                        }
                    }
                }
            });
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true, characterData: true });
