import { useState } from 'react';
import './App.css';

// Librairies
import { marked } from 'marked';

function App() {
// State
  const [message, setMessage] = useState("")

// Methode
  const valueOfTextarea = (e) =>{
    setMessage(e.target.value)
  }

  const getMarkdown = () => {
    let rawMarkup = marked.parse(message);
    return { __html: rawMarkup }
  }

// JSX
  return (
    <div className="App">
      <textarea onChange={ valueOfTextarea }></textarea>
      <div className='block' dangerouslySetInnerHTML={getMarkdown()}></div>
    </div>
  );
}

export default App;
