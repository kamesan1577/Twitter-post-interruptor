const OgyaButton = class {
    constructor(textArea) {
        this.button = document.createElement("button");
        this.buttonName = "おぎゃる";
        this.buttonValue = "おぎゃあ";
        this.button.textContent = this.buttonName;
        this.button.className = "exButton";
        this.button.addEventListener("click", () => {
            setInputText(textArea, this.buttonValue);
        });
    }
}

