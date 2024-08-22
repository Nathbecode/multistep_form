import React from "react";
import ReactDOM from "react-dom/client"; 
import "./styles/tailwind.css"; 
import { ContactUs } from "./components/contact";

// Get the root element
const rootElement = document.getElementById("root");

// Create a root and render your App component into it
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  const container = 'bg-gray-600 flex gap-10 p-20 justify-center items-center';

  return (
    <div className="App  min-h-screen flex flex-col">
      <header className={container}>
        <h1 className="text-white text-3xl">Multi Step Form</h1>
      </header>
      <main className="flex items-center justify-center flex-1">
        <ContactUs/>
      </main>
    </div>
  );
}



export default App;
