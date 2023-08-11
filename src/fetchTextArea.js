const fetchTextArea = () => {
    let currentTextArea = document.querySelector('[data-testid="tweetTextarea_0"]');
    currentTextArea = currentTextArea.querySelector('[data-text="true"]')?.parentNode;
    return currentTextArea;
};



