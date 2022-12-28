import React, { useState ,useEffect} from 'react';

function TextFileReader() {
  const [text, setText] = useState(''); // Initialize text state
  const [lines, setLines] = useState([]); // Initialize lines state

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get selected file

    // Create a FileReader object
    const reader = new FileReader();

    // Set the onload callback for the FileReader
    reader.onload = (event) => {
      const contents = event.target.result; // Get file contents
      setText(contents); // Update text state
    };

    // Read the file as text
    reader.readAsText(file);
  };

  // Split text into lines when it changes
  useEffect(() => {
    setLines(text.split(','));
  }, [text]);

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <pre>{JSON.stringify(lines, null, 2)}</pre>
    </div>
  );
}

export default TextFileReader;
