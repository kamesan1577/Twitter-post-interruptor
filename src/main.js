const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach((node) => {
                if (node.querySelector) {
                    const textArea = node.querySelector("textarea[data-cy-post-form-text]");
                    // console.log(textArea);
                    if (textArea) {
                        const buttonWrapper = document.createElement("div");
                        buttonWrapper.style.display = 'flex';
                        buttonWrapper.style.flexWrap = 'wrap';
                        buttonWrapper.style.margin = '0px 16px 8px 16px';

                        // const post_button = document.querySelector("button[data-cy-open-post-form-submit]");
                        const ogya_button = document.createElement("button");
                        ogya_button.textContent = "おぎゃる";
                        ogya_button.style.margin = "2px";
                        ogya_button.style.border = "2px solid";
                        ogya_button.style.borderRadius = '8px';
                        ogya_button.style.color = '#fff';
                        ogya_button.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
                        ogya_button.addEventListener("click", () => {
                            textArea.value = "おぎゃあ";
                            textArea.dispatchEvent(new Event("input", { bubbles: true }));
                        });
                        buttonWrapper.appendChild(ogya_button);

                        const form = node.querySelector("footer[class=xkr7J]");
                        // console.log(form);
                        if (form) {
                            form.after(buttonWrapper);
                        }
                    }
                }
            });
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true, characterData: true });
