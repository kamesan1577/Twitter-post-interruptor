const Completion = class {
    async sendPrompt(prompt) {
        const API_KEY = await chrome.storage.local.get(["token"]);
        const END_POINT = await chrome.storage.local.get(["endpoint"]);

        const systemPrompt = "あなたにはユーザーのツイート内容が入力されます。入力に含まれる不適切な表現を柔らかい表現に置き換えてください。返答は変換結果のみを返してください。";
        const userPrompt = prompt;
        console.log(userPrompt);
        const response = await fetch(`${END_POINT.endpoint}/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY.token}`,
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [{
                    "role": "system",
                    "content": systemPrompt,
                },
                {
                    "role": "user",
                    "content": userPrompt,
                }],
            }),
        });
        const data = await response.json();
        console.log(data);
        return data.choices[0].message.content;
    }
}

const ModerateWithLlmButton = class {
    constructor(textArea) {
        this.button = document.createElement("button");
        this.buttonName = "修正";
        this.buttonValue = textArea.value;
        this.button.textContent = this.buttonName;
        this.button.className = "exButton";
        this.button.addEventListener("click", async () => {
            const completion = new Completion();
            const newText = await completion.sendPrompt(textArea.value);
            textArea.value = newText;
            textArea.dispatchEvent(new Event("input", { bubbles: true }));
        });
    }
}
