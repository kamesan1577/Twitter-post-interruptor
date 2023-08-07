const setInputText = async (textArea, text) => {
    const textWrapper = textArea.querySelector('[data-text="true"]')?.parentElement;
    if (textWrapper) {
        textWrapper.innerHTML = `<span data-text="true">${text}</span>`;
        textWrapper.dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': true }));
    }
};
