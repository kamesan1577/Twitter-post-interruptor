const OgyaButton = class {
    constructor(textArea) {
        this.button = document.createElement("button");
        this.buttonName = "おぎゃる";
        this.buttonValue = "おぎゃあ";
        this.button.textContent = this.buttonName;
        this.button.className = "exButton";
        this.button.addEventListener("click", () => {
            textArea.value = this.buttonValue;
            textArea.dispatchEvent(new Event("input", { bubbles: true }));
        });
    }
}
