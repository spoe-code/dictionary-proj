import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Search for a word</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Sam Poe</footer>
      </div>
    </div>
  );
}

export default App;
