import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          View open-source code by{" "}
          <a href="https://www.linkedin.com/in/samanthapoe/">Sam Poe</a> on{" "}
          <a href="https://github.com/spoe-code/dictionary-proj">Github</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
