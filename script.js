document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".logo");
    const text = textElement.textContent;
    let modifiedText = '';
    
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        const spanClass = Math.random() > 0.5 ? 'flicker' : 'always-on';
        modifiedText += `<span class="${spanClass}">${letter}</span>`;
    }

    textElement.innerHTML = modifiedText;
});
