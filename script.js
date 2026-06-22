let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Load available voices
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    
    // Set the default voice
    speech.voice = voices[0];

    // Populate the dropdown with name and language for better clarity
    voices.forEach((voice, i) => {
        let option = new Option(`${voice.name} (${voice.lang})`, i);
        voiceSelect.options[i] = option;
    });
};

// Update voice and language when selection changes
voiceSelect.addEventListener("change", () => {
    const selectedVoice = voices[voiceSelect.value];
    speech.voice = selectedVoice;
    
    // Crucial: Set the language property to match the selected voice
    speech.lang = selectedVoice.lang;
});

// Play functionality
document.querySelector("button").addEventListener("click", () => {
    let text = document.querySelector("textarea").value;
    
    // Validation: Ensure there is text to speak
    if (text.trim() === "") {
        alert("Please enter some text to convert.");
        return;
    }

    // Stop any ongoing speech before starting new text
    window.speechSynthesis.cancel();

    // Assign text and trigger speech
    speech.text = text;
    window.speechSynthesis.speak(speech);
});