import React, { useState, useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import { createClient } from "@supabase/supabase-js";

// Setup your Supabase credentials
const supabase = createClient("https://your-project.supabase.co", "your-anon-key");

const App = () => {
  const editorRef = useRef(null);
  const containerRef = useRef(null);
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (containerRef.current) {
      editorRef.current = monaco.editor.create(containerRef.current, {
        value: "// Write your code here",
        language: "javascript",
        theme: "vs-dark"
      });
    }
  }, []);

  const runCode = async () => {
    const code = editorRef.current.getValue();
    setOutput("Running code... (this is a stub)");
    // Here you'd call your Fly.io or Cloud Run endpoint
  };

  const getAIHelp = async () => {
    const code = editorRef.current.getValue();
    setOutput("Fetching AI help... (stub)");
    // Replace with actual Nebius AI call
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div ref={containerRef} style={{ flexGrow: 1 }}></div>
      <button onClick={runCode}>Run Code</button>
      <button onClick={getAIHelp}>AI Help</button>
      <pre>{output}</pre>
    </div>
  );
};

export default App;
