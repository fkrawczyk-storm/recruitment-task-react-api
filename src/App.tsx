import "./App.css";

// API URL: https://rickandmortyapi.com/api/character

function App() {
    return (
        <div className="app-container">
            <header>
                <h1>Rick and Morty Explorer 🧪</h1>
                <p>
                    Zadanie: Pobierz postacie z API i wyświetl je w formie kart.
                </p>
            </header>

            <main>
                {/* Tutaj wyrenderuj listę postaci.
                  Pamiętaj o obsłudze stanu ładowania (Loading...) i ewentualnych błędach.
                */}
                <div className="empty-state">
                    Tu powinna pojawić się lista...
                </div>
            </main>
        </div>
    );
}

export default App;
