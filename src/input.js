const setInputText = async (textArea, text) => {
    const textWrapper = textArea.querySelector('[data-text="true"]')?.parentElement;
    if (textWrapper) {
        while (textWrapper.firstChild) {
            textWrapper.removeChild(textWrapper.firstChild);
        }
        const newTextNode = document.createTextNode(text);
        textWrapper.appendChild(newTextNode);
        textWrapper.dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': true }));
    }
};
