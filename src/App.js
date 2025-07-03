import './App.css';
import { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {

  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");


  const handleInputChange = (e) => {
    // Update the input change to state variable 
    const text = e.target.value
    setInputText(text);

    // Basic spell check and correction
    const words = text.split(" ");

    const correctedWords = words.map((word) => {
      const correctWord = customDictionary[word.toLowerCase()];

      return correctWord || word
    })

    const correctedText = correctedWords.join(" ");


    // find the first suggestion
    const firstCorrection = correctedWords.find((word, index) => {
      return word !== words[index]
    })

    setSuggestedText(firstCorrection || "");

  }

  // Render the component
  return (
    <div className="App">

        <h1>Spell Check and Auto-Correction</h1>

        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />


        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}

    </div>
  );
}

export default App;